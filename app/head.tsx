export default function HomeHead () {
  const title = 'Guillem Andreu - Designer and Web Developer'
  const description = 'Hi. I’m Guillem, a designer and web developer based in Berlin. This is my Portfolio Website.'

  return (
    <>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
    </>
  )
}
