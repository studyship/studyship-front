import React from 'react'
import defaultPofile from 'src/styles/icons/ss_icon_thin_profile.svg'
import { Icon, NormalText } from '../Atoms'

export interface ThumbnailProps {
  profileUrl?: string
  profileSize?: number
  fontSize?: string
  interval?: string
  username: string
}
const Thumbnail = ({
  profileUrl,
  profileSize,
  fontSize,
  interval,
  username,
}: ThumbnailProps) => {
  return (
    <>
      <Icon
        imgSrc={profileUrl ?? defaultPofile}
        svgSize={profileSize}
        marginBottom={interval ?? interval}
      />
      <NormalText text={username} fontSize={fontSize ?? '24px'} />
    </>
  )
}

export default Thumbnail
