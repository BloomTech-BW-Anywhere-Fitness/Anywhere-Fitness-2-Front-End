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
                    <NavLink to='/classes' activeStyle>
                        Classes
                    </NavLink>
                    <NavLink to='/reservations' activeStyle>
                        Reservations
                    </NavLink>
                    <NavLink to='/punch-pass' activeStyle>
                        Punch Pass
                    </NavLink>
                    <NavLink to='/sign-up' activeStyle>
                        Sign Up
                    </NavLink>
                    <NavBtnLink to='/login'>Login</NavBtnLink>
                </NavMenu>
                {/* <NavBtn>
                    <NavBtnLink to='/login'>Sign In</NavBtnLink>
                </NavBtn> */}
            </Nav>
        </>
    );
};

export default Navbar;
