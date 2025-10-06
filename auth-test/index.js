const pb = new PocketBase("https://db.cshark.dk");

const googleLoginButton = document.getElementById("googleLoginButton");
const userInfo = document.getElementById("userInfo");
const logoutButton = document.getElementById("logoutButton");

const userId = document.getElementById("userId");
const userEmail = document.getElementById("userEmail");
const userCreated = document.getElementById("userCreated");

// Check if user is already logged in
if (pb.authStore.isValid) {
  showUser(pb.authStore.model);
}

// Google OAuth Login
googleLoginButton.addEventListener("click", async () => {
  try {
    const authData = await pb.collection("users").authWithOAuth2({ provider: "google" });

    console.log("Google OAuth success:", authData);
    showUser(authData.record);
  } catch (err) {
    alert("Google login failed: " + err.message);
    console.error("Google login error:", err);
  }
});

// Logout
logoutButton.addEventListener("click", () => {
  pb.authStore.clear();
  userInfo.style.display = "none";
  googleLoginButton.style.display = "block";
});

function showUser(user) {
  userId.textContent = user.id;
  userEmail.textContent = user.email;
  userCreated.textContent = new Date(user.created).toLocaleString();

  googleLoginButton.style.display = "none";
  userInfo.style.display = "block";
}
