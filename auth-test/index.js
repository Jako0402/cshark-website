const pb = new PocketBase("https://db.cshark.dk");

const loginForm = document.getElementById("loginForm");
const userInfo = document.getElementById("userInfo");
const logoutButton = document.getElementById("logoutButton");

const userId = document.getElementById("userId");
const userEmail = document.getElementById("userEmail");
const userCreated = document.getElementById("userCreated");

// Check if user is already logged in (from stored auth)
if (pb.authStore.isValid) {
  showUser(pb.authStore.model);
}

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const authData = await pb.collection("users").authWithPassword(email, password);
    console.log("Authenticated user:", authData);
    showUser(authData.record);
  } catch (err) {
    alert("Login failed: " + err.message);
    console.error("Auth error:", err);
  }
});

logoutButton.addEventListener("click", () => {
  pb.authStore.clear();
  userInfo.style.display = "none";
  loginForm.style.display = "block";
});

function showUser(user) {
  userId.textContent = user.id;
  userEmail.textContent = user.email;
  userCreated.textContent = new Date(user.created).toLocaleString();

  loginForm.style.display = "none";
  userInfo.style.display = "block";
}
