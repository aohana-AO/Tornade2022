import { Box, Button, TextField } from '@mui/material'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'
import { ChangeEvent, useCallback, useState } from 'react'
import { createUserDocument } from '~/data/functions/users'
import { auth } from '~/plugins/firebase'
import { UsersDocument } from '~/types/users'

export type SignInPageProps = {
  // TODO
}

export const SignInPage: React.FC<SignInPageProps> = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [areaInfo, setAreaInfo] = useState('')
  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(e.target.value)
  }, [])
  const onChangePassword = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(e.target.value)
  }, [])
  const onChangeUserName = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserName(e.target.value)
  }, [])
  const onChangeAreaInfo = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAreaInfo(e.target.value)
  }, [])

  // ルーティング
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

  return (
    <Box display='flex' flexDirection='column' sx={{ maxWidth: '1200px', mx: 'auto', pt: '64px', px: '24px' }}>
      <TextField label='メールアドレス' value={email} onChange={(e) => onChangeEmail(e)} sx={{ my: '16px' }} />
      <TextField label='パスワード' value={password} onChange={(e) => onChangePassword(e)} sx={{ my: '16px' }} />
      <TextField label='ニックネーム' value={userName} onChange={(e) => onChangeUserName(e)} sx={{ my: '16px' }} />
      <TextField label='地域情報' value={areaInfo} onChange={(e) => onChangeAreaInfo(e)} sx={{ my: '16px' }} />
      <Button
        variant='contained'
        onClick={() => onClickSignInButton(email, password, userName, areaInfo)}
        sx={{ my: '16px' }}
      >
        登録する
      </Button>
    </Box>
  )
}
