import styles from './Header.module.scss'
import Link from 'next/link'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.contents}>

                <Link legacyBehavior href={"/"}>
                    <a className="text-3xl">Home</a>
                </Link>

                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link legacyBehavior href={"page1"}>
                                로컬 json (map)
                            </Link>
                        </li>
                        <li>
                            <Link legacyBehavior href={"page2"}>
                                외부 json (axios)
                            </Link>
                        </li>                        
                    </ul>
                </nav>

            </div>
        </header>
    )
}

export default Header