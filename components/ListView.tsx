import ListView__style from "./ListView.module.css"
const ListView = ({ children }) => {
    return <div className={ListView__style.container}>
        {children}
    </div>
}
export default ListView;