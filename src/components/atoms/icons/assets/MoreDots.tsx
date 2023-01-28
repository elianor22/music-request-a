import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { IIcon } from '../../../../@types/interfaces/iconProps'

const moreDots = ({ color = 'inherit', size, sx }: IIcon) => {
  return <MoreVertIcon fontSize={size} sx={{ ...sx, color: color }} />
}

export default moreDots
