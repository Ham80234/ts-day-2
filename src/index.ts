import Warehouse from "./models/Warehouse";



let detroitWarehouse: Warehouse[] = [
    {
       name: "iPhone SE",
       price: 399,
       fiveG: false,
     },
     {
       name: "iPhone XR",
       price: 499,
       fiveG: false,
     },
     {
       name: "iPhone 11",
       price: 599,
       fiveG: false,
     },
     {
       name: "iPhone 12 Mini",
       price: 729,
       fiveG: true,
     },
     {
       name: "iPhone 12",
       price: 829,
       fiveG: true,
     },
     {
       name: "iPhone 12 Pro",
       price: 999,
       fiveG: true,
     },
     {
       name: "iPhone 12 Max",
       price: 1099,
       fiveG: true,
     },
    {
       name: "Pixel 4a",
       price: 349,
       fiveG: false,
     },
     {
       name: "Pixel 5",
       price: 699,
       fiveG: true,
     },
    ];
    


const addPhone = (arr: Warehouse[], newPhoneName: string, newPrice: number, isFiveG: boolean): void  => {
  arr.push({
    name: newPhoneName,
    price: newPrice,
    fiveG: isFiveG
  })
}

const deletePhoneByIndex = (arr: Warehouse[], idx: number): void => { 
  arr.splice(idx, 1)
}

const deletePhoneByName = (arr: Warehouse[], name: string): void => { 
  arr = arr.splice(arr.map(e => e.name).indexOf(name), 1)
}

const filter5G = (arr: Warehouse[]): Warehouse[] | undefined => { 
  let res = arr.filter(item => item.fiveG)
  return res
}

const filterPriceLessThan = (arr: Warehouse[], price: number): Warehouse[] | undefined => {
  let res = arr.filter(a => a.price <= price)
  return res
}

const filterPriceGreaterThan = (arr: Warehouse[], price: number): Warehouse[] | undefined => {
  let res = arr.filter(a => a.price >= price)
  return res
}

const findPhoneByName = (arr: Warehouse[], name: string): Warehouse | undefined => {
  return arr.find(a => a.name === name)
}

const calcAverageCost = (arr: Warehouse[]): number => { 
  return arr.reduce((a, b) => { 
    return a + b.price
}, 0)/arr.length
}

const doWeHaveA5GPhone = (arr: Warehouse[]) : boolean => { 
  return arr.some(a => a.fiveG)
}

const phoneFlashSale = (arr: Warehouse[], percent: number): Warehouse[] => {
  let res: Warehouse[] = arr.map(a => {
    return {
      name: a.name,
      price: a.price * (1 - (percent/100)),
      fiveG: a.fiveG
    }
  })
  return res
}

const phoneFlashSaleV2 = (arr: Warehouse[], phoneList: string[], percent: number): Warehouse[] | undefined => {
  let res: Warehouse[] = arr.map(a => {
    if (phoneList.includes(a.name)){
      return {
        name: a.name,
        price: a.price * (1 - (percent/100)),
        fiveG: a.fiveG
      }
    }
    return a
  })
  return res
}

console.log(detroitWarehouse)

console.log("adding phone: iphone 43 for price 400 and is five g ");

addPhone(detroitWarehouse, "Iphone 43", 400, true)

console.log(detroitWarehouse)

console.log("deleting first phone....");

deletePhoneByIndex(detroitWarehouse, 0)

console.log(detroitWarehouse)

console.log("deleting iphone 43");

deletePhoneByName(detroitWarehouse, "Iphone 43")

console.log(detroitWarehouse)

console.log("which phones have 5G");

console.log(filter5G(detroitWarehouse));

console.log("Phones cheaper then 500");

console.log(filterPriceLessThan(detroitWarehouse, 500))

console.log("Phones more then 500");

console.log(filterPriceGreaterThan(detroitWarehouse, 500))

console.log("looking for IPHONE 12");

console.log(findPhoneByName(detroitWarehouse, 'iPhone 12'))

console.log("AVG Cost");

console.log(calcAverageCost(detroitWarehouse));

console.log('do they have 5G');

console.log(doWeHaveA5GPhone(detroitWarehouse));

console.log("Phones are now 30% off ");

console.log(phoneFlashSale(detroitWarehouse, 30))

console.log("only the Iphone 12 is 20% off ")

console.log(phoneFlashSaleV2(detroitWarehouse, ["iPhone 12"], 20))