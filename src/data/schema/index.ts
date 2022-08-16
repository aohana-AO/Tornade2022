import { problemsCollection } from './problems'
import { usersCollection } from './users'

/** firebase コレクション・ドキュメント Reference */
export const firebaseRefs = {
  problems: {
    parent: problemsCollection,
  },
  users: {
    parent: usersCollection,
  },
}
