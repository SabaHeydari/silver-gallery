let filterarray =[];
const product = [{
    img: 'img/e1.jpg',
    name: 'گوشواره نقره طرح بال فرشته',
    price: '595.000 '
  },
  {
    img: 'img/e2.jpg',
    name: 'گوشواره حلقه ای نقره طرح ستاره',
    price: '410.000 '
  },
  {
    img: 'img/e3.jpg',
    name: 'گوشواره حلقه ای نقره ونکلیف با صدف طبیعی',
    price: '465.000 '
  },
  {
    img: 'img/e4.jpg',
    name: 'گوشواره نقره طرح جواهر',
    price: '2110.000 '
  },
  {
    img: 'img/e5.jpg',
    name: 'گوشواره حلقه ای نقره طرح صدف و مروارید',
    price: '480.000 '
  },
  {
    img: 'img/e6.jpg',
    name: 'گوشواره نقره طرح جواهر با نگین های رنگی',
    price: '1640.000 '
  },
  {
    img: 'img/e7.jpg',
    name: 'گوشواره حلقه ای نقره با آویز نگین',
    price: '485.000 '
  },
  {
    img: 'img/e8.jpg',
    name: 'گوشواره میخی نقره طرح جواهر',
    price: '375.000 '
  },
  {
    img: 'img/e9.jpg',
    name: 'گوشواره نقره طرح جواهر با سنگ اشکی بنفش',
    price: '1375.000 '
  },
  {
    img: 'img/e10.jpg',
    name: 'گوشواره نقره طرح جواهر تا به تا',
    price: '645.000 '
  },
  {
    img: 'img/e11.jpg',
    name: 'گوشواره حلقه ای نقره با آویز نگین های رنگی',
    price: '1770.000'
  },
  {
    img: 'img/e12.jpg',
    name: 'گوشواره نقره طرح جواهر با آویز مروارید طبیعی پرورشی',
    price: '1340.000'
  },
  {
    img: 'img/r1.jpg',
    name: 'انگشتر سولیتر نقره',
    price: '675.000 '
  },
  {
    img: 'img/r2.jpg',
    name: 'انگشتر نقره طرح جواهر',
    price: '690.000 '
  },
  {
    img: 'img/r3.jpg',
    name: 'انگشتر نقره طرح جواهر',
    price: '1170.000 '
  },
  {
    img: 'img/r4.jpg',
    name: 'انشگتر نقره طرح جواهر سولیتر',
    price: '1245.000 '
  },
  {
    img: 'img/r5.jpg',
    name: 'حلقه و پشت حلقه نقره طرح جواهر',
    price: '985.000 '
  },
  {
    img: 'img/r6.jpg',
    name: 'انگشتر نقره نگین دار',
    price: '1385.000 '
  },
  {
    img: 'img/r7.jpg',
    name: 'حلقه و پشت حلقه نقره ضربدری',
    price: '765.000 '
  },
  {
    img: 'img/r8.jpg',
    name: 'حلقه و پشت حلقه نقره طرح جواهر',
    price: '1220.000 '
  },
  {
    img: 'img/r9.jpg',
    name: 'انگشتر نقره با آویز نگین',
    price: '820.000 '
  },
  {
    img: 'img/r10.jpg',
    name: 'انگشتر نقره با آبکاری نگین',
    price: '1460.000 '
  },
  {
    img: 'img/r11.jpg',
    name: 'انگشتر نقره طرح جواهر با نگین های باگت',
    price: '1890.000 '
  },
  {
    img: 'img/r12.jpg',
    name: 'انگشتر نقره طرح جواهر',
    price: '870.000 '
  },
  {
    img: 'img/b1.jpg',
    name: 'دستبند نقره طرح پنتر',
    price: '3650.000 '
  },
  {
    img: 'img/b2.jpg',
    name: 'دستبند نقره آویز دار',
    price: '380.000 '
  },
  {
    img: 'img/b3.jpg',
    name: 'دستبند نقره کارتیر نگین دار',
    price: '2250.000 '
  },
  {
    img: 'img/b4.jpg',
    name: 'دستبند کارتیر',
    price: '4650.000 '
  },
  {
    img: 'img/b5.jpg',
    name: 'دستبند نقره رولکس رزگلد',
    price: '4655.000 '
  },
  {
    img: 'img/b6.jpg',
    name: 'دستبند نقره طرح جواهر',
    price: '5700.000 '
  },
  {
    img: 'img/b7.jpg',
    name: 'دستبند نقره تنیسی',
    price: '2225.000 '
  },
  {
    img: 'img/b8.jpg',
    name: 'دستبند نقره با صدف طبیعی',
    price: '2380.000 '
  },
  {
    img: 'img/h1.jpg',
    name: 'نیمست نقره طرح گل صدفی',
    price: '1490.000 '
  },
  {
    img: 'img/h2.jpg',
    name: 'نیمست نقره ونکلیف',
    price: '3640.000 '
  },
  {
    img: 'img/h3.jpg',
    name: 'نیمست نقره طرح جواهر',
    price: '830.000 '
  },
  {
    img: 'img/h4.jpg',
    name: 'نیمست نقره و مروارید طبیعی',
    price: '980.000 '
  },
  {
    img: 'img/h5.jpg',
    name: 'سرویس نقره تنیسی جواهر',
    price: '5160.000 '
  },
  {
    img: 'img/h6.jpg',
    name: 'سرویس نقره با نگین های مارکیز',
    price: '6890.000 '
  },
  {
    img: 'img/h7.jpg',
    name: 'نیمست نقره طرح دریم کچر',
    price: '1870.000 '
  },
  {
    img: 'img/h8.jpg',
    name: 'نیمست نقره طرح طاووس',
    price: '1210.000 '
  },
  {
    img: 'img/n1.jpg',
    name: 'گردنبند نقره طرح سینه ریز با سنگ های فیروزه',
    price: '680.000 '
  },
  {
    img: 'img/n2.jpg',
    name: 'گردنبند نقره دو ردیفه طرح وی و گل',
    price: '895.000 '
  },
  {
    img: 'img/n3.jpg',
    name: 'گردنبند نقره بلند با آویز زنجیر',
    price: '1890.000 '
  },
  {
    img: 'img/n4.jpg',
    name: 'گردنبند نقره دو ردیفه با آویز زنجیر و نگین',
    price: '985.000 '
  },
  {
    img: 'img/n5.jpg',
    name: 'گردنبند نقره طرح سینه ریز با سنگ های رنگی اتریشی',
    price: '995.000 '
  },
  {
    img: 'img/n6.jpg',
    name: 'گردنبند نقره طرح ونکلیف با صدف طبیعی',
    price: '1080.000 '
  },
  {
    img: 'img/n7.jpg',
    name: 'گردنبند نقره با نگین اشکی قرمز اتریشی',
    price: '1165.000 '
  },
  {
    img: 'img/n8.jpg',
    name: 'گردنبند نقره با آویز های مختلف',
    price: '1280.000 '
  },
  {
    img: 'img/n9.jpg',
    name: 'گردنبند نقره طرح پنتر کارتیر',
    price: '2225.000 '
  },
  {
    img: 'img/n10.jpg',
    name: 'گردنبند نقره طرح چشم با آویز نگین های رنگی',
    price: '690.000 '
  },
  {
    img: 'img/n11.jpg',
    name: 'گردنبد نقره با آویز مروارید طبیعی پرورشی',
    price: '750.000 '
  },
  {
    img: 'img/n12.jpg',
    name: 'گردنبند نقره طرح دایره با صدف طبیعی',
    price: '580.000 '
  }
];

showgallery(product);


// create function to show card


function showgallery(x){
   document.getElementById("card").innerText = "";
   for(var i=0;i<x.length;i++){
       document.getElementById("card").innerHTML += `
       <div class="col-md-3 mt-3" >
       <div class="card" style="flex: 0 0 auto;
       width: 270px;
       height: 450px;
       margin-right: 40px;
       margin-left:20px;
       margin-bottom: 10px;
       margin-top: 40px;
       border: none;">
         <img src="${x[i].img}" class="card-img-top product-img" alt="...">
         <div class="card-body">
           <h5 class="card-title product-name">${x[i].name}</h5>
           <p class="card-text product-price">${x[i].price} تومان</p>
           <button class="btn btn-outline-dark" data-action="add-to-cart">افزودن به سبد خرید <i class="fa-solid fa-cart-shopping"></i></button>
         </div>
       </div>
       `
   }

}

document.getElementById("myinput").addEventListener("keyup",function(){
    let text = document.getElementById("myinput").value;

    filterarray= product.filter(function(a){
        if(a.name.includes(text)){
            return a.name;
           }

   });
   if(this.value==""){
       showgallery(product);
   }
   else{
       if(filterarray == ""){
           document.getElementById("para").style.display = 'block'
           document.getElementById("card").innerHTML = "";
       }
       else{

           showgallery(filterarray);
           document.getElementById("para").style.display = 'none'
       }
   }

});
