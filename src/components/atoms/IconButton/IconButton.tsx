import { IconButton as MuiIconButton } from '@mui/material'
import React from 'react'
import Icon from '../icons'
import { IIconButton } from '../../../@types/interfaces/iconButton'

const IconButton = (props: IIconButton) => {
  const { variant, sx } = props
  return (
    <MuiIconButton
      {...props}
      color={props.color}
      onClick={props.onClick}
      sx={{ backgroundColor: '#313131', ...sx }}
    >
      <Icon variant={variant} />
    </MuiIconButton>
  )
}

export default IconButton
