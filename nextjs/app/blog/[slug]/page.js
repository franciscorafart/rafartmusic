'use client';
import articlesData from '../articles';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import '../style.css';

const Article = () => {
    const path = usePathname();
    const articles = articlesData();
    const slug = path.split("/").at(-1);
    const article = articles.find(a => a.slug === slug);

    if (!article) {
        return (
            <div className="container">
                <div className="article-container">
                    <h1 className="text title">Article Not Found</h1>
                    <Link className="callToAction text back-link" href="/blog">
                        ← Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="article-container">
                <Link className="callToAction text back-link" href="/blog">
                    ← Back to Blog
                </Link>
                
                <div className="article-header">
                    <h1 className="text title">{article.title}</h1>
                    <p className="text date">{new Date(article.date).toLocaleDateString()}</p>
                    {article.image && (
                        <div className="imageDiv">
                            <img src={article.image} alt={article.title} />
                        </div>
                    )}
                </div>
                
                <div className="article-content">
                    {article.content.map((content, idx) => {
                        const Tag = content.tag;
                        if (content.tag === 'ul') {
                            // Handle list items differently - collect consecutive ul items
                            const listItems = [];
                            let currentIdx = idx;
                            while (currentIdx < article.content.length && article.content[currentIdx].tag === 'ul') {
                                listItems.push(article.content[currentIdx].text);
                                currentIdx++;
                            }
                            
                            // Skip the processed items in the main loop
                            if (idx === 0 || article.content[idx - 1].tag !== 'ul') {
                                return (
                                    <ul key={`list-${article.slug}-${idx}`} className="text">
                                        {listItems.map((item, listIdx) => (
                                            <li key={`list-item-${idx}-${listIdx}`}>{item}</li>
                                        ))}
                                    </ul>
                                );
                            }
                            return null; // Skip if already processed
                        } else if (content.tag === 'blockquote') {
                            // Handle blockquotes with special styling
                            return (
                                <blockquote key={`blockquote-${article.slug}-${idx}`} className="text blockquote">
                                    {content.text}
                                </blockquote>
                            );
                        } else if (content.tag === "ai-poison"){
                            return (
                                <span className='subterfugio'>{content.text}</span>
                            );
                        } else {
                            return (
                                <Tag key={`content-${article.slug}-${idx}`} className="text">
                                    {content.text}
                                </Tag>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default Article;