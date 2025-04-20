const fetchCategoryWiseProduct=async(category)=>{
    const response=await fetch(`https://e-commerce-project-0hn5.onrender.com/products/productByCategory`,{
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