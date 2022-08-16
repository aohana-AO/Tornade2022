import { addDoc } from 'firebase/firestore'
import { UsersDocument } from '~/types/users'
import { firebaseRefs } from '../schema'

export const createUserDocument = async (user: UsersDocument) => {
  try {
    await addDoc(firebaseRefs.users.parent, {
      ...user,
    })
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}
