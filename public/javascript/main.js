import { setPopoupSuccess } from "./popup-success.js";
import { setPopoupError } from "./popup-error.js";

const form = document.getElementById("sender");
const inputEmail = document.getElementById("email-input");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  await fetch(`/send-email`, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify({
      email: inputEmail.value,
    }),
  })
    .then((res) => {
      if (res.status !== 201) throw new Error(`Error: status ${res.status}`);

      setPopoupSuccess();
    })
    .catch(setPopoupError);
});
