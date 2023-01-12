import { Box, Typography,MenuItem,Menu,styled } from '@mui/material'
import {useState} from 'react'

const Component = styled(Menu)`
    margin-top:5px;
`
const Logout = styled(Typography)`
    font-size:14px;
`

const Profile = ({ acc,setacc }) => {
    const [open, setopen] = useState(false);
    
    const handleclick = (event) => {
        setopen(event.currentTarget);
    };
    const handleclose = ()=>{
        setopen(false)
    }
    const logoutuser=()=>{
        setacc('');
    }
    return (
        <>
            <Box onClick={handleclick}><Typography style={{ marginTop: 3,cursor:'pointer' }}>{acc}</Typography></Box>
            <Component
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleclose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={()=>{handleclose();logoutuser();}}>
                    <Logout>LogOut</Logout>
                </MenuItem>
            </Component>
        </>
    )
}

export default Profile
