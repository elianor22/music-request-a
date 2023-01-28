import React from 'react'
import FastForwardIcon from '@mui/icons-material/FastForward'
import { IIcon } from '../../../../@types/interfaces/iconProps'


const NextIcon = ({ color = 'inherit', size, sx }: IIcon) => {
  return <FastForwardIcon fontSize={size} sx={{ ...sx, color: color }} />
}

export default NextIcon
