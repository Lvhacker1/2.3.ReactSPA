import { Outlet } from "react-router-dom";
import Header from "../../components/Header/header";
import styles from './layout.module.css'
import Footer from "../../components/Footer/footer";

const Layout = () => {
    return (
        <>
        <div className={styles.page}>
            <Header />
                <div className={styles.pageContainer}>
                    <Outlet />
                </div>   
            <Footer />
        </div>
        </>
    )
}

export default Layout