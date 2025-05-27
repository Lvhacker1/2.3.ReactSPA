import { NavLink } from 'react-router-dom'
import logoImage from '../../assets/logo.png'
import styles from './logo.module.css'

const Logo = () => {
    return (
        <NavLink to="/" className={styles.logoLink}>
            <img src={logoImage} alt='logo image' height={70} />
        </NavLink>
    )
}

export default Logo