import { useState ,useContext} from "react";
import Dialog from "@mui/material/Dialog";
import { TextField, styled, Box, Typography, Button } from "@mui/material";
import { authenticateSignup,authenticateLogin } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const Component = styled(Box)`
    height:74vh;
    width:90vh;
`
const Image = styled(Box)`
    background:#2875f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) no-repeat center 85%;
    height:84%;
    width:28%;
    padding:40px 39px;
    & > p, & > h5{
        color:#fff;
    }
`
const Wrapper = styled(Box)`
    display:flex;
    flex-direction:column;
    padding:25px 35px;
    flex: 1;
    & > div, & >button,& > p{
        margin-top:15px;
    }
`
const LoginButton = styled(Button)`
    text-transform:none;
    background:#fb641b;
    color:#fff;
    height:48px;
    border-radius:2px;
`
const RequestOTPButton = styled(Button)`
    text-transform:none;
    background:#fff;
    color:#2874f0;
    height:48px;
    border-radius:2px;
    box-shadow:0 2px 4px 0 rgb(0 0 0/20%);
`
const Text = styled(Typography)`
    font-size:12px;
    color:#878787;
`
const CreateAccount = styled(Typography)`
    font-size:14px;
    text-align:center;
    color:#2874f0;
    font-weight:600;
    cursor:pointer
`
const Error = styled(Typography)`
    font-size:12px;
    color:#ff6161;
    line-height:0;
    font-weight:500;
    margin-top:30px;
`
const accountInitialValue = {
    login: {
        view: 'login',
        heading: 'Login',
        subheading: 'Get access to your Orders, Wishlist and Recommendations '
    },
    signup: {
        view: 'signup',
        heading: 'Looks like you are new here!',
        subheading: 'Sign up with your mobile number to get started'
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};
const loginInitialValues = {
    username:'',
    password: ''
}
const LoginDialog = ({ open, setopen }) => {
    const [account, toggleaccount] = useState(accountInitialValue.login)
    const [signup, setsignup] = useState(signupInitialValues)
    const [login, setlogin] = useState(loginInitialValues)
    const [error, seterror] = useState(false)

    const {acc,setacc} = useContext(DataContext)
    const handleClose = () => {
        setopen(false);
        seterror(false)
        toggleaccount(accountInitialValue.login);
    };
    const onInputChange = (e) => {
        // console.log(signup)
        setsignup({ ...signup, [e.target.name]: e.target.value });
    }
    const onValueChange = (e) => {
        setlogin({ ...login, [e.target.name]: e.target.value });
    }
    const loginuser=async()=>{
        let response=await authenticateLogin(login)
        if(response.status===200){   
            handleClose();
            setacc(login.username);
        }
        else{
            seterror(true);
        }
    }
    const signupUser= async ()=>{
        let response=await authenticateSignup(signup);
        if(response){ 
            handleClose();
            setacc(signup.username);
            return;
        }
    }
    return (
        <div>
            <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
                <Component>
                    <Box style={{ display: 'flex', height: "100%" }}>
                        <Image>
                            <Typography variant='h5'>{account.heading}</Typography>
                            <Typography style={{ marginTop: 20 }}>{account.subheading}</Typography>
                        </Image>
                        {
                            account.view === 'login' ?
                                <Wrapper>
                                    <TextField variant="standard" onChange={(e) => onValueChange(e)} name='username' label="Enter email/mobile no" />
                                    {error && <Error style={{color:'red'}}>Please Enter valid username or password</Error>}
                                    <TextField variant="standard" onChange={(e) => onValueChange(e)} name='password' label="Enter Password" />
                                    <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy</Text>
                                    <LoginButton onClick={()=>loginuser()}>Login</LoginButton>
                                    <Typography style={{ textAlign: "center" }}>OR</Typography>
                                    <RequestOTPButton>Request OTP</RequestOTPButton>
                                    <CreateAccount onClick={() => toggleaccount(accountInitialValue.signup)}>New to Flipkart Create an Account</CreateAccount>
                                </Wrapper>
                                :
                                <Wrapper>
                                    <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
                                    <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
                                    <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                                    <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
                                    <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                                    <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' />
                                    <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
                                </Wrapper>
                        }
                    </Box>
                </Component>
            </Dialog>
        </div>
    );
};

export default LoginDialog;