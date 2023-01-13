import style__butslider from "./ButtonSlide1.module.css"
import { signIn, useSession } from "next-auth/react"

const ButtonSlide1 = (props) => {
    const { data: session } = useSession();
    return <button className={style__butslider.bt1} onClick={() => signIn()}
    >{props.text}</button>
}
export default ButtonSlide1;