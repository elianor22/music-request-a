import { Box, Card, Slider, Stack } from '@mui/material'

import React, { useState } from 'react'
import IconButton from '../../atoms/IconButton/IconButton'

const PlayerControl = () => {
  const [paused, setPaused] = useState<boolean>(true)
  const [playingAt, setPlayingAt] = useState<number | number[]>(0)

  return (
    <Box
      display="flex"
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
      }}
    >
      <Card
        variant="outlined"
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          borderRadius: 0,
        }}
      >
        <Slider
          min={0}
          max={100}
          value={playingAt}
          onChange={(_, v: number | number[]): void => setPlayingAt(v)}
          aria-labelledby="continuous-slider"
        />
        <Box sx={{ alignSelf: 'center', px: { xs: 0, sm: 2 } }}>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              mt: 2,
              justifyContent: { xs: 'space-between', sm: 'flex-start' },
            }}
          >
            <IconButton variant="prev" />
            <Box>
              {paused ? (
                <IconButton
                  variant="play"
                  onClick={() => {
                    console.log('asds')
                    setPaused((val) => !val)
                  }}
                />
              ) : (
                <IconButton
                  variant="pause"
                  onClick={() => setPaused((val) => !val)}
                />
              )}
            </Box>
            <IconButton variant="next" />
          </Stack>
        </Box>
      </Card>
    </Box>
  )
}

export default PlayerControl
