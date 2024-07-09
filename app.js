// let productDiv = document.querySelector('.Products');
// let CategoryListDiv = document.querySelector('.CategoryList');
// let allcat = [];

// function displayProducts(){
//     productDiv.innerHTML= '';
//     let product = fetch('https://fakestoreapi.com/products')
//     let finalProduct = productDiv.json();
//     finalProduct.forEach(element => {
    
        
//         productDiv.innerHTML += ` <div class="ProductsItem">
//         <img src="${element.image}" alt="">
//         <h4>${element.category}</h4>
//         <h4>Count: ${element.rating.count}</h4>
//         <p>Price Rs. ${element.price} | ${element.rating.rate}</p>
//         <h3>${element.title}</h3>
//         </div>`
        
//         CategoryListDiv.innerHTML +=` <label for="">
//                     <input type="checkbox"> ${element.category}
//                 </label>`
        
//     });
    

// }
// displayProducts();

let productDiv = document.querySelector('.Products');
let categoryListDiv = document.querySelector('.CategoryList');
let allCat=[];
// console.log(productDiv.innerHTML);
// console.log(categoryListDiv.innerHTML);


async function displayProducts(allCheckCat=[]){
    productDiv.innerHTML='';
    // categoryListDiv.innerHTML='';
    let product = await fetch('https://fakestoreapi.com/products');
    let finalProduct = await product.json();

    finalProduct.forEach(element => {
         // category data
         if(!allCat.includes(element.category)){

        categoryListDiv.innerHTML+=`<label for="">
                <input type="checkbox" onclick="categoryFilter()" value="${element.category}"> ${element.category}
                 </label>`

                 allCat.push(element.category)

         }



         if(allCheckCat.length==0){
            allCheckCat=allCat;
         }

        
         if(allCheckCat.includes(element.category)){
    // product cards
    productDiv.innerHTML+=`<div class="ProductsItem">
                <img src="${element.image}" alt="">
                <h4>${element.category}</h4>
                <p>Price Rs. ${element.price} | ${element.rating.rate}</p>
                <h3>${element.title}</h3>
            </div>`;
         }
        // console.log(element);
    });
    // console.log(finalProduct);
}

displayProducts();


function categoryFilter(){
    
    let checkInput = document.querySelectorAll("input[type='checkbox']")
    let checkData =[];
    checkInput.forEach((e)=>{
        if(e.checked){
            checkData.push(e.value)
            console.log(checkData);
        };
    })
    displayProducts(checkData)
}
