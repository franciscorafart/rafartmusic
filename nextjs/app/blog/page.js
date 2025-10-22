import Link from 'next/link';
import articlesData from './articles';
import './style.css';

const Blog = async () => {
    const articles = articlesData();

    return (
        <div className="container">
            <h1 className="text title">Blog</h1>
            <div className="articles-container">
                {articles.map((article) => {
                    return (
                        <div className="article-preview" key={article.slug}>
                            <h2 className="text">{article.title}</h2>
                            <p className="text date">{new Date(article.date).toLocaleDateString()}</p>
                            {article.image && (
                                <div className="imageDiv">
                                    <img src={article.image} alt={article.title} />
                                </div>
                            )}
                            <div className="preview-content">
                                <span key={`preview-${article.slug}`} className="text">
                                    {article.summary}
                                </span>
                            </div>
                            <div>
                                <Link className="callToAction text" href={`blog/${article.slug}`}>
                                    Read More
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Blog;
