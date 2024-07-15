// 7 - indexed access types

type Truck = {km: number, kg: number, description: string}

type Kg = Truck["kg"]

const newTruck:Truck = {
    km: 10000,
    kg: 5000, 
    description: "Small cargo truck"
}

function showKg(kg: Kg) {
    console.log(`The veichle weights ${kg}`)
}

showKg(newTruck.kg)

const newCar = {
    km: 100000,
    kg: 1500
}

showKg(newCar.kg)