import { Box, Button, TextField, Typography } from '@mui/material'
import headset from '../../../assets/images/headset.png'
import React, { useState } from 'react'

const InputLink = ({ onClick }: { onClick?: (value: string) => void }) => {
  const [pasteLink, setPasteLink] = useState<string>('')

  console.log(headset)
  return (
    <Box
      position="relative"
      p={2}
      sx={{
        backgroundColor: '#002536',
        height: '200px',
        borderRadius: '0 0 60px 60px',
      }}
    >
      <Box
        position="absolute"
        width="150px"
        height="127px"
        bottom={0}
        right={0}
        sx={{
          backgroundImage: `url(${headset})`,
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
        }}
      ></Box>
      <Box py={1} display="flex" alignItems="center" zIndex={1}>
        <TextField
          fullWidth
          size="small"
          value={pasteLink}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPasteLink(e.target.value)
          }
          sx={{
            mr: 2,
            backgroundColor: '#474747',
          }}
        />
        <Button variant="contained" onClick={() => onClick?.(pasteLink)}>
          Add
        </Button>
      </Box>
      <Box position="relative" zIndex={1}>
        <Typography
          textAlign="center"
          sx={{
            fontSize: '20px',
            mt: 4,
          }}
        >
          Just Paste the link and enjoy!
        </Typography>
      </Box>
    </Box>
  )
}

export default InputLink
