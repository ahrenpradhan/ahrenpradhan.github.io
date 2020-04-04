import React, {Component} from 'react';

export default (props) => (
    <div className='Header'>
        <div className='Header--title'>{props.headerTitle}</div>
        <ul className='Header--nav_bar'>
            <li className='Header--nav_link'>About me</li>
            <li className='Header--nav_link'>My Work</li>
            <li className='Header--nav_link'>Contact Me</li>
        </ul>
    </div>
)