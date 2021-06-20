import useWindowDimensions from '../../../hooks/window';
import styles from './styles.module.scss';

export function HeaderFooter() {
    return (
        <div className={styles.container}>
            <img src="./images/avatar.png" alt="Avatar" />
            <a href="#!">
                <u>Sarah’s day care available now in North Sydney </u>
                <span>
                    Wednesday, Thursday, Friday - 7:30 - 5:30
                </span>
            </a>
            
        </div>
    )
}