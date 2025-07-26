import { clearProfile, selectEmail, selectUsername, setIsAuth } from '../Slices/ProfileSlice';
import { useAppDispatch, useAppSelector } from '../Store';
import { useState } from "react"

const UserDropDown = () =>{
    const [isOpen, setIsOpen]=useState(false);
    const dispatch = useAppDispatch();
  
    const username = useAppSelector(selectUsername) || '';
    const email = useAppSelector(selectEmail) || ''; 

    const handleSignOut =()=>{
       dispatch(setIsAuth(false));
        sessionStorage.removeItem('access');
        sessionStorage.removeItem('refresh');
        dispatch(clearProfile());
        setIsOpen(false);
    };

    // Получаем 1 букву имени
    const firstLetter = username ? username.charAt(0).toUpperCase() : 'U';
     
    return(
        <div className="user__dropdown">
            <button className="user__dropdown-avatar" onClick={()=>setIsOpen(!isOpen)}>{firstLetter}</button>

            {isOpen && (
                <div className="user__dropdown-menu">
                        <div className='user__dropdown-menu-avatar'>
                            <div className='user__dropdown-menu-avatar-letter'>{firstLetter}</div>
                            </div>
                   
                    <div className="user__dropdown-info">
                      <div className="user__dropdown-name">{username}</div>
                      <div className="user__dropdown-email">{email}</div>
                    </div>

                    <button className="user__dropdown-signout" onClick={handleSignOut}>Sign Out</button>
                </div>
            )}
        </div>
    )
}

export default UserDropDown;