export default function ContactHead () {
  const title = 'Contact - Guillem Andreu'
  const description = 'If you are interested in my work, here you can find out how to contact me.'

  return (
    <>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
    </>
  )
}
