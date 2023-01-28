import { Container, Box, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'

import PlayerControl from '../../components/organisms/playerControl/PlayerControl'
import ItemMusicList from '../../components/molecules/ItemMusicList/ItemMusicList'
import InputLink from '../../components/molecules/inputLink/InputLink'

import Dummy from '../../dummy/musicList.json'
import { IDataList } from '../../@types/interfaces/dataDummy'

const HomePage = () => {
  const [pastedLink, setPastedLink] = useState<string>('')
  console.log(pastedLink)

  return (
    <Box>
      <Container maxWidth="sm">
        <Box>
          <InputLink onClick={(val: string) => setPastedLink(val)} />
        </Box>
        <Box pt={3}>
          <Typography
            sx={{
              mb: 1,
            }}
          >
            Music List
          </Typography>
          <Paper>
            {Dummy.data.map((item: IDataList) => (
              <ItemMusicList
                key={item.id}
                id={item.id}
                singer={item.singer}
                title={item.title}
                thumb={item.thumb}
              />
            ))}
          </Paper>
        </Box>
        <PlayerControl />
      </Container>
    </Box>
  )
}

export default HomePage
