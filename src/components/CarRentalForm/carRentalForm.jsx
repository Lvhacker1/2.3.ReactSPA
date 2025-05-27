import styles from './carRentalForm.module.css'

const CarRentalForm = () => {
    return (
        <div className={styles.container}>
            <form className={styles.carRentalForm}>
                <div className={styles.formGroup}>
                    <input type="text" placeholder="Enter a city, hotel, or airport" className={`${styles.formInput} ${styles.firstInput}`}/>
                </div>
                <div className={`${styles.formGroup} ${styles.inlineGroup}`}>
                    <input type="date" className={styles.formInput} />
                    <input type="time" className={styles.formInput} />
                </div>
                <div className={`${styles.formGroup} ${styles.inlineGroup}`}>
                    <input type="date" placeholder="" className={styles.formInput} />
                    <input type="time" placeholder="" className={styles.formInput} />
                </div>
                <div className={styles.formGroup}>
                    <button className={styles.button}>Search</button>
                </div>
            </form>
        </div>
    )
}

export default CarRentalForm