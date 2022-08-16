import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { auth } from '~/plugins/firebase'
import { LogInPagePresenter } from './presenter'

export type LogInPageProps = {
  // TODO
}

export const LogInPage: React.FC<LogInPageProps> = () => {
  const router = useRouter()
  // ログイン
  const onClickLogInButton = useCallback((email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user)
        // TODO: グローバルで状態を管理
        // トップページへ戻る
        router.push('/')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }, [])
  return <LogInPagePresenter onClickLogInButton={onClickLogInButton} />
}
