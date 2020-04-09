let shops = []

export const useShops = () => shops.slice()

export const getShops = () => fetch("http://localhost:3000/retailers")
    .then(res => res.json())
    .then(data => shops = data)