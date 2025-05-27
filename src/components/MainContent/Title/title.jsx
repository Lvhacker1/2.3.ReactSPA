import styles from './title.module.css'

const Title = ({ title }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>{ title }</h1>
        </div> 
    )
}

export default Title