import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import styles from "./Layout.module.scss"

const Layout = (props: {
    children: React.ReactNode
}) => {
    return (
        <div className={styles.layout}>
            <Header />

            <main className="mx-auto max-w-7xl h-[80vh] mt-[20px]">
                {props.children}
            </main>

            <Footer />
        </div>
    )
}

export default Layout