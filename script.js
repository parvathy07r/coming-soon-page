const inputText = document.querySelector("input");
const notifyMe = document.querySelector("button");
const errorMessage = document.querySelector(".error-message");

const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

notifyMe.addEventListener("click", function (event) {
    console.log(inputText.value);
    if (inputText.value.length === 0 || !validRegex.test(inputText.value)) {
        console.log("Error!!!!");
        createErrorMessage();
    } else {
        inputText.style.border = "1px solid lightblue";
        errorMessage.innerHTML = "";
        inputText.value = ""
        console.log("Submitted!!!");
    }
});

function createErrorMessage() {
    if (errorMessage.innerHTML === '') {
        inputText.style.border = "1px solid red";
        const node = document.createElement("p");
        const textNode = document.createTextNode("Please provide a valid email address");
        node.style.color = "red";
        node.style.fontStyle = "italic";
        node.style.fontSize = "10px";
        node.style.textAlign = "left";
        node.append(textNode);
        document.querySelector(".error-message").append(node);
        console.log("gsdfghsdfh")
    }else {
        errorMessage.innerHTML = "";
        inputText.style.border = "1px solid red";
        const node = document.createElement("p");
        const textNode = document.createTextNode("Please provide a valid email address");
        node.style.color = "red";
        node.style.fontStyle = "italic";
        node.style.fontSize = "10px";
        node.style.textAlign = "left";
        node.append(textNode);
        document.querySelector(".error-message").append(node);
        console.log("hdftwt")
    }

}

