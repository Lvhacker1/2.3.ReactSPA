import styles from './travelForm.module.css'

const TravelForm = () => {
    return (
        <div className={styles.container}>
            <form className={styles.travelForm}>
                <div className={styles.formGroup}>
                    <input type="text" className={`${styles.formInput} ${styles.firstInput}`} id="from" placeholder="Enter Departure Location"/>
                </div>
                <div className={styles.formGroup}>
                    <input type="text" className={styles.formInput} id="to" placeholder="Enter Destination"/>
                </div>
                <div className={`${styles.formGroup} ${styles.inlineGroup}`}>
                    <input type="date" className={styles.formInput} id="departurDate" />
                    <input type="date" className={styles.formInput} id="departurDate" />
                </div>
                <div className={`${styles.formGroup} ${styles.passengerInput}`}>
                    <input type="number" className={styles.formInput} id="travelers" min="1" max="999" placeholder='1-Passenger' />
                </div>
                <div className={styles.formGroupButton}>
                    <button type="submit" className={styles.button}>Search</button>
                </div>
            </form>
        </div>
    )
}

export default TravelForm