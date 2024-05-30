import logo from '../images/logo-dark.png';
import avatar from '../images/profile-picture.png';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="header-item-container">
                    <Link to={'/'}>
                        <img className="logo" src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="header-item-container">
                    <p>Log out</p>
                    <p>ⓘ Language</p>
                    <img className="avatar" src={avatar} alt="user avatar"></img>
                </div>
            </div>
        </header>
    );
};

export default Header;
