const Footer = () => {
    return (
        <footer>
            <ul>
                <li>
                    <h2 className="block">푸터</h2>
                    <p>현재 연도 { new Date().getFullYear() }</p>
                </li>
            </ul>
        </footer>
    )
}

export default Footer