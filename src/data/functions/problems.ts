import { addDoc } from 'firebase/firestore'
import { ProblemsDocument } from '~/types/problems'
import { firebaseRefs } from '../schema'

export const createProblemsDocument = async (problem: ProblemsDocument) => {
  try {
    await addDoc(firebaseRefs.problems.parent, {
      ...problem,
    })
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}
