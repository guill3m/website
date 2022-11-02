export default function AboutHead () {
  const title = 'About me - Guillem Andreu'
  const description = 'Hi, my name is Guillem and I’m a graphic designer from València (ES), currently living in Berlin (DE). I’m also a self-taught front-end web developer.'

  return (
    <>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
    </>
  )
}
