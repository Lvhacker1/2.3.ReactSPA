import HotelLink from "../../components/HotelForm/hotelForm"
import IconSelector from "../../components/MainContent/IconSelector/iconSelector"
import Title from "../../components/MainContent/Title/title"
import HotelCard from "../../components/TravelCards/HotelCard/hotelCard"
import styles from './stays.module.css'
import ImageAnimation from "../../components/ImageAmimation/imageAnimation"

const Stays = () => {
    return (
        <div>
            <Title title="Find Your Home Away From Home" />
            <div className={styles.mainSection}>
                <div>
                    <IconSelector />
                    <HotelLink />
                </div>
            </div>
            <ImageAnimation 
            imageTitle="Save on your next hotel booking" 
            buttonText="Find hotels"
            midTitle="Customers Favorite Stays"
            paragraph1="These hotels are praised for their comfort, location, and overall guest experience."
            paragraph2="Whether you're seeking luxury or budget-friendly options, you'll find trusted stays right here."
            />
            <HotelCard />
        </div>
    )
}

export default Stays