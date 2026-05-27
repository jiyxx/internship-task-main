const userContainer = document.getElementById("userContainer");
const searchInput = document.getElementById("searchInput");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

let allUsers = [];

// Fetch Users From API
async function fetchUsers() {

  try {

    loading.style.display = "block";
    error.textContent = "";

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    // Error Handling
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users = await response.json();

    allUsers = users;
    displayUsers(allUsers);
    loading.style.display = "none";

  } catch (err) {

    error.textContent = err.message;
    loading.style.display = "none";

  }
}

// Display Users
function displayUsers(users) {

  userContainer.innerHTML = "";

  // No User Found
  if(users.length === 0){

    userContainer.innerHTML = `
      <p class="no-user">No users found</p>
    `;

    return;
  }

  // Creating Cards
  users.forEach(user => {

    const card = document.createElement("div");

    card.classList.add("user-card"); // Add class for styling

    card.innerHTML = `
      <h2>${user.name}</h2>

      <p class="info">
        <span class="label">Email:</span>
        ${user.email}
      </p>

      <p class="info">
        <span class="label">City:</span>
        ${user.address.city}
      </p>

      <p class = "info">
        <span class = "label"> Company: </span>
        ${user.company.name}
      </p>

      <p class= "info" >
        <span class ="label"> Phone:</span>
        ${user.phone}
      </p>

    `;

    userContainer.appendChild(card);

  });
}

// Real-Time Search
searchInput.addEventListener("input", (e) => { 

  const searchText = e.target.value.toLowerCase();  

  const filteredUsers = allUsers.filter(user => 
    user.name.toLowerCase().includes(searchText) 
  );

  displayUsers(filteredUsers);

});

// Initial Fetch
fetchUsers();

