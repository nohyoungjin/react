import styles from './Header.module.scss'
import Link from 'next/link'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.contents}>
                <Link legacyBehavior href={"/"}>
                    <a>This is Header</a>
                </Link>
            </div>
            
        </header>
    )
}

export default Header