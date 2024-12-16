import { setEntreeOptions } from "./TransientState.js"

const handleEntreeChange = (changeEvent) => {
    if (changeEvent.target.name === "entrees") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setEntreeOptions(convertedToInteger)
    }
}





export const Entrees = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

    document.addEventListener("change", handleEntreeChange)

    let html = `
    <div class="entrees-container dashed-container">
        <h2>Base Dish</h2>
        <div class="entrees-list">
            ${entrees.map(
                (entree) => `
                <label class="entrees-item">
                    <input type="radio" name="entrees" value="${entree.id}" />
                    <span class="entrees-title">${entree.name}</span>
                </label>
                `
            ).join('')}
        </div>
    </div>
    `

    return html
}
