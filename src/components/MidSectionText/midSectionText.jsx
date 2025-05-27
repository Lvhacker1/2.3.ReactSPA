import styles from './midSectionText.module.css'

const MidSectionText = ({midTitle, paragraph1, paragraph2}) => {
    return (
        <div className={styles.container}>
            <h2>{midTitle}</h2>
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
        </div>
    )
}

export default MidSectionText