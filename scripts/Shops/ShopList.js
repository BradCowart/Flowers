import { useShops } from "./ShopDataProvider.js"
import Shop from "./ShopHtml.js"

const contentTarget = document.querySelector(".shop")

export const ShopList = () => {
    const shops = useShops()

    const render = shopsToRender => {
        contentTarget.innerHTML = shopsToRender.map(shopObject => {
            return Shop(shopObject)
            }).join("")
    }
    render(shops)
}

export default ShopList