import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import profile_icon from '../../assets/jack.png';

import './Navbar.css';

export default function Navbar({ setSidebar }) {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const searchChangeHandler = (e) => {
        setSearchQuery(e.target.value);
    }

    const searchSubmitHandler = (e) => {
        e.preventDefault();

        if (searchQuery) {
            navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
        }

        setSearchQuery('');
    }

    return (
        <nav className="flex-div">
            <div className="nav-left flex-div">
                <img className="menu-icon" src={menu_icon} onClick={() => setSidebar(prev => !prev)} />
                <Link to='/'><img className="logo-icon" src={logo} /></Link>
            </div>
            <div className="nav-middle flex-div">
                <form className="search-box flex-div">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={searchChangeHandler}
                    />
                    <img src={search_icon} alt="Search" onClick={searchSubmitHandler} />
                </form>
            </div>
            <div className="nav-right flex-div">
                <img src={upload_icon} />
                <img src={more_icon} />
                <img src={notification_icon} />
                <img className="user-icon" src={profile_icon} />
            </div>
        </nav>
    );
}