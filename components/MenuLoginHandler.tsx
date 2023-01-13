import SliderBut from "./Buttons/ButtonSlide1"
import style__ from "./MenuLoginHandler.module.css"
import { useSession, signIn, signOut } from "next-auth/react"
import ButtonSlide1 from "./Buttons/ButtonSlide1";
import Hamburger from "./HamburgerMenu/Hamburger";
import { lookupService } from "dns/promises";
import ShoppingCartButton from "./ShoppingCartButton";
import Profile from "./HamburgerMenu/Profile/Profile";
import SearchBar from "./SearchBar"
const MenuLoginHandler = () => {
    const { data: session } = useSession();
    if (session) {
        return <div className={style__.menu_holder}>
            <SearchBar></SearchBar>
            <ShoppingCartButton />
            <Hamburger>
                <Profile></Profile>
                <></>
            </Hamburger>
        </div>
    }
    else
        return <ButtonSlide1 text="Login" />
}
export default MenuLoginHandler;