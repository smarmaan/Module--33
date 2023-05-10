function createUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUser(data));
}

function displayUser(users) {
  const userContainer = document.getElementById("user-container");
  for (const user of users) {
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `

    <h1>User ID : ${user.id}</h1>
    <h2>Name : ${user.name}</h2>
    <h3>Username : ${user.username}</h3>
    <h3>address : ${
      user.address.street +
      " , " +
      user.address.suite +
      " , " +
      user.address.city
    }</h3>
    <h3>zipcode : ${user.address.zipcode}</h3>
    <h3>Geo : ${
      " lat : " + user.address.geo.lat + ", lng : " + user.address.geo.lng
    }</h3>

<h3>.</h3>
<h3>.</h3>
<h3>.</h3>


`;
    userContainer.appendChild(userDiv);
  }
}
createUser();
