import { useFlowers } from "./FlowerDataProvider.js"
import Flower from "./FlowerHtml.js"

const contentTarget = document.querySelector(".flower")

export const FlowerList = () => {
    const flowers = useFlowers()

    const render = flowersToRender => {
        contentTarget.innerHTML = flowersToRender.map(flowerObject => {
            return Flower(flowerObject)
            }).join("")
    }
    render(flowers)
}

export default FlowerList