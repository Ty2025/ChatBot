const chatInput = document.querySelector(".chat-input textarea")
const sendChatBtn = document.querySelector(".chat-input span")
const chatbox = document.querySelector(".chatbox")
const chatToggler = document.querySelector(".chatbot-toggler")
const chatCloseBtn = document.querySelector(".chatbot-closebtn")

let userMessage ;

const createChatLi = (message, className) => { //creates chatlist
    const chatLi = document.createElement("li")
    chatLi.classList.add("chat", className);
    let chatContent =  className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`
    console.log(chatContent); //tst
    chatLi.innerHTML = chatContent;
    console.log(chatLi); // tst
    return chatLi;
}


const handleChat = () => {  //takes message from box
userMessage = chatInput.value.trim();
if(!userMessage) return;

chatbox.appendChild(createChatLi(userMessage, "outgoing")); // appends messages to chatbox

setTimeout(() => { // thinking message for effect
    chatbox.appendChild(createChatLi("thinking bout you...", "incoming"));
}, 600);

}

sendChatBtn.addEventListener("click", handleChat) // add event listner to input box's send button
chatToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"))
chatCloseBtn.addEventListener("click", () => document.body.classList.toggle("show-chatbot"))