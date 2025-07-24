const AddSession = => (){

  // Generate session token
  const sessionToken = crypto.randomUUID(); // or use a custom random string
  const expiresInMinutes = 60; // set to your desired duration
  const expirationTime = Date.now() + expiresInMinutes * 60 * 1000;

  const session = {
    token: sessionToken,
    expiresAt: expirationTime,
  };

  localStorage.setItem("session", JSON.stringify(session));
}
