import { setVegetableOptions } from "./TransientState.js"


const handleVegetablesChange = (changeEvent) => {
    if (changeEvent.target.name === "vegetables") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setVegetableOptions(convertedToInteger)
    }
}


export const Veggies = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()

    document.addEventListener("change", handleVegetablesChange)

    let html = `
    <div class="vegetables-container dashed-container">
        <h2>Vegetable</h2>
        <div class="vegetables-list">
            ${vegetables.map(
                (vegetable) => `
                <label class="vegetable-item">
                    <input type="radio" name="vegetables" value="${vegetable.id}" />
                    <span class="vegetable-title">${vegetable.type}</span>
                </label>
                `
            ).join('')}
        </div>
    </div>
    `

    return html
}
