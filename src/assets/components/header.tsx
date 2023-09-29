import { NavLink } from "react-router-dom";

export default function Header() : JSX.Element {

    const pages = ["Home", "About", "Resume", "Skills", "Projects", "Contact"];

    return (
        <header>
            <h1>JOY WINATA</h1>
            <nav className="navbar">
                <ul>
                    {pages.map((page, index) => {

                        if(page.toLowerCase() === "home") return (<li key={index}>
                            <NavLink to={"/"}>
                                {page}
                            </NavLink>
                        </li>);
                        return (
                            <li key={index}>
                                <NavLink to={page}>
                                    {page}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}