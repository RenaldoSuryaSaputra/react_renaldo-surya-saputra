const form = document.getElementById("form");
let counter = 1001;

form.addEventListener("submit", (event) => {
  let formData = readFormData();
  validationInputForm(formData);
  event.preventDefault();
});

// fungsi untuk mendklarasikan value kedalam variable-
function readFormData() {
  let formData = {};
  formData["productName"] = document.getElementById("name").value;
  formData["productCategory"] = document.getElementById("category").value;
  formData["productImage"] = document.getElementById("image").value;
  formData["productDesc"] = document.getElementById("message").value;
  formData["productPrice"] = document.getElementById("price").value;
  formData["regex"] = /^[a-zA-Z0-9 ]*$/;
  return formData;
}

// Validasi setiap input pada form
function validationInputForm(data) {
  if (data.productName === "" || data.productName == null) {
    alert("The Product Name field must be filled in");
  } else if (data.productName.length > 25) {
    alert("Product Name must not exceed 25 characters");
  } else if (!data.regex.test(data.productName)) {
    alert("Product Name must not contain symbols.");
  } else if (data.productCategory === "" || data.productCategory == null) {
    alert("The Product Category field must be filled in");
  } else if (data.productImage === "" || data.productImage == null) {
    alert("The Product Images field must be filled in");
  } else if (!checkButton()) {
    alert("The Brand Freshness field must be filled in");
  } else if (data.productDesc === "" || data.productDesc == null) {
    alert("The Additional Description field must be filled in");
  } else if (data.productPrice === "" || data.productPrice == null) {
    alert("The Product Price field must be filled in");
  } else {
    alert("successfully submitted new data");
    insertNewRecordData(data)
  }
}

// fungsi untuk menambahkan data baru kedalam tabel
function insertNewRecordData(data) {
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
    td2.innerHTML = data.productName;
    td3.innerHTML = data.productCategory;
    td4.innerHTML = data.productImage;
    td5.innerHTML = freshness;
    td6.innerHTML = data.productDesc;
    td7.innerHTML = data.productPrice;

    document
      .getElementById("table")
      .getElementsByTagName("tbody")[0]
      .appendChild(tr);

    form.reset();
    counter++;
    console.log(table);
}

// Fungsi untuk menghapus data terakhir
function deleteLastData() {
  var lastTr =
    document.getElementById("table").lastElementChild.lastElementChild;
  confirm("are u sure want to delete the last product?");
  lastTr.remove();
}

// fungsi untuk mencari data berdasarkan nomor produk
function searchData() {
  const search = document.getElementById("search").value;
  var table = document.getElementById("table");
  for (var i = 0; i < table.rows.length; i++) {
    let row = document.getElementById("table").rows[i];
    var cells = row.cells;
    if (cells[0].innerHTML == search) {
      alert(row.innerHTML);
      break;
    }
  }
}

// fungsi validasi radio button
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
