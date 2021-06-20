import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import styles from './404.module.scss';

export default function PageNotFound() {
    return (
        <>
        <Header />
        <div className={styles.container}>
            <h2>Page Not Found</h2>
            <img src="./gif/404.gif" alt="Not Found" />
        </div>
        <Footer />
        </>
    )
}