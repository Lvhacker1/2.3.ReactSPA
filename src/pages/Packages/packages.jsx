import IconSelector from "../../components/MainContent/IconSelector/iconSelector"
import Title from "../../components/MainContent/Title/title"
import PackageForm from "../../components/PackageForm/packageForm"
import PackageCard from "../../components/TravelCards/PackageCard/packageCard"
import styles from './packages.module.css'
import ImageAnimation from "../../components/ImageAmimation/imageAnimation"

const Packages = () => {
    return ( 
        <div>
            <Title title="Discover Exclusive Deals"/>
            <div className={styles.mainSection}>
                <div>
                    <IconSelector />
                    <PackageForm />
                </div>
            </div>
            <ImageAnimation 
            imageTitle="All-In-One Travel Packages" 
            buttonText="Explore Deals"
            midTitle="Explore Our Popular Travel Packages"
            paragraph1="Our curated packages combine flights, hotels, and sometimes car rentals into one simple, affordable booking."
            paragraph2="Save time, reduce stress, and enjoy your trip from the moment you book."
            />
            <PackageCard />
        </div>
    )
}

export default Packages