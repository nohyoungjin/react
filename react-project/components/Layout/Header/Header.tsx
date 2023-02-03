import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.contents}>
                <h2>This is Header</h2>
            </div>
            
        </header>
    )
}

export default Header