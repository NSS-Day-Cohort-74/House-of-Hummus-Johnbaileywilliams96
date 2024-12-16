// import { Sales } from "./Sales.js"
import { Entrees } from "./Entrees.js"
import { Sales } from "./Sales.js"
import { Sides } from "./SideDishes.js"
import { placeOrder } from "./TransientState.js"
import { Veggies } from "./Vegetables.js"


const handlePlaceOrderClick = (clickEvent) => {
    if (clickEvent.target.id === "purchase") {
        placeOrder()
    }
}

const placeOrderButton = () => {
    document.addEventListener("click", handlePlaceOrderClick)
    return `<article>
    <button id="purchase">Purchase Combo</button>
            </article>`
}


export const FoodTruck = async () => {
    // const salesHTML =  Sales()
    const sidesHTML = await Sides()
    const entreesHTML = await Entrees()
    const vegetablesHTML = await Veggies()
    const orderButtonHTML = await placeOrderButton()
    const salesHTML = await Sales()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <div class="food-options">
        <section class="entrees">
            ${entreesHTML}
        </section>
        
        <section class="vegetables">
            ${vegetablesHTML}
        </section>
        
        <section class="sides">
             ${sidesHTML}
        </section>


        </div>

        ${orderButtonHTML}

        <article class="customerOrders">
            <h2>Monthly Sales</h2>

            ${salesHTML}
            
        </article>

    `
}
