import styles from './Header.module.scss'
import Link from 'next/link'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.contents}>
                <Link legacyBehavior href={"/"}>
                    <a>상단</a>
                </Link>
            </div>
            
        </header>
    )
}

export default Header