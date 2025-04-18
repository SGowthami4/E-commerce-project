import {React,useEffect,useState} from 'react'
import {Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography} from '@mui/material';
import {AddAPhotoRounded, MailOutlineOutlined} from '@mui/icons-material'
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import Link from '@mui/joy/Link';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined'
import { toast } from 'react-toastify';
export default function Register() {
    const [showPassword,setShowPassword]=useState(false)
    const [showConfirmPassword,setShowConfirmPassword]=useState(false)
    const [signupInfo,setSignUpInfo]=useState({
        username:"",
        email:"",
        password:"",
        profile:""
    })
    const [confirmPassword,setConfirmPassword]=useState('')
    const [loading,setLoading]=useState(false)
    const [base64, setBase64] = useState('');
    const [registered,setRegistered]=useState(false)
    const [message,setMessage]=useState('')

    const handleImageUpload=(e)=>{
        const file=e.target.files[0];
        if(!file) return;
        const reader=new FileReader();
        reader.onloadend=()=>{
            setBase64(reader.result); 
            setSignUpInfo(prev => ({ ...prev, profile: reader.result }));
            console.log('Base64',reader.result);   
        }
        reader.readAsDataURL(file)
        }
        const handleRegistration=async(e)=>{
            e.preventDefault();
            if(!signupInfo.username || !signupInfo.password || !signupInfo.email || !confirmPassword){
                alert("All fields are required for registration")
                return;
            }
            if(signupInfo.password!=confirmPassword){
                alert('Password do not match')
                return;
            }

            setLoading(true)
            try{
                const response=await fetch('http://localhost:3500/user/register', {
                    method:'POST',
                    headers:{
                        'Content-type':'application/json',
                    },
                    body:JSON.stringify(signupInfo)
                })
                if(!response.ok){
                    const errorMessage = await response.json();
                    throw new Error(errorMessage.message || "Registration Failed");
                }
                const data=await response.json();
                setMessage("A verification link has been sent to your email.Please check your inbox");
                setRegistered(true);
                setSignUpInfo({
                    username:'',
                    email:'',
                    password:'',
                    profile:''
                })
                setConfirmPassword('');
                setBase64('');
            }catch(error){
                setMessage(error.message || "Error registering user");
                setRegistered(true);
            }finally{
                setLoading(false)
            }
        }
        useEffect(() => {
            if (message) {
              if (message === "A verification link has been sent to your email.Please check your inbox") {
                toast.success(message);
              } else {
                toast.error(message);
              }
            }
          }, [message]);
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
                        <img src={base64} alt="profile" className='w-full h-full object-cover rounded-full' />
                        
                        </div>):(<div className='cursor-pointer'>
                            <AddAPhotoRounded style={{fontSize:"50px"}}/>
                        </div>)}
                        
                          {base64?<span></span>:(<span className="absolute right-2 bottom-0.5 bg-slate-200 bg-opacity-80 font-bold rounded-full p-.5 cursor-pointer">Profile</span>)}
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
                    onChange={(e)=>setSignUpInfo({...signupInfo,username:e.target.value})}
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
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
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
                    <Button variant='contained' className='hover:scale-110 transition-all' onClick={handleRegistration} disabled={loading}>
                    {loading?"Registering...":"Register"}
                        </Button>   
                </div>
            <Typography padding={2} className=''>Already have account ? <Link href='/login' sx={{ cursor: 'pointer', }} >Login</Link> </Typography>
            </div>
        </div>
    </section>
  )
}
