import React from 'react';
import '../../index.css';
import Profile from './Profile.jpg'
// import '../../output.css';

function Header() {
    return (
        <div className="header flex justify-between items-center p-4 shadow-lg">
            <div className="flex items-center">
                <img className="profile rounded-full mr-2" src={Profile}/>
                <h1 className="ml-2"><b>Hélio de Breyne</b></h1>            
            </div>
        </div>
    );
}

export default Header;