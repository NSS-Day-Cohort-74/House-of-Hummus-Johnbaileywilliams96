const transientState = {
    "id": 0,
    "sideId": 0,
    "vegetableId": 0,
    "entreeId": 0

}

export const setSideOptions = (chosenSide) => {
    transientState.sideId = chosenSide
    console.log(transientState)
}

export const setVegetableOptions = (chosenVegetable) => {
    transientState.vegetableId = chosenVegetable
    console.log(transientState)
}

export const setEntreeOptions = (chosenEntree) => {
    transientState.entreeId = chosenEntree
    console.log(transientState)
}

export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
 
    const response = await fetch("http://localhost:8088/purchases", postOptions)
    const customEvent = new CustomEvent("newSubmissionCreated")
    document.dispatchEvent(customEvent)
}