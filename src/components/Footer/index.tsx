import styles from './styles.module.scss';

export function Footer() {
    return (
        <div className={styles.container}>
            <h2>
                Become a nanny share host
            </h2>
            <span>
                Takes less than 5 minutes to get started
            </span>

            <button>
                <img src="./icons/union.png" alt="Union" />

                <div>
                    <span>Create Your Nanny share <br /></span>
                    <span className={styles.lastSpan}>Takes less than 5 minutes</span>
                </div>
            </button>
            <a href="#!">
                <u>
                    Or browse local nanny-shares
                </u>
            </a>

            <div>
                <img src="./images/logo.svg" alt="Hapu" />

                <nav>
                    <a href="#!">
                        Share Your Nanny
                    </a>
                    <a href="#!">
                        Our Story
                    </a>
                    <a href="#!">
                        Blog
                    </a>
                    <a href="#!">Terms & Privacy</a>
                </nav>

                <div>
                    <img src="./icons/Facebook.png" alt="Facebook" />
                    <img src="./icons/Instagram.png" alt="Instagram" />
                    <img src="./icons/Twitter.png" alt="Twitter" />
                </div>
            </div>
            <footer>
                Copyright © 2017 Hapu PTY Limited All rights reserved
            </footer>
        </div>
    );
}