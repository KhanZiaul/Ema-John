import { getShoppingCart } from "../utilities/fakedb"

const Loader =  async() =>{

    const res = await fetch('products.json')
    const datas = await res.json()
    const getDataFromDatabase = getShoppingCart()
    console.log(getDataFromDatabase);
    let saveCart = [];
    for(let id in getDataFromDatabase){
        let matchProduct = datas.find(data => data.id === id)
        if(matchProduct){
            let quantity = getDataFromDatabase[id]
            matchProduct.quantity = quantity
            saveCart.push(matchProduct)
        }
    }
    return saveCart;
}

export default Loader;