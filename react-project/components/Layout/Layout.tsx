import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const Layout = (props: {
    children: React.ReactNode
}) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow container mx-auto px-4 sm:px-6">
                {props.children}
            </main>

            <Footer />
        </div>
    )
}

export default Layout