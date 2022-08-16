import { Box, Button, TextField } from '@mui/material'
import { ChangeEvent, useCallback, useState } from 'react'

export type LogInPageProps = {
  onClickLogInButton: (email: string, password: string) => void
}

export const LogInPagePresenter: React.FC<LogInPageProps> = ({ onClickLogInButton }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(e.target.value)
  }, [])
  const onChangePassword = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(e.target.value)
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
