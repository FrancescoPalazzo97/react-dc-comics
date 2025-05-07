import links from '../assets/links'

const NavBar = () => {
    return (
        <nav>
            <ul>
                {links.map(link => (
                    <li key={link.id}>
                        <a href="#">{link.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar
