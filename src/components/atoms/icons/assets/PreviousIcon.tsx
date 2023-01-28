import React from 'react'
import FastRewindIcon from '@mui/icons-material/FastRewind'
import { IIcon } from '../../../../@types/interfaces/iconProps'

const PreviousIcon = ({ color = 'inherit', size, sx }: IIcon) => {
  return <FastRewindIcon fontSize={size} sx={{ ...sx, color: color }} />
}

export default PreviousIcon
