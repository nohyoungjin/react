const Footer = () => {
    return (
        <footer className="px-4 sm:px-6 py-6 mt-24">
            <div className="text-center text-sm gext-gray-500">
                <h2 className="block">푸터</h2>
                <p>현재 연도 { new Date().getFullYear() }</p>
            </div>
        </footer>
    )
}

export default Footer