export async function fetchToken(data) {
  const response = await fetch("/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseText = await response.text();
  const responseObject = await response;
  const result = {
    status: responseObject.status,
    statusText: responseText,
  };
  return result;
}
