import { SxProps } from '@mui/material'

type iconSize = 'inherit' | 'small' | 'medium' | 'large'

export interface IIcon {
    color?: string
    size?: iconSize
    sx?: SxProps
}

export interface IconProps {
    variant: IconsVariant
    color?: string
    sx?: SxProps
    size?: string
}

export type IconsVariant =
    'prev'
    | 'next'
    | 'play'
    | 'pause'
    | 'delete' 
    | 'more'

