import styles from './styles.module.scss';

export function PlayerSection() {
    return (
        <div className={styles.container}>
            <button type="button">
                <img src="./icons/player-icon.png" alt="player" />
            </button>
            <span>
                See hapu in action (27 seconds)
            </span>
        </div>
    )
}