import { Link, Outlet } from "react-router-dom"
import {ReactComponent as CrwnLogo}  from '../../../Assets/crown.svg'
import './navigation.styles.scss'
const Navigation = () => {
    return(
      <div>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <CrwnLogo className='logo'/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>
                SHOP
                </Link>
            </div>
        </div>
        <Outlet/>
      </div>
    )
}

export default Navigation