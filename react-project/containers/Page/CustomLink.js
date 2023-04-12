const CustomLink = ({ href, children }) => {
    const inInternalLink = href && href.startswith('/')

    if (inInternalLink) {
        return (
            <Link href={href}>
                <a>{children}</a>
            </Link>
        )
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
    )
}

export CustomLink