const form = document.getElementById("form");
let counter = 1001;

form.addEventListener("submit", (e) => {
  const pname = document.getElementById("name").value;
  const category = document.getElementById("category").value;
  const image = document.getElementById("image").value;
  const message = document.getElementById("message").value;
  const price = document.getElementById("price").value;

  const regex = /^[a-zA-Z0-9 ]*$/;

  if (pname === "" || pname == null) {
    alert("The Product Name field must be filled in");
    e.preventDefault();
  } else if (category === "" || category == null) {
    alert("The Product Category field must be filled in");
    e.preventDefault();
  } else if (image === "" || image == null) {
    alert("The Images field must be filled in");
    e.preventDefault();
  } else if (message === "" || message == null) {
    alert("The Additional Description field must be filled in");
    e.preventDefault();
  } else if (price === "" || price == null) {
    alert("The Product Price field must be filled in");
    e.preventDefault();
  } else if (!checkButton()) {
    alert("The Brand Freshness field must be filled in");
    e.preventDefault();
  } else {
    if (pname.length > 25) {
      alert("Product Name must not exceed 25 characters");
      e.preventDefault();
    } else if (!regex.test(pname)) {
      alert("Name must not contain symbols.");
      e.preventDefault();
    } else {
      const freshness = document.querySelector(
        'input[name="freshness"]:checked'
      ).value;

      const tr = document.createElement("tr");
      const td1 = tr.appendChild(document.createElement("td"));
      const td2 = tr.appendChild(document.createElement("td"));
      const td3 = tr.appendChild(document.createElement("td"));
      const td4 = tr.appendChild(document.createElement("td"));
      const td5 = tr.appendChild(document.createElement("td"));
      const td6 = tr.appendChild(document.createElement("td"));
      const td7 = tr.appendChild(document.createElement("td"));

      td1.innerHTML = counter;
      td2.innerHTML = pname;
      td3.innerHTML = category;
      td4.innerHTML = image;
      td5.innerHTML = freshness;
      td6.innerHTML = message;
      td7.innerHTML = price;

      document.getElementById("table").getElementsByTagName('tbody')[0].appendChild(tr);
      alert("successfully submitted");
      e.preventDefault();

      form.reset();
      counter++;
      console.log(table)
    }
  }
});

function deleteData() {
  var lastTr = document.getElementById("table").lastElementChild.lastElementChild;
  confirm("are u sure want to delete this product?")
  lastTr.remove();
}

function searchData() {
  const search = document.getElementById("search").value;
  var table = document.getElementById("table");
  for (var i = 0; i < table.rows.length; i++) {
    let row = document.getElementById("table").rows[i];
    var cells = row.cells;
    if (cells[0].innerHTML == search) {
      alert(row.innerHTML);
      break
    } 
  }
}

function checkButton() {
  if (document.getElementById("brandNew").checked) {
    return true;
  } else if (document.getElementById("secondHand").checked) {
    return true;
  } else if (document.getElementById("refurbished").checked) {
    return true;
  } else {
    return false;
  }
}
