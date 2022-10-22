import { RTTextNode } from '@prismicio/types'

export type Project = {
  date: {
    month: number,
    year: number,
  },
  description: [RTTextNode, ...RTTextNode[]],
  excerpt: string,
  featured: boolean,
  imageColumns: number,
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

export type ProjectThumbnail = {
  featured: boolean,
  path: string,
  thumbnail: {
    alt: string,
    src: string,
  },
  title: string,
}
