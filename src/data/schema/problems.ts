import { collection, QueryDocumentSnapshot } from 'firebase/firestore'
import type { DocumentData, FirestoreDataConverter } from 'firebase/firestore'
import { firestore } from '~/plugins/firebase'

import { ProblemsDocument } from '~/types/problems'

/** ユーザデータ コンバータ層 */
const problemsConverter: FirestoreDataConverter<ProblemsDocument> = {
  fromFirestore(snapshot: QueryDocumentSnapshot): ProblemsDocument {
    const data = snapshot.data()
    return {
      createdAt: data.createdAt,
      createdBy: data.createdBy,
      description: data.description,
      latitude: data.latitude,
      longitude: data.longitude,
      organization: data.organization,
      peopleNum: data.peopleNum,
      problemCategory: data.problemCategory,
      problemSize: data.problemSize,
      purpose: data.purpose,
      status: data.status,
      terminatedAt: data.terminatedAt,
      title: data.title,
    }
  },
  toFirestore(data: ProblemsDocument): DocumentData {
    return { ...data }
  },
}

/** ユーザデータ コレクション ref */
export const problemsCollection = collection(firestore, 'Problems').withConverter<ProblemsDocument>(problemsConverter)
