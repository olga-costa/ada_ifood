const tableBody = document.querySelector('.table_body')

const peoples = getLocalStorage('count_form')

const man = Number(peoples.man)
const woman = Number(peoples.woman)
const children = Number(peoples.children)
const drinking = Number(peoples.drinking)
const totalPeople = man + woman + children


const manMeat = man * 0.4;
const womanMeat = woman * 0.32;
const childrenMeat = children * 0.2


const manGarlicBread = man
const womanGarlicBread = woman
const childrenGarlicBread = children




const totalMeat = manMeat + womanMeat + childrenMeat;
const totalGarlicBread = manGarlicBread + womanGarlicBread + childrenGarlicBread;
const totalSalt = totalPeople * 0.04;
const totalCoal = totalPeople
const totalIce = totalPeople / 2
const totalSoda = totalPeople / 2.5
const totalWater = totalPeople / 5
const totalBeer = drinking * 3;

tableBody.innerHTML = `
    <tr class="table_row">
    <td><p class="table_cell">${totalMeat.toFixed(2)}KG</p></td>
    <td><p class="table_cell">${totalGarlicBread}</p></td>
    <td><p class="table_cell">${totalCoal}KG</p></td>
    <td><p class="table_cell">${totalSalt.toFixed(2)}KG</p></td>
    <td><p class="table_cell">${totalIce.toFixed(2)}KG</p></td>
    <td><p class="table_cell">${totalSoda.toFixed(2)}L</p></td>
    <td><p class="table_cell">${totalWater.toFixed(2)}L</p></td>
    <td><p class="table_cell">${(totalBeer * 0.6).toFixed(2)}L</p></td>
    </tr>
`