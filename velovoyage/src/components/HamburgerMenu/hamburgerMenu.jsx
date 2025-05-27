import UserIcon from '../UserIcon/userIcon'
import styles from './hamburgerMenu.module.css'
import { NavLink } from 'react-router-dom'
import { AirplaneTilt, Bed, CarSimple, Gear, GlobeHemisphereWest, HeartStraight, House, Question, ShoppingCart, User, SignIn } from '@phosphor-icons/react'

const HamburgerMenu = ({isOpen, onClose}) => {
    return isOpen && (
        <div className={styles.container}>
            <nav className={styles.navLinks}>
                <ul className={styles.navList}>
                    <li>
                        <House className={styles.icon} />
                        <NavLink className={styles.navLink} to='/' onClick={onClose} >Home</NavLink>
                    </li>
                    <li>
                        <AirplaneTilt className={styles.icon} />
                        <NavLink className={styles.navLink} to='/flights' onClick={onClose}>Flights</NavLink>
                    </li>
                    <li>
                        <Bed className={styles.icon} />
                        <NavLink className={styles.navLink} to='/stays' onClick={onClose}>Stays</NavLink>
                    </li>
                    <li>  
                        <CarSimple className={styles.icon} />
                        <NavLink className={styles.navLink} to='/carRental' onClick={onClose}>Car Rental</NavLink>
                    </li>
                    <li> 
                        <GlobeHemisphereWest className={styles.icon} />
                        <NavLink className={styles.navLink} to='/packages' onClick={onClose}>Packages</NavLink>
                    </li>
                </ul>
                <ul className={styles.navList}>
                    <li>
                        <ShoppingCart className={styles.icon} />
                        <NavLink className={styles.navLink} to='/' onClick={onClose}>Cart</NavLink>
                    </li>
                    <li> 
                        <HeartStraight className={styles.icon} />
                        <NavLink className={styles.navLink} to='/' onClick={onClose}>Wishlist</NavLink>
                    </li>
                    <li>
                        <User className={styles.icon} />
                        <NavLink className={styles.navLink} to='/' onClick={onClose}>Account</NavLink>
                    </li>
                    <li> 
                        <SignIn className={styles.icon} />
                        <NavLink className={styles.navLink} to='/' onClick={onClose}>Login/Logout</NavLink>
                    </li>
                </ul>
                <ul className={styles.navList}>
                    <li>
                        <Gear className={styles.icon} />
                        <NavLink className={styles.navLink} to='/' onClick={onClose}>Settings</NavLink>
                    </li>
                    <li> 
                        <Question className={styles.icon} />
                        <NavLink className={styles.navLink} to='/' onClick={onClose}>Help & feedback</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default HamburgerMenu