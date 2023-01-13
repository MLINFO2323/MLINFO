import style__ from "./SearchBar.module.css"
const SearchBar = () => {
    return <div className={style__.wrap}>
        <div className={style__.search}>
            <input type="text" className={style__.searchTerm} placeholder="What are you looking for?" />
            <div className={style__.searchButton}>
                <img src="MagnifyingGlass.svg" style={{ width: "30px" }} />
            </div>
        </div>
    </div >
}
export default SearchBar