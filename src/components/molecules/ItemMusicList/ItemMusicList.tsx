import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import IconButton from '../../atoms/IconButton/IconButton'
import { IItemMusicList } from '../../../@types/interfaces/itemMusicList'

const ItemMusicList = ({
  id,
  title,
  singer,
  thumb,
  onPlay,
  onDelete,
}: IItemMusicList) => {
  return (
    <Stack
      direction="row"
      p={1}
      sx={{
        justifyContent: 'space-between',
      }}
    >
      <Box display="flex">
        <Box
          width="50px"
          height="50px"
          mr={2}
          sx={{
            borderRadius: '4px',
            overflow: 'hidden',
          }}
        >
          <img
            src={thumb}
            width="100%"
            height="100%"
            style={{
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box>
          <Typography
            variant="body1"
            sx={{
              fontSize: '14px',
              mb: '4px',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: '12px',
              color: '#989898',
            }}
          >
            {singer}
          </Typography>
        </Box>
      </Box>
      <Box>
        <IconButton
          variant="play"
          size="small"
          onClick={() => onPlay?.(id)}
          sx={{
            mr: 1,
          }}
        />
        <IconButton
          variant="delete"
          size="small"
          onClick={() => onDelete?.(id)}
          sx={{
            mr: 1,
          }}
        />
        <IconButton
          variant="more"
          size="small"
          onClick={() => onDelete?.(id)}
        />
      </Box>
    </Stack>
  )
}

export default ItemMusicList
