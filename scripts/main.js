//import { getChores } from "./ChoreProvider.js"
import { getFlowers } from "./Flowers/FlowerDataProvider.js"
//import { getFamilyChores } from "./FamilyChoreProvider.js"
import FlowerList from "./Flowers/FlowerList.js"

getFlowers()
    //.then(getFamilyMembers)
    //.then(getFamilyChores)
    .then(FlowerList)