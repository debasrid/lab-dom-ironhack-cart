

window.onload = function () {

  var btn = document.getElementById("calc-price");

  btn.addEventListener("click", function () {
    var price = document.getElementsByClassName("product-price");
    var qty = document.getElementsByClassName("input-field");

    var total = 0;
    for (i = 0; i < price.length; i++) {
      total = parseInt(price[i].innerHTML) * qty[i].value;
      (document.getElementsByClassName("total-product-price"))[i].innerHTML = total;
    }

    var value = document.getElementsByClassName("total-product-price");
    currentValue = 0;
    for (j = 0; j < value.length; j++) {
      currentValue += parseInt(value[j].innerHTML);
    }
    document.getElementById("total-value").innerHTML = currentValue;

  });

  deleteProduct();

  function deleteProduct() {

    let btnDelete = document.getElementsByClassName("btn-delete");
    let wrapperDelete = document.getElementsByClassName("wrapper");


    for (let k = 0; k < wrapperDelete.length; k++) {
      btnDelete[k].addEventListener("click", function () {

        console.log(k + " wrapper " + wrapperDelete[k]);

        wrapperDelete[k].parentNode.removeChild(wrapperDelete[k]);

        deleteProduct();
      })
    }
  };

};
