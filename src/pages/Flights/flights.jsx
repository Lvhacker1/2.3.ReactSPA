import IconSelector from '../../components/MainContent/IconSelector/iconSelector'
import Title from '../../components/MainContent/Title/title'
import FlightCard from '../../components/TravelCards/FlightCard/flightCard'
import styles from './flights.module.css'
import TravelForm from '../../components/TravelForm/travelForm'
import ImageAnimation from '../../components/ImageAmimation/imageAnimation'

const Flights = () => {
    return (
        <div>
            <Title title="Your Journey Begins in the Skies" />
            <div className={styles.mainSection}>
                <div>
                    <IconSelector />
                    <TravelForm />
                </div>
            </div>
            <ImageAnimation 
            imageTitle="Compare Flights And Save Big" 
            buttonText="Find Flights"
            midTitle="Discover Our Top Flight Choices"
            paragraph1="These popular destinations offer not only great prices but also frequent departures, trusted airlines, and smooth travel experiences."
            paragraph2="Ideal for weekend getaways, business trips, or long vacations."
            />
            <FlightCard />
        </div>
    )
}

export default Flights