import allCharacters from "./rollClass/personajes.js"
import CardComponent from "./components/CardComponent.js"

const container = document.querySelector(".characters-list.row.list-unstyled");

allCharacters.forEach(character => {

    const card = new CardComponent(character);
    
});

