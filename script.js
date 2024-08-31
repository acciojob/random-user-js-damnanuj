const img = document.querySelector(".img");
const name = document.querySelector(".name");
const number = document.querySelector(".number");
const age = document.querySelector(".age");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const getAnotherBtn = document.querySelector(".getAnotherBtn");

const apiUrl = "https://randomuser.me/api/";
let userData = {};

async function fetchUser() {
  //   fetch(apiUrl)
  //     .then(response => response.json())
  //     .then(data => {
  //       userData = data.results[0];
  //       updateUserInfo();
  //     })
  //     .catch(error => console.error('Error fetching user:', error));

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data.results[0]);
    userData = data.results[0];
    updateUserInfo();
  } catch (error) {
    console.log(error);
  }
}

function updateUserInfo() {
  img.src = userData.picture.large;
  name.textContent = `${userData.name.first} ${userData.name.last}`;
}

function showInfo(attribute) {
  const infoSection = document.querySelector(".additional-info");
  switch (attribute) {
    case "age":
      infoSection.textContent = `Age: ${userData.dob.age}`;
      break;
    case "email":
      infoSection.textContent = `Email: ${userData.email}`;
      break;
    case "phone":
      infoSection.textContent = `Phone: ${userData.phone}`;
      break;
  }
}

age.addEventListener("click", () => showInfo("age"));
email.addEventListener("click", () => showInfo("email"));
phone.addEventListener("click", () => showInfo("phone"));

getAnotherBtn.addEventListener("click", () => {
  fetchUser();
  document.querySelector(".additional-info").textContent = "";
});

// Initial user fetch
fetchUser();
