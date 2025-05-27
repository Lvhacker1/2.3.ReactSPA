import styles from './header.module.css'
import {useState} from 'react'
import HamburgerMenu from '../HamburgerMenu/hamburgerMenu'
import Logo from '../Logo/logo'
import SideBarIcon from '../SideBarIcon/sideBarIcon'
import UserIcon from '../UserIcon/userIcon'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className={styles.headerContainer}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <div onClick={toggleMenu}> 
                        <SideBarIcon isOpen={isMenuOpen} /> 
                    </div>
                    <Logo />
                </div>
                <div className={styles.headerRight}>
                    <button>Sign In</button>
                    <UserIcon />
                </div>
            </div>
                <HamburgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}/>
        </header>
    )
}

export default Header