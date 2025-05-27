import ImageAnimation from '../../components/ImageAmimation/imageAnimation'
import IconSelector from '../../components/MainContent/IconSelector/iconSelector'
import Title from '../../components/MainContent/Title/title'
import styles from './home.module.css'

const Home = () => {
    return (
        <div>
            <Title title="Your Next Adventure Starts Here"/>
            <div className={styles.mainSection}>
                <div>
                <IconSelector />
                </div>
            </div>
            <ImageAnimation 
            imageTitle="Start Your Journey Today" 
            buttonText="Get Started"
            midTitle="A Gateway to Unforgettable Journeys"
            paragraph1="Plan your perfect trip with ease. Our platform is designed to ensure convenience, transparency, and satisfaction."
            paragraph2="Explore our offerings to discover destinations, accommodations, car rentals, and packages selected for your comfort, quality and reliability."
            />
        </div>
    )
}

export default Home