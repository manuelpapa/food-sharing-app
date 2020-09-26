export async function fetchToken(data) {
  console.log(data);
  try {
    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.text();
    console.log(result);
    return result;
  } catch (error) {
    alert(error.message);
    return null;
  }
}
