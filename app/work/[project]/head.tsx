import { getProject } from '../../../lib/getData'
import siteMetadata from '../../../lib/siteMetadata'

export default async function ProjectHead ({ params } : { params: { project: string }}) {
  const project = await getProject(params.project)

  const title = `${project.title} - Work - Guillem Andreu`
  const description = project.excerpt

  return (
    <>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta property='og:type' content='article' />
      <meta property='og:image' content={`${siteMetadata.cdnUrl}${project.thumbnail.src}`} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:image' content={`${siteMetadata.cdnUrl}${project.thumbnail.src}`} />
    </>
  )
}
