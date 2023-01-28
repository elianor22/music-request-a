import React from 'react'
import PauseIcon from '@mui/icons-material/Pause'
import { IIcon } from '../../../../@types/interfaces/iconProps'

const Pause = ({ color = 'inherit', size, sx }: IIcon) => {
  return <PauseIcon fontSize={size} sx={{ ...sx, color: color }} />
}

export default Pause
