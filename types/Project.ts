import { RTTextNode } from '@prismicio/types'

export interface ProjectInterface {
  date: {
    month: number,
    year: number,
  },
  description: [RTTextNode],
  excerpt: string,
  featured: boolean,
  images: {
    alt: string,
    src: string,
  }[],
  path: string,
  thumbnail: {
    alt: string,
    src: string,
  },
  title: string,
  subtitle: string,
}

export interface ProjectThumbnailInterface {
  featured: boolean,
  path: string,
  thumbnail: {
    alt: string,
    src: string,
  },
  title: string,
}
