import CarRentalForm from "../../components/CarRentalForm/carRentalForm"
import IconSelector from "../../components/MainContent/IconSelector/iconSelector"
import Title from "../../components/MainContent/Title/title"
import styles from './carRental.module.css'
import ImageAnimation from "../../components/ImageAmimation/imageAnimation"

const CarRental = () => {
    return (
        <div>
            <Title title="Unlock the Freedom to Explore"/>
            <div className={styles.mainSection}>
                <div>
                    <IconSelector />
                    <CarRentalForm />
                </div>
            </div>
            <ImageAnimation imageTitle="Compare Cars and save big" 
            buttonText="Find Cars"
            midTitle="Find Our Most Trusted Car Rental Options"
            paragraph1="These rental options are among the most frequently chosen by our travelers, offering flexibility, affordability, and easy pickup."
            paragraph2="Whether you're exploring a city or heading out on a road trip, find a vehicle that fits your journey."
            />
        </div>
    )
}

export default CarRental

