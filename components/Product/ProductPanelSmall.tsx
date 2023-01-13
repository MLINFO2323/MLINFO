import style__ from "./ProductPanelSmall.module.css"
const ProductPanelSmall = (props) => {
    return <div className={style__.container}>
        <p>{props.title}</p>
        <div style={{ height: "50%" }}>
            <img src={props.previewImg} style={{ height: "100%" }}></img>
        </div>
        <p>
            <span style={{ color: "red" }}>{props.price}</span>
            <span style={{ color: "red" }}>{props.currency}</span>
        </p>
    </div>
}
export default ProductPanelSmall;