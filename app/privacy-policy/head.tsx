export default function PrivacyPolicyHead () {
  const title = 'Privacy Policy - Guillem Andreu'
  const description = 'This Privacy Policy describes how your personal information is collected and used when you visit https://www.guillemandreu.com.'

  return (
    <>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
    </>
  )
}
