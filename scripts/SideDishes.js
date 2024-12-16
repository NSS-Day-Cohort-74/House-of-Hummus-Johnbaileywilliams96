import { setSideOptions } from "./TransientState.js"




const handleSideChange = (changeEvent) => {
    if (changeEvent.target.name === "sides") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setSideOptions(convertedToInteger)
    }
}





export const Sides = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

        document.addEventListener("change", handleSideChange)


    let html = `
    <div class="sides-container dashed-container">
        <h2>Sides</h2>
        <div class="sides-list">
            ${sides.map(
                (side) => `
                <label class="side-item">
                    <input type="radio" name="sides" value="${side.id}" />
                    <span class="side-title">${side.title}</span>
                </label>
                `
            ).join('')}
        </div>
    </div>
    `

    return html
}
