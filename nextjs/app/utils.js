import imageUrlBuilder from '@sanity/image-url';
import client from '../client';

const builder = imageUrlBuilder(client);

export const urlFor = source => {
    const imageSource = builder.image(source);
    const opts = imageSource?.options

    const src = opts.source.split('-')
    if (src.length >= 3) {
        return `${opts.baseUrl}/images/${opts.projectId}/${opts.dataset}/${src[1]}-${src[2]}.${src[3]}`
    }
    return ""
}

export const isMobile = (userAgent) => {
    return /android.+mobile|ip(hone|[oa]d)/i.test(userAgent);
  };