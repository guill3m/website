import { RTTextNode } from '@prismicio/types'

export default interface ProjectInterface {
  date: {
    month: number,
    year: number,
  },
  description: [RTTextNode],
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
