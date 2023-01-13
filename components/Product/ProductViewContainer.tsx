import style__ from "./ProductViewContainer.module.css"
import ProductPanelSmall from "./ProductPanelSmall";

const QueryProducts = () => {
    return <ProductPanelSmall title="Creatina Optimum Nutrition ON Creatine micronizata monohidrata, 317g" previewImg="https://s13emagst.akamaized.net/products/10523/10522206/images/res_da29809da8fc7db231065794fa80967a.jpg?width=450&height=450&hash=232665B350C7AAA629E5D18E5A797096" price={84.99} currency="RON">
    </ProductPanelSmall>
}
const ProductViewContainer = () => {
    const ch = QueryProducts();
    return <div className={style__.container}>
        {ch}
    </div>
}
export default ProductViewContainer;