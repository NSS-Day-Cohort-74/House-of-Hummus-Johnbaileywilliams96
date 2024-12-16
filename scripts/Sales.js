export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side").then(res => res.json())
    
    let salesDivs = sales.map(
        (sale) => {
                let totalPrice = 0
                let html = ""

                totalPrice = parseFloat(sale.entree.price)
                            + parseFloat(sale.vegetable.price)
                            + parseFloat(sale.side.price)

            html += `<div> reciept #${sale.id} = $${totalPrice.toFixed(2)} </div>`
            return html
        }
    )

    salesDivs = salesDivs.join("")

    return salesDivs
}

