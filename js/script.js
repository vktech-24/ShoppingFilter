const data = [
    {
      id: 1,
      name: "Fire Boltt Ninja 2",
      img: "https://m.media-amazon.com/images/I/617eiZeFtNL._SL1500_.jpg",
      amt: 1599,
      seller: "Boltt Store",
      catagory: "Watch",
    },
  
    {
      id: 2,
      name: "Noise Pulse Go",
      img: "https://m.media-amazon.com/images/I/61akt30bJsL._SL1500_.jpg",
      amt: 1300,
      seller: "Noise Store",
      catagory: "Watch",
    },
  
    {
      id: 3,
      name: "boAt Xtend Pro",
      img: "https://m.media-amazon.com/images/I/61ZuL8CUigL._SL1500_.jpg",
      amt: 2799,
      seller: "Rajesh Watchs",
      catagory: "Watch",
    },
    {
      id: 4,
      name: "Lenovo Tab M8",
      img: "https://m.media-amazon.com/images/I/71SvqTFPXJL._SL1500_.jpg",
      amt: 9270,
      seller: "Stonehenge Retail",
      catagory: "Tablets",
    },
    {
      id: 5,
      name: "Honor PAD X8",
      img: "https://m.media-amazon.com/images/I/710G-VKcgtL._SL1500_.jpg",
      amt: 12999,
      seller: "Honor india",
      catagory: "Tablets",
    },
  
    {
      id: 6,
      name: "IKALL N9 ",
      img: "https://m.media-amazon.com/images/I/7185GL6hPlL._SL1500_.jpg",
      amt: 3999,
      seller: "IKALL Store",
      catagory: "Tablets",
    },
  
    {
      id: 7,
      name: "Oppo Pad Air",
      img: "https://m.media-amazon.com/images/I/513FD4w8hGL._SL1500_.jpg",
      amt: 15999,
      seller: "Oppo Store",
      catagory: "Tablets",
    },
    {
      id: 8,
      name: "Acer EK220Q",
      img: "https://m.media-amazon.com/images/I/8150iUXkc5L._SL1500_.jpg",
      amt: 6249,
      seller: "Accer Store",
      catagory: "Monitors",
    },
    {
      id: 9,
      name: "Samsung 24",
      img: "https://m.media-amazon.com/images/I/81TjRLHaz1L._SL1500_.jpg",
      amt: 9799,
      seller: "Samsung Store",
      catagory: "Monitors",
    },
    {
      id: 10,
      name: "ZEBRONICS AC32FHD ",
      img: "https://m.media-amazon.com/images/I/813Y1TIZwfL._SL1500_.jpg",
      amt: 12799,
      seller: "ZEBRONICS Store",
      catagory: "Monitors",
    },
    {
      id: 11,
      name: "Apple Watch Series 7",
      img: "https://m.media-amazon.com/images/I/41yiwGl1JPL._SX300_SY300_QL70_FMwebp_.jpg",
      amt: 37900,
      seller: "Apple Store",
      catagory: "Watch"
    },
    {
      id: 12,
      name: "Samsung Galaxy Watch 4",
      img: "https://m.media-amazon.com/images/I/51rAZQpFcIL._SX300_SY300_QL70_FMwebp_.jpg",
      amt: 24990,
      seller: "Samsung Store",
      catagory: "Watch"
    },
    {
      id: 13,
      name: "Fossil Gen 6 Smartwatch",
      img: "https://m.media-amazon.com/images/I/31lb-PBx05L._QL70_FMwebp_.jpg",
      amt: 22995,
      seller: "Fossil Store",
      catagory: "Watch"
    },
    {
      id: 14,
      name: "Apple iPad Air (4th Generation)",
      img: "https://m.media-amazon.com/images/I/31qx8K0wm+L._SX342_SY445_.jpg",
      amt: 54900,
      seller: "Apple Store",
      catagory: "Tablets"
    },
    {
      id: 15,
      name: "Samsung Galaxy Tab S7+",
      img: "https://m.media-amazon.com/images/I/41cahbke2QL._SY300_SX300_QL70_FMwebp_.jpg",
      amt: 81999,
      seller: "Samsung Store",
      catagory: "Tablets"
    },
    {
      id: 16,
      name: "Microsoft Surface Pro 8",
      img: "https://m.media-amazon.com/images/I/415gV21fNCL._SX300_SY300_QL70_FMwebp_.jpg",
      amt: 89999,
      seller: "Microsoft Store",
      catagory: "Tablets"
    },
    {
      id: 17,
      name: "LG UltraGear 27GN950-B",
      img: "https://m.media-amazon.com/images/I/41KvFadUgUL._SX300_SY300_QL70_FMwebp_.jpg",
      amt: 59999,
      seller: "LG Store",
      catagory: "Monitors"
    },
    {
      id: 18,
      name: "Dell S2721DGF",
      img: "https://m.media-amazon.com/images/I/41Bf0+F1M4L._SY300_SX300_.jpg",
      amt: 49990,
      seller: "Dell Store",
      catagory: "Monitors"
    },
    {
      id: 19,
      name: "ASUS TUF Gaming VG27AQ",
      img: "https://m.media-amazon.com/images/I/41pggXdxgHL._SY300_SX300_QL70_FMwebp_.jpg",
      amt: 43999,
      seller: "ASUS Store",
      catagory: "Monitors"
    },
    {
      id: 20,
      name: "BenQ EX3501R",
      img: "https://m.media-amazon.com/images/I/416mcJCTC3L._SX300_SY300_QL70_FMwebp_.jpg",
      amt: 84999,
      seller: "BenQ Store",
      catagory: "Monitors"
    }    
  ];

const productsContainer=document.querySelector(".products");
const categoryList=document.querySelector(".category-list");

function diaplayProducts(product){
  if(product.length>0){
 const product_details=product.map((pro)=>`
 <div class="product">
 <div class="img">
     <img src="${pro.img}" alt="${pro.name}">
 </div>
 <div class="product-details">
     <span class="name">${pro.name}</span>
     <span class="amt">Rs.${pro.amt}</span>
     <span class="seller">${pro.seller}</span> 
 </div>
 </div>
`).join("");
productsContainer.innerHTML=product_details;
}else{
  productsContainer.innerHTML="<h3>No Product Available</h3>";
}

}

function setCategary(){
  const allCategory=data.map((prod)=>prod.catagory);
  const catag=["ALL", ...allCategory.filter((prod,index)=>{
    return allCategory.indexOf(prod)===index;
  })];
 
  categoryList.innerHTML=catag.map((category)=>`<li>${category}</li>`).join("");
  categoryList.addEventListener('click',(e)=>{
    const selectedCategory=e.target.textContent;
    selectedCategory==="ALL" ? diaplayProducts(data) : diaplayProducts(data.filter((item)=>item.catagory==selectedCategory));
  })
}

const PriceRange=document.querySelector("#priceRange");
const PriceValue=document.querySelector(".price-val");

function setPrice(){
 const PriceList=data.map((product)=>product.amt)
 const minPrice=Math.min(...PriceList)
 const maxPrice=Math.max(...PriceList)
 PriceRange.max=maxPrice;
 PriceRange.min=minPrice;
 PriceValue.textContent="Rs."+maxPrice;

 PriceRange.addEventListener("input",(e)=>{
 PriceValue.textContent="Rs."+ e.target.value;

 diaplayProducts(data.filter((item)=>item.amt <= e.target.value));

 })
}

const textBox=document.querySelector("#txtSearch")

textBox.addEventListener("keyup",(e)=>{
  const value=e.target.value.toLowerCase().trim();
  if(value){
    diaplayProducts(data.filter((item)=>item.name.toLowerCase().indexOf(value) !== -1));

  }else{
    diaplayProducts(data);
  }
})

diaplayProducts(data);
setCategary();
setPrice();