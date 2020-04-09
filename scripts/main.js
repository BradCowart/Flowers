import { getFlowers } from "./Flowers/FlowerDataProvider.js"
import FlowerList from "./Flowers/FlowerList.js"
import ShopList from "./Shops/ShopList.js"
import { getShops } from "./Shops/ShopDataProvider.js"

getFlowers()
getShops()
    .then(FlowerList)
    .then(ShopList)
    