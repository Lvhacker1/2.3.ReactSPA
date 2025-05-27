import styles from './packageForm.module.css'

const PackageForm = () => {
     return (
        <div className={styles.container}>
            <form className={styles.packageForm}>
                <div className={styles.formGroup}>
                    <input type="text" className={`${styles.formInput} ${styles.firstInput}`} id="from" placeholder="Enter Departure Location"/>
                </div>
                <div className={styles.formGroup}>
                    <input type="text" className={styles.formInput} id="to" placeholder="Enter Destination"/>
                </div>
                <div className={`${styles.formGroup} ${styles.inlineGroup}`}>
                    <input type="date" className={styles.formInput} id="departurDate" />
                    <input type="date" className={`${styles.formInput} ${styles.borderInput}`} id="departurDate" />
                </div>
                <div className={styles.formGroup}>
                    <input type="number" className={`${styles.formInput} ${styles.borderInputSecond}`} id="travelers" min="1" max="999" placeholder='1 Passenger' />
                </div>
                <div className={`${styles.formGroup} ${styles.inlineGroup}`}>
                    <input type="number" placeholder="1 Room" className={styles.formInput} />
                    <input type="number" placeholder="2 Guests" className={styles.formInput} />
                </div>
                <div className={styles.formGroup}>
                    <button type="submit" className={styles.button}>Search</button>
                </div>
            </form>
        </div>
    )
}

export default PackageForm