let myCard = document.getElementById("card");
let myCoffre = document.getElementById("coffre");
let tabLesachats = document.getElementById("mesachats")
let tabItems = document.getElementById("items");
let addtocoffre = document.getElementById("addtocoffre");
let ligne1 = document.getElementById("ligne1");
let btnButOne = document.getElementById("but1");
let btnButTwo = document.getElementById("but2");
let btnButThree = document.getElementById("but3");
let btnButFour = document.getElementById("but4");
let btnSearch = document.getElementById("bi-search");
let tbodyUn = document.getElementById("tbodyUn");
let tbodydeux = document.getElementById("tbodydeux");
let tbodytrois = document.getElementById("tbodytrois");
// funtion Pour afficher les cardes du datas.js
function mesCardes(card) {
    card.forEach((element) => {
        let dataElement = element;
        ligne1.innerHTML += `
      <div id="card" class="card m-2 col-lg-4 col-md-4 col-sm-12">
          <img src="${dataElement.scr}" alt="..." class="h-75 card-img-top">
          <div class="card-body d-flex align-items-center justify-content-between">
              <h5 class="card-title">${dataElement.name}</h5>
              <p>${dataElement.paragraphe}</p>
          </div>
          <div id="coffre" onclick="addtocoffre()" class="hidd">
          <div class="d-flex mt-2 justify-content-center">
          <i class="bi bi-cart-fill"></i>
          </div>
          </div>
      </div>
      `
    });
}
mesCardes(datas.mesimages);

myCoffre.addEventListener("click", function (e) {
    e.preventDefault();
    tbodytrois.innerHTML = "";
    tbodytrois.innerHTML += `
    <tr>
    <td><i class="bi bi-pci-card"></i></td>
    <td>Items- </td>
    <td><i class="bi bi-currency-dollar"></i></td>
    <td>0.00</td>
  </tr>
    `
})































// tabItems.addEventListener("click", function (event) {
//     event.preventDefault();
//     if (event.target.click) {
//         tabLesachats.classList.remove("hidden")
//     } else {
//         tabLesachats.classList.add("hidden")
//     }
//     tbodyUn.innerHTML = `
//     <tr>
//     <td>${dataElement.name}</td>
//     <td>
//     ${dataElement.paragraphe}
//     </td>
//     <td>
//       <i class="bi bi-trash-fill"></i>
//     </td>
//   </tr>
//     `
// })