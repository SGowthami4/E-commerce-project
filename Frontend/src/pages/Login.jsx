import {React,useState} from 'react'
import {Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography} from '@mui/material';
import {MailOutlineOutlined} from '@mui/icons-material'
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import Link from '@mui/joy/Link';


export default function Login() {
    const [showPassword,setShowPassword]=useState(true)
    const [loginInfo,setLoginInfo]=useState({
        email:"",
        password:""
    })
  return (
    <section id='login'>
        <div className='mx-auto container p-4'>
            <div className='bg-white p-4 py-2 w-full max-w-lg mx-auto rounded flex flex-col gap-4' >
                <div className='w-20 h-20 mx-auto'>
                    <Typography variant='h4' className=''>Login</Typography>
                </div>
                <FormControl  style={{width:'90%',margin:'auto'}}>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <OutlinedInput 
                    required
                    id='email'
                    type='text'
                    placeholder='email'
                    value={loginInfo.email}
                    name='email'
                    onChange={(e)=>setLoginInfo({...loginInfo,email:e.target.value})}
                    endAdornment={
                        <InputAdornment position='end'>
                            <IconButton edge='end'>
                                <MailOutlineOutlined />
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Email"/>
                </FormControl>
                <FormControl style={{width:'90%',margin:'auto'}}>
                <InputLabel htmlFor='password' >Password</InputLabel>
                <OutlinedInput 
                required
                id='password'
                type={showPassword?'text':'password'}
                placeholder='password'
                name='password'
                value={loginInfo.password}
                onChange={(e)=>setLoginInfo({...loginInfo,password:e.target.value})}
                endAdornment={
                    <InputAdornment position='end'>
                        <IconButton 
                        aria-label={
                            showPassword?'hide the password':'display the password'
                        }
                        onClick={()=>setShowPassword((prev)=>!prev)}
                        edge='end'>
                            {showPassword?<VisibilityOffOutlinedIcon />:<VisibilityOutlined />} 
                        </IconButton>
                    </InputAdornment>
                }
                label="Password"
                />
                </FormControl>
                <div className='flex justify-end w-[95%]'>
                <Link href="/forgot-password" >Forgot Password ?</Link>                </div>
                <div className='flex justify-center items-center '>
                    <Button variant='contained' className='hover:scale-110 transition-all'>Login</Button>   
                </div>
            <Typography padding={2} className=''>Don't have account ? <Link href='/register' sx={{ cursor: 'pointer', }} >Register</Link> here</Typography>
            </div>
        </div>
    </section>
  )
}
