import {React,useState} from 'react'
import {Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography} from '@mui/material';
import {AddAPhotoRounded, MailOutlineOutlined} from '@mui/icons-material'
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import Link from '@mui/joy/Link';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined'

export default function Register() {
    const [showPassword,setShowPassword]=useState(true)
    const [showConfirmPassword,setShowConfirmPassword]=useState(false)
    const [signupInfo,setSignUpInfo]=useState({
        username:"",
        email:"",
        password:"",
        confirmPassword:"",
        profilePic:""
    })
    const [base64, setBase64] = useState('');
    const handleImageUpload=(e)=>{
        const file=e.target.files[0];
        if(!file) return;
        const reader=new FileReader();
        reader.onloadend=()=>{
            setBase64(reader.result); 
            console.log('Base64',reader.result);   
        }
        reader.readAsDataURL(file)
        }
    
  return (
    <section id='register'>
        <div className='mx-auto container p-4'>
            <div className='bg-white p-2 w-full max-w-lg mx-auto rounded flex flex-col gap-2' >
                <div className=' mx-auto'>
                    <Typography variant='h4' className=''>Register</Typography>
                </div>
                <div className="w-20 h-20 mx-auto border-2 rounded-full p-2 overflow-hiddenhidden relative">
                <form >
                <label >
                    {base64?(<div className='cursor-pointer'>
                        <img src={base64} alt="profile" className='w-[52px] h-[52px]' />
                    </div>):(<div className='cursor-pointer'>
                            <AddAPhotoRounded style={{fontSize:"50px"}}/>
                        </div>)}
                        
                          <span className="absolute right-2 bottom-0.5 bg-slate-200 bg-opacity-80 font-bold rounded-full p-.5 cursor-pointer">Profile</span>
                            <input type="file" accept='image/*' className='hidden' onChange={handleImageUpload}  />
                        </label>
                    </form>
                </div>
                <FormControl  style={{width:'90%',margin:'auto'}}>
                    <InputLabel htmlFor="username">UserName</InputLabel>
                    <OutlinedInput 
                    required
                    id='username'
                    type='text'
                    placeholder='Username'
                    value={signupInfo.username}
                    name='username'
                    onChange={(e)=>setSignUpInfo({...signupInfo,email:e.target.value})}
                    endAdornment={
                        <InputAdornment position='end'>
                            <IconButton edge='end'>
                             <AccountCircleOutlined />
                            </IconButton>
                        </InputAdornment>
                    }
                    label="UserName"/>
                </FormControl>
                <FormControl  style={{width:'90%',margin:'auto'}}>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <OutlinedInput 
                    required
                    id='email'
                    type='text'
                    placeholder='email'
                    value={signupInfo.email}
                    name='email'
                    onChange={(e)=>setSignUpInfo({...signupInfo,email:e.target.value})}
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
                value={signupInfo.password}
                onChange={(e)=>setSignUpInfo({...signupInfo,password:e.target.value})}
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
                <FormControl style={{width:'90%',margin:'auto'}}>
                <InputLabel htmlFor='confirm-password' >Confirm Password</InputLabel>
                <OutlinedInput 
                required
                id='confirm-password'
                type={showConfirmPassword?'text':'password'}
                placeholder='Confirm password'
                name='confirmPassword'
                value={signupInfo.confirmPassword}
                onChange={(e)=>setSignUpInfo({...signupInfo,confirmPassword:e.target.value})}
                endAdornment={
                    <InputAdornment position='end'>
                        <IconButton 
                        aria-label={
                            showConfirmPassword?'hide the password':'display the password'
                        }
                        onClick={()=>setShowConfirmPassword((prev)=>!prev)}
                        edge='end'>
                            {showConfirmPassword?<VisibilityOffOutlinedIcon />:<VisibilityOutlined />} 
                        </IconButton>
                    </InputAdornment>
                }
                label="Confirm Password"
                />
                </FormControl>
                
                <div className='flex justify-center items-center '>
                    <Button variant='contained' className='hover:scale-110 transition-all'>Register</Button>   
                </div>
            <Typography padding={2} className=''>Already have account ? <Link href='/login' sx={{ cursor: 'pointer', }} >Login</Link> </Typography>
            </div>
        </div>
    </section>
  )
}
