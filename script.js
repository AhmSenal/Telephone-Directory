const userForm = document.getElementById("userForm");
const username = document.getElementById("username");
const phone = document.getElementById("phone");
const userList = document.getElementById("userList");

window.onload = username.focus();

var users = [];

userForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (username.value === "" || phone.value === "") {
    alert("Username or phone number can't be empty");
    return;
  }
  const newUser = {
    id: new Date().getTime(),
    username: username.value,
    phone: phone.value,
  };
  users.push(newUser);
  renderUsers(users);
  username.value = "";
  phone.value = "";
  username.focus();
});

function renderUsers(dizi) {
  userList.innerHTML = "";
  for (let sayac = 0; sayac < dizi.length; sayac++) {
    const div = document.createElement("div");
    div.classList.add("alert");
    div.classList.add("alert-secondary");
    const innerhtml = `
  <p><b>${dizi[sayac].username}</b> - <span>${dizi[sayac].phone}</span>
  <button onclick="deleteUser(${dizi[sayac].id})" class="btn btn-sm btn-danger">Delete</button></p>
  `;
    div.innerHTML = innerhtml;
    userList.appendChild(div);
  }
}

function deleteUser(id) {
  console.log("delete'e basıldı", id);
  let filteredUsers = [];
  for (let filtreSayaci = 0; filtreSayaci < users.length; filtreSayaci++) {
    if (users[filtreSayaci].id !== id) {
      filteredUsers.push(users[filtreSayaci])
    }
  }
  users = filteredUsers;
  renderUsers(filteredUsers);
}
