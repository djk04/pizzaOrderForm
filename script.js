// 1)
function getSize() {
  x = document.getElementById("slider");
  console.log(x.value);
  return x.value;
}

//2)
function getMeat() {
  var array = [];
  var checkboxes = document.querySelectorAll(
    "#meat input[type=checkbox]:checked"
  );
  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].name);
  }
  return array;
}

//3)
function getVeg() {
  var array = [];
  var checkboxes = document.querySelectorAll(
    "#Veggies input[type=checkbox]:checked"
  );
  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].name);
  }
  return array;
}

//4)
function getCheese() {
  var checkboxes = document.querySelectorAll("input[name=op1]:checked");
  if (checkboxes[0].value == "Reg") {
    return 1;
  } else if (checkboxes[0].value == "no") {
    return 2;
  } else if (checkboxes[0].value == "extra") {
    return 3;
  }
}
function ChangePizzaSize() {
  if (getSize() == 1) {
    document.getElementById("image").style.width = "100px";
    document.getElementById("pizzasize").textContent = "Small";
    document.getElementById("price").innerHTML = "6";
    return 1;
  } else if (getSize() == 2) {
    document.getElementById("image").style.width = "150px";
    document.getElementById("pizzasize").textContent = "Medium";
    document.getElementById("price").innerHTML = "10";
    return 2;
  } else if (getSize() == 3) {
    document.getElementById("image").style.width = "200px";
    document.getElementById("pizzasize").textContent = "Large";
    document.getElementById("price").innerHTML = "14";
    return 3;
  } else if (getSize() == 4) {
    document.getElementById("image").style.width = "250px";
    document.getElementById("pizzasize").textContent = "X-Large";
    document.getElementById("price").innerHTML = "16";
    return 4;
  }
}

//6)
function calculateTotal() {
  size = getSize();
  priceSize = 0;
  meat = getMeat().length * 2;
  veg = getVeg().length;
  cheese = getCheese();
  if (size == 1) {
    priceSize = 6;
  } else if (size == 2) {
    priceSize = 10;
  } else if (size == 3) {
    priceSize = 14;
  } else if (size == 4) {
    priceSize = 16;
  }

  total = priceSize + meat * 2 + veg;
  if (cheese == 3) {
    total += 3;
  }
  console.log(total);
  return total;
}

//7)
function fillSummary() {
  var priceSize = "";
  var firstname = "";
  var lastname = "";
  var email = "";
  var city = "";
  var address = "";
  total = calculateTotal();
  firstname = document.getElementById("firstname").value;
  lastname = document.getElementById("lastname").value;
  email = document.getElementById("mail").value;
  address = document.getElementById("address").value;
  city = document.getElementById("select").value;

  document.getElementById("dlvrTo").innerHTML =
    firstname +
    " , " +
    lastname +
    " , " +
    email +
    " , " +
    city +
    " - " +
    address;

  document.getElementById("total").innerHTML = "Total: " + total + " $";

  s = getSize();
  meat = getMeat();
  veg = getVeg();
  cheese = getCheese();

  var ul = document.getElementById("orderList");
  var a = document.createElement("li");
  var cheeseList = document.createElement("li");

  if (s == 1) {
    priceSize = "Small";
  } else if (s == 2) {
    priceSize = "Medium";
  } else if (s == 3) {
    priceSize = "Large";
  } else if (size == 4) {
    priceSize = "X-Large";
  }
  a.appendChild(document.createTextNode("-" + priceSize + " size"));
  ul.appendChild(a);

  if (cheese == 1) {
    cheeseList.appendChild(document.createTextNode("Regular Cheese"));
  } else if (cheese == 2) {
    cheeseList.appendChild(document.createTextNode("No Cheese"));
  } else if (cheese == 3) {
    cheeseList.appendChild(document.createTextNode("Extra Cheese"));
  }

  for (var i = 0; i < meat.length; i++) {
    var m = document.createElement("li");
    m.appendChild(document.createTextNode(meat[i]));
    ul.appendChild(m);
  }

  for (var i = 0; i < veg.length; i++) {
    var veg = document.createElement("li");
    veg.appendChild(document.createTextNode(veg[i]));
    ul.appendChild(veg);
  }
}

//5.2)

function goToPage(a) {
  if (a == 1) {
    document.getElementById("firstForm").style.display = "none";
    document.getElementById("secondForm").style.display = "block";
    document.getElementById("thirdForm").style.display = "none";
  } else if (a == 2) {
    document.getElementById("firstForm").style.display = "block";
    document.getElementById("secondForm").style.display = "none";
    document.getElementById("thirdForm").style.display = "none";
  } else if (a == 3) {
    document.getElementById("firstForm").style.display = "none";
    document.getElementById("secondForm").style.display = "none";
    document.getElementById("thirdForm").style.display = "block";
  } else if (a == 4) {
    document.getElementById("firstForm").style.display = "none";
    document.getElementById("secondForm").style.display = "block";
    document.getElementById("thirdForm").style.display = "none";
  }
}
function checkInfo() {
  form = document.getElementById("secondForm");
  myElement = document.getElementById("select");
  if (
    form.firstname.value == "" ||
    form.lastname.value == "" ||
    form.email.value == "" ||
    form.address.value == "" ||
    myElement.value.find("option:eq(0)").prop("selected", true)||
    form.phoneNumber.value==""
  ) {
    alert("All fields are required");
    form.name.focus();
    return false;
  }
  return true;
}
function buttoncheck() {
  if (checkInfo() == true) {
    goToPage(3);
  } else {
    return;
  }
}
