import styles from '../travelCards.module.css'
import imageData from "../../../data"
import { getImageURL } from "../../../utils/function"

const PackageCard = () => {
    const page = "page3"
    return (
        <div className={styles.container}>
            {imageData.map((item) => (
            <div key={item.id} className={styles.card}>
                <img src={getImageURL(item.imageUrl)} alt={item.title}/>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description[page]}</p>
                <p className={styles.cardPrice}>{item.prices[page]}</p>
            </div>
            ))}
        </div>
    )
}

export default PackageCard