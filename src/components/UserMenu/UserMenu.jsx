import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/phonebook/auth/auth-operations";
import { getUsername } from "redux/selector";
import { UserButton, Username, Wrapper } from "./UserMenu.styled";

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(getUsername);


    const handleLogOut = () => {
        dispatch(logOut());
    };


    return (
        <Wrapper>
            <Username>Hi, {name}</Username>
            <UserButton type='button' onClick={handleLogOut}>Bye!</UserButton>
        </Wrapper>
    )
}