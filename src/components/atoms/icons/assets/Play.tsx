import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { IIcon } from '../../../../@types/interfaces/iconProps'


const Play = ({ color = 'inherit', size, sx }: IIcon) => {
  return <PlayArrowIcon fontSize={size} sx={{ ...sx, color: color }} />
}

export default Play
