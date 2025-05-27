import { useState, useEffect } from 'react'
import styles from './imageAnimation.module.css'
import pic1 from '../../assets/ImageAnimations/pic1.jpg'
import pic2 from '../../assets/ImageAnimations/pic2.jpg'
import pic3 from '../../assets/ImageAnimations/pic3.jpg'
import pic5 from '../../assets/ImageAnimations/pic5.jpg'
import pic6 from '../../assets/ImageAnimations/pic6.jpg'
import pic7 from '../../assets/ImageAnimations/pic7.jpg'
import pic4 from '../../assets/ImageAnimations/pic4.jpg'
import MidSectionText from '../MidSectionText/midSectionText'

const ImageAnimation = ({imageTitle, buttonText, midTitle, paragraph1, paragraph2}) => {
    const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7]
    const [activeImage, setActiveImage] = useState(0)

        useEffect(() => {
            const interval = setInterval(() => {
                setActiveImage((prev) => (prev + 1) % images.length)
            }, 7000)

            return () => clearInterval(interval)
        }, [images.length])

    return (
        <div className={styles.imageContainer}>
            <div className={styles.content}>
                <div className={styles.imageWrapper}>
                    <img className={styles.image} src={images[activeImage]} alt='image animations'/>
                    <div className={styles.overlayContent}>
                        <h2 className={styles.title}>{imageTitle}</h2>
                        <button className={styles.button}>{buttonText}</button>
                    </div> 
                </div>
                <div className={styles.midSectionContainer}>
                    <MidSectionText
                    midTitle={midTitle}
                    paragraph1={paragraph1}
                    paragraph2={paragraph2}
                    />
                </div>
            </div>
        </div>
    )
}

export default ImageAnimation