import styles from './hotelForm.module.css'

const HotelForm = () => {
    return (
        <div className={styles.container}>
            <form className={styles.hotelForm}>
                <div className={styles.formGroup}>
                    <input type="text" placeholder="Enter a city, hotel, or airport" className={`${styles.formInput} ${styles.firstInput}`}/>
                </div>
                <div className={`${styles.formGroup} ${styles.inlineGroup}`}>
                    <input type="date" className={styles.formInput} />
                    <input type="date" className={styles.formInput} />
                </div>
                <div className={`${styles.formGroup} ${styles.inlineGroup}`}>
                    <input type="number" placeholder="1 Room" className={styles.formInput} />
                    <input type="number" placeholder="2 Guests" className={styles.formInput} />
                </div>
                <div className={styles.formGroup}>
                    <button className={styles.button}>Search</button>
                </div>
            </form>
        </div>
    )
}

export default HotelForm