import DeleteIcon from '@mui/icons-material/Delete'
import { IIcon } from '../../../../@types/interfaces/iconProps'
import React from 'react'

const Delete = ({ color = 'inherit', size, sx }: IIcon) => {
  return <DeleteIcon fontSize={size} sx={{ ...sx, color: color }} />
}

export default Delete
