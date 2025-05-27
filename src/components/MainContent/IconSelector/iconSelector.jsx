import styles from './iconSelector.module.css'
import { AirplaneTilt } from '@phosphor-icons/react'
import { Bed } from '@phosphor-icons/react'
import { CarSimple } from '@phosphor-icons/react'
import { GlobeHemisphereWest } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

const IconSelector = () => {
    return (
        <div className={styles.iconContainer}>
            <div>
                <NavLink to='/flights' className={({isActive}) => isActive ? `${styles.iconLink} ${styles.iconLinkActive}` : styles.iconLink}>
                    <AirplaneTilt size={20} color="#000000" weight="regular" />
                    <h4>Flights</h4>
                </NavLink>
            </div>
            <div>
                <NavLink to='/stays'  className={({isActive}) => isActive ? `${styles.iconLink} ${styles.iconLinkActive}` : styles.iconLink}>
                    <Bed size={20} color="#000000" weight="regular"  />
                    <h4>Stays</h4>
                </NavLink>
            </div>
            <div>
                <NavLink to='/carRental'  className={({isActive}) => isActive ? `${styles.iconLink} ${styles.iconLinkActive}` : styles.iconLink}>
                    <CarSimple size={20} color="#000000" weight="regular"  />
                    <h4>Car Rental</h4>
                </NavLink>
            </div>
            <div>
                <NavLink to='/packages'  className={({isActive}) => isActive ? `${styles.iconLink} ${styles.iconLinkActive}` : styles.iconLink}>
                <GlobeHemisphereWest size={20} color="#000000" />
                    <h4>Packages</h4>
                </NavLink>
            </div>
        </div>
    )
}

export default IconSelector