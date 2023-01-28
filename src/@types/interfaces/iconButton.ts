import { IconButtonProps, SxProps } from "@mui/material"
import { IconsVariant } from "./iconProps"

export interface IIconButton extends IconButtonProps {
    variant: IconsVariant
    sx?: SxProps
}