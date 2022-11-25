import UserMenu from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import { getIsLoggedIn } from "redux/selector"

export const Header = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink end to='/'>
                            Home
                        </NavLink>
                    </li>
                    {isLoggedIn && (
                        <li>
                            <NavLink to='/contacts'>
                                Contacts
                            </NavLink>
                        </li>
                    )}
                </ul>
                {isLoggedIn ? (
                    <UserMenu />) : (
                        <ul>
                            <li>
                                <NavLink to='/registration'>
                                    Register
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/login'>
                                    Login
                                </NavLink>
                            </li>
                        </ul>
                )}
            </nav>
        </header>
    )
}