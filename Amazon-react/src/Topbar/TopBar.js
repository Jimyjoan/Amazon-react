import React from 'react'
import classes from './TopBar.module.css'

const TopBar = () => {
    return (
        <header>
            <nav className={classes.Topbar}>
                <img src='/src/Amazon.png' alt="Amazon Logo"/>
            </nav>
        </header>
    )
}

export default TopBar;