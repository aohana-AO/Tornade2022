import { Box, Button, TextField } from '@mui/material'
import { ChangeEvent, useCallback, useState } from 'react'

export type SignInPagePresenterProps = {
  onClickSignInButton: (email: string, password: string, userName: string, areaInfo: string) => void
}

export const SignInPagePresenter: React.FC<SignInPagePresenterProps> = ({ onClickSignInButton }) => {
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
