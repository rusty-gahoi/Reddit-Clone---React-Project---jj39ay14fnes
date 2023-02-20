import React from "react";

import "./Actions.css";
import Button from "../../button/Button";
import { useAuth0, User } from "@auth0/auth0-react";


//import PersonIcon from "@material-ui/icons/Person";
import PersonIcon from '@mui/icons-material/Person';
//import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
//const { user, isAuthenticated, isLoading } = useAuth0();
import CreateIcon from '@mui/icons-material/Create';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';

export default function Actions() {
  const { loginWithRedirect,isAuthenticated,logout ,user} = useAuth0();
  //const { logout } = useAuth0();
  //const { logoutWithredirect,isAuthenticated} = useAuth0();

  return (
    <div className="actions">
      {/* <Button secondary label="LOG IN" />
      <Button label="SIGN UP" /> */}
      <span>
        {isAuthenticated && <p>
          {User.name}
          
          </p>}
      </span>
      
       {isAuthenticated  ?  (
      <span>
        < button  className="logout_button"   style={{color:'white'}} 
        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
      </button>
    
    </span>
      ):(
      
        
      <span>
      <button  className="logout_button"   style={{color:'white'}}  onClick={()=>
       loginWithRedirect()
      
        }>Log In</button>;
      </span>
      
      )}
      

      <div className="profile">
        {/* <Button label="Profile"/> */}
           <PersonIcon className="hoverable" /> 
        <ArrowDropDownIcon className="hoverable" />  
        <CreateIcon className="hoverable" /> 
        <HorizontalSplitIcon className="hoverable"/>
      </div>
    </div>
  );
}
