import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { createUserDocument } from '~/data/functions/users'
import { auth } from '~/plugins/firebase'
import { UsersDocument } from '~/types/users'
import { SignInPagePresenter } from './presenter'

export type SignInPageProps = {
  // TODO
}

export const SignInPage: React.FC<SignInPageProps> = () => {
  const router = useRouter()
  // 新規登録
  const onClickSignInButton = useCallback((email: string, password: string, userName: string, areaInfo: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        // firestore に user ドキュメントを作成
        const userData: UsersDocument = {
          areaInfo: areaInfo,
          id: user.uid,
          name: userName,
        }
        createUserDocument(userData)
        // TODO: グローバルで状態を管理
        // トップページへ戻る
        router.push('/')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        // TODO: エラー文を表示
        console.log(errorCode, errorMessage)
      })
  }, [])

  return <SignInPagePresenter onClickSignInButton={onClickSignInButton} />
}
