import styles from './styles.module.scss';
import { Button } from '../Button';
import useWindowDimensions from '../../hooks/window';
import { PlayerSection } from '../PlayerSection';
import { HeaderFooter } from './HeaderFooter/HeaderFooter';

export function Header() {
    const { width } = useWindowDimensions();

    return (
        <>
            <header className={styles.container}>
                <section className={styles.section}>
                    <div className={styles.logo}>
                        <img src="./images/logo.png" alt="Logo" />
                    </div>
                    {width > 700 && (
                        <nav>
                            <a href="#!">Create Your Nanny Share</a>
                            <a href="#!">Browse Shares</a>
                            <a href="#!">Our Story</a>
                        </nav>
                    )}
                    <div className={styles.singInSection}>
                        <Button type="button">Become a Nanny Share Host</Button>
                        {width > 700 && (
                            <a href="#!">Sign In</a>
                        )}
                    </div>
                </section>
                <div className={styles.content}>
                    <div>
                        <h1>
                            Easily create or join a local nanny share with Hapu
                        </h1>
                        <p>
                            Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.
                        </p>

                        <PlayerSection />
                    </div>
                    {width > 700 && (
                        <div className={styles.imageHeader}>
                            <img src="./images/image-header.png" alt="Image Header" />
                        </div>
                    )}
                </div>
            </header>
            <HeaderFooter />
        </>
    )
}