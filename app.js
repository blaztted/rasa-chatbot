// Replace with your Wit.ai server access token
const ACCESS_TOKEN = "YOUR_WIT.AI_SERVER_ACCESS_TOKEN";
const WIT_AI_URL = "https://api.wit.ai/message?q=";

document.getElementById("sendButton").addEventListener("click", () => {
  const input = document.getElementById("messageInput").value;
  if (input.trim() === "") return;

  fetch(`${WIT_AI_URL}${encodeURIComponent(input)}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const responseOutput = document.getElementById("responseOutput");
      responseOutput.innerHTML = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
