import { getShoppingCart } from "../utilities/fakedb"

const Loader =  async() =>{
    const getDataFromDatabase = getShoppingCart()
    const storeCart =getShoppingCart()
    const ids = Object.keys(storeCart)
    const res = await fetch('https://ema-jhon-server-site.vercel.app/cartProducts',{
        method:'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body:JSON.stringify(ids)
    })
    const datas = await res.json()

    let saveCart = [];
    for(let id in getDataFromDatabase){
        let matchProduct = datas.find(data => data._id === id)
        if(matchProduct){
            let quantity = getDataFromDatabase[id]
            matchProduct.quantity = quantity
            saveCart.push(matchProduct)
        }
    }
    return saveCart;
}

export default Loader;