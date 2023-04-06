const Loader =  async() =>{

    const res = await fetch('products.json')
    const datas = await res.json()
    return datas
}

export default Loader;