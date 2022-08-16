import { Box, Button } from '@mui/material'
import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Box>
      <Link href='/login'>
        <Button variant='contained'>ログイン</Button>
      </Link>
      <Link href='/signin'>
        <Button variant='contained'>新規登録</Button>
      </Link>
    </Box>
  )
}

export default Home
