//import { useChores } from "./ChoreProvider.js"
import { useFlowers } from "./FlowerDataProvider.js"
//import { useFamilyChores } from "./FamilyChoreProvider.js"
import Flower from "./FlowerHtml.js"

const contentTarget = document.querySelector(".flower")

export const FlowerList = () => {
    //const chores = useChores()
    const flowers = useFlowers()//may change varb
    //const peopleChores = useFamilyChores()

    const render = flowersToRender => {
        contentTarget.innerHTML = flowersToRender.map(flowerObject => {
            return Flower(flowerObject)
            }).join("")
    }
    render(flowers)
}

export default FlowerList