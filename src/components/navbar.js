import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './navbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <h1>Anywhere Fitness</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/services' activeStyle>
                        Services
                    </NavLink>
                    <NavLink to='/contact-us' activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to='/sign-up' activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/login'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
