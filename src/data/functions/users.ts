import { doc, setDoc } from 'firebase/firestore'
import { UsersDocument } from '~/types/users'
import { firebaseRefs } from '../schema'

export const createUserDocument = async (user: UsersDocument) => {
  try {
    await setDoc(doc(firebaseRefs.users.parent, user.id), {
      ...user,
    })
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}
