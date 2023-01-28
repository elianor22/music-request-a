import React from 'react'
import PreviousIcon from './assets/PreviousIcon'
import Play from './assets/Play'
import Pause from './assets/Pause'
import NextIcon from './assets/NextIcon'
import Delete from './assets/Delete'
import { IconProps } from '../../../@types/interfaces/iconProps'
import moreDots from './assets/MoreDots'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const components: any = {
  prev: PreviousIcon,
  play: Play,
  pause: Pause,
  next: NextIcon,
  delete: Delete,
  more: moreDots,
}
const Icon = ({
  variant,
  color,
  size = 'medium',
  sx,
}: IconProps): JSX.Element | null => {
  if (components[variant]) {
    const IconComponent = components[variant]
    return <IconComponent color={color} sx={sx} size={size} />
  }
  return null
}

export default Icon
