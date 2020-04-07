//import { useChores } from "./ChoreProvider.js"
import { useFlowers } from "./FlowerDataProvider.js"
//import { useFamilyChores } from "./FamilyChoreProvider.js"
import Flower from "./FlowerHtml.js"

const contentTarget = document.querySelector(".flower")

export const FlowerList = () => {
    //const chores = useChores()
    const Flowerx = useFlowerHtml()//may change varb
    //const peopleChores = useFamilyChores()

    const render = () => {
        contentTarget.innerHTML = flowers.map(flower => {
            // Find related chore ids
            //let relatedChores = peopleChores.filter(pc => pc.familyMemberId === person.id)

            // Convert the array from relationship objects to chore objects
            //relatedChores = relatedChores.map(rc => {
              //  return chores.find(chore => chore.id === rc.choreId)
            //}
            )

            // Get HTML representation of product
            const html = FamilyMember(flower)

            return html
        }//.join("")
    }

    render()
}

export default FlowerList