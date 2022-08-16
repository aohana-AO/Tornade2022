import { collection, QueryDocumentSnapshot } from 'firebase/firestore'
import type { DocumentData, FirestoreDataConverter } from 'firebase/firestore'
import { firestore } from '~/plugins/firebase'

import { UsersDocument } from '~/types/users'

/** ユーザデータ コンバータ層 */
const usersConverter: FirestoreDataConverter<UsersDocument> = {
  fromFirestore(snapshot: QueryDocumentSnapshot): UsersDocument {
    const data = snapshot.data()
    return { areaInfo: data.areaInfo, id: data.id, name: data.name }
  },
  toFirestore(data: UsersDocument): DocumentData {
    return { ...data }
  },
}

/** ユーザデータ コレクション ref */
export const usersCollection = collection(firestore, 'users').withConverter<UsersDocument>(usersConverter)
