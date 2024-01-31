import { NavLink } from 'react-router-dom';
import logo from '../../assets/wealthHealthLogo.png';
import './index.css'

function Header() {
    return (
        <header>
            <NavLink to="/" className="main-nav-logo">
                <img className="main-nav-logo-image" src={logo} alt="Wealth Health logo" />
            </NavLink>
            <nav>
                <NavLink to="/" className="main-nav-item">
                    Create employee
                </NavLink>
                <NavLink to="/employee-list" className="main-nav-item">
                    View current employees
                </NavLink>
            </nav>
        </header>
    )
}

export default Header