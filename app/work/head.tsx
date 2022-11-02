export default function WorkHead () {
  const title = 'Work - Guillem Andreu'
  const description = 'Here is a list of some of the projects I have done or I’m currently working on.'

  return (
    <>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
    </>
  )
}
