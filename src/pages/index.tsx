import { Box, Button } from '@mui/material'
import { addDoc, collection } from 'firebase/firestore'
import type { NextPage } from 'next'
import { firestore } from '~/plugins/firebase'

const Home: NextPage = () => {
  const addDocument = async () => {
    try {
      const docRef = await addDoc(collection(firestore, 'users'), {
        born: 1815,
        first: 'Ada',
        last: 'Lovelace',
      })
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }
  return (
    <Box>
      <Button variant='contained' onClick={addDocument}>
        データを追加
      </Button>
    </Box>
  )
}

export default Home
