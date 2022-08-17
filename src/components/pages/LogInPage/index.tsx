import { Box, Button, TextField } from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'
import { ChangeEvent, useCallback, useState } from 'react'
import { auth } from '~/plugins/firebase'

export type LogInPageProps = {
  // TODO
}

export const LogInPage: React.FC<LogInPageProps> = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // テキストの入力状態を更新
  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(e.target.value)
  }, [])
  const onChangePassword = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(e.target.value)
  }, [])

  // ルーティング
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

  return (
    <Box display='flex' flexDirection='column' sx={{ maxWidth: '1200px', mx: 'auto', pt: '64px', px: '24px' }}>
      <TextField label='メールアドレス' value={email} onChange={(e) => onChangeEmail(e)} sx={{ my: '16px' }} />
      <TextField label='パスワード' value={password} onChange={(e) => onChangePassword(e)} sx={{ my: '16px' }} />
      <Button variant='contained' onClick={() => onClickLogInButton(email, password)} sx={{ my: '16px' }}>
        ログインする
      </Button>
    </Box>
  )
}
