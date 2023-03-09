import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';
import { useLogout } from '../pages/logouthook'
import { Link } from 'react-router-dom'
import { useAuthContext } from "../pages/useAuthContext";
function Header() {
  const { user } = useAuthContext();
  const { logout } = useLogout()

  const handleClick = () => {
    logout()
  }
  return (
    <header>



      {/* <Link className="nav-link navh1" to='/'><h1>Keeper<HighlightIcon /></h1></Link> */}

      <div className="navdiv">
      <Link className="nav-link " to='/'><h1>Keeper<HighlightIcon /></h1></Link>
        <ul className="navbar-v">
          {user && <div>
            <span className="emaild">{user.email}</span>
            <button className="btn_top k" onClick={handleClick}>LOGOUT</button>
          </div>
          }
          {!user && <div><li className="nav-itm"><Link className="  k" to='/login'>Login</Link></li>
            <li className="nav-itm"><Link className="  k" to='/signup'>Signup</Link></li></div>
          }
        </ul>
      </div>
    </header>
  );
}

export default Header;
