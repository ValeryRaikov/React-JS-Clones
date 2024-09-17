import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { logout } from '../../firebase';

import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import dropdown_icon from '../../assets/caret_icon.svg';

export default function Navigation() {
    const navRef = useRef();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 80) {
                navRef.current.classList.add('nav-dark');
            } else {
                navRef.current.classList.remove('nav-dark');
            }
        });
    }, []);

    return (
        <div ref={navRef} className="navigation">
            <div className="navigation-left">
        	    <img src={logo} alt="" />
                <ul>
                    <Link to='/' >Home</Link>
                    <Link to="/tv-shows" state={{ category: 'Tv Shows' }}>Tv Shows</Link>
                    <Link to="/movies" state={{ category: 'Movies' }}>Movies</Link>
                    <Link to="/new&popular" state={{ category: 'New & Popular' }}>New & Popular</Link>
                    <Link>My List</Link>
                    <Link>Browse by Languages</Link>
                </ul>
            </div>
            <div className="navigation-right">
                <img className="icons" src={search_icon} alt="" />
                <p>Children</p>
                <img className="icons" src={bell_icon} alt="" />
                <div className="navigation-profile">
                    <img className="profile" src={profile_img} alt="" />
                    <img src={dropdown_icon} alt="" />
                    <div className="dropdown">
                        <p onClick={() => logout()}>Sign out of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    );
}