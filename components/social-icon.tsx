type SocialIconProps = {
  platform: 'bluesky' | 'github' | 'instagram' | 'linkedin'
  size?: number
}

export default function SocialIcon({
  platform,
  size = 18,
}: Readonly<SocialIconProps>) {
  return (
    <svg aria-hidden="true" height={size} viewBox="0 0 18 18" width={size}>
      <use xlinkHref={`#social-icon-svg-${platform}`} />
    </svg>
  )
}
