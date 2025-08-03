//your JS code here. If required.
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const outputDiv = document.getElementById("output");
const submitButton = document.getElementById("btn");

submitButton.addEventListener("click", async () => {
    const text = textInput.value;
    const delay = parseInt(delayInput.value);

    if (isNaN(delay) || delay < 0) {
        outputDiv.textContent = "Please enter a valid delay";
        return;
    }

    await new Promise((resolve) => setTimeout(resolve, delay));
    outputDiv.textContent = text;
});
