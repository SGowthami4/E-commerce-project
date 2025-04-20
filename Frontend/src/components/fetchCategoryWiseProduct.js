const fetchCategoryWiseProduct=async(category)=>{
    const response=await fetch(`http://localhost:3500/products/productByCategory`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({
            category:category
        })
    })
    const data=await response.json();
    return data
}

export default fetchCategoryWiseProduct