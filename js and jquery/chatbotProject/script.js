// const chatInput = document.querySelector(".chat-input textarea");
// const sendChatBtn = document.querySelector(".chat-input span");
// const chatbox = document.querySelector(".chatbox");
// const chatbotToggler = document.querySelector(".chatbot-toggler");
// const chatbotCloseBtn = document.querySelector(".close-btn");

// let userMessage;
// const API_KEY = "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";
// const inputInitHeight = chatInput.scrollHeight;
// const createChatLi = (message, className) => {
//   const chatLi = document.createElement("li");
//   chatLi.classList.add("chat", className);
//   let chatContent =
//     className === "outgoing"
//       ? `<p></p>`
//       : `<span class="material-symbols-outlined">smart_toy </span><p></p>`;
//   chatLi.innerHTML = chatContent;
//   chatLi.querySelector("p").textContent = message;
//   return chatLi;
// };
// const generateResponse = (incomingChatLi) => {
//   const API_URL = "https://api.openai.com/v1/chat/completions";
//   const messageElement = incomingChatLi.querySelector("p");
//   const requestOptions = {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//       Authorization: `Bearer ${API_KEY}`,
//     },
//     body: JSON.stringify({
//       model: "gpt-3.5-turbo",
//       messages: [
//         {
//           role: "system",
//           content: userMessage,
//         },
//       ],
//     }),
//   };

//   fetch(API_URL, requestOptions)
//     .then((res) => res.json())
//     .then((data) => {
//       messageElement.textContent = data.choices[0].message.content;
//     })
//     .catch((err) => {
//       messageElement.classList.add("error");
//       messageElement.textContent =
//         "Oops! Something went wrong. Please try again.";
//     })
//     .finally(() => {
//       chatbox.scrollTo(0, chatbox.scrollHeight);
//     });
// };
// const handleChat = () => {
//   userMessage = chatInput.value.trim();
//   if (!userMessage) return;
//   chatInput.value = "";
//   chatInput.style.height = `${inputInitHeight}px`;
//   chatbox.appendChild(createChatLi(userMessage, "outgoing"));
//   chatbox.scrollTo(0, chatbox.scrollHeight);
//   setTimeout(() => {
//     const incomingChatLi = createChatLi("Thinking...", "incoming");
//     chatbox.appendChild(incomingChatLi);
//     chatbox.scrollTo(0, chatbox.scrollHeight);
//     generateResponse(incomingChatLi);
//   }, 600);
// };

// chatbotToggler.addEventListener("click", () => {
//   document.body.classList.toggle("show-chatbot");
// });
// chatbotCloseBtn.addEventListener("click", () => {
//   document.body.classList.remove("show-chatbot");
// });
// chatInput.addEventListener("input", () => {
//   chatInput.style.height = `${inputInitHeight}px`;
//   chatInput.style.height = `${chatInput.scrollHeight}px`;
// });
// chatInput.addEventListener("keydown", (e) => {
//   if (e.key === "Enter" && !e.shiftKey) {
//     e.preventDefault();
//     handleChat();
//   }
// });
// sendChatBtn.addEventListener("click", handleChat);

// /////////////////////// Converting all code to jquery ///////////////////

$(document).ready(function () {
  const chatInput = $(".chat-input textarea");
  const sendChatBtn = $(".chat-input span");
  const chatbox = $(".chatbox");
  const chatbotToggler = $(".chatbot-toggler");
  const chatbotCloseBtn = $(".close-btn");

  let userMessage;
  const API_KEY = "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";
  const inputInitHeight = chatInput[0].scrollHeight;
  // console.log(chatInput);
  const createChatLi = (message, className) => {
    const chatLi = $("<li>").addClass("chat").addClass(className);
    let chatContent =
      className === "outgoing"
        ? `<p></p>`
        : `<span class="material-symbols-outlined">smart_toy </span><p></p>`;
    chatLi.html(chatContent);
    chatLi.find("p").text(message);
    return chatLi;
  };

  const generateResponse = (incomingChatLi) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = incomingChatLi.find("p");
    const requestOptions = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: userMessage,
          },
        ],
      }),
    };

    $.ajax({
      url: API_URL,
      type: "POST",
      headers: requestOptions.headers,
      data: requestOptions.body,
      dataType: "json",
    })
      .done(function (data) {
        messageElement.text(data.choices[0].message.content);
      })
      .fail(function () {
        messageElement.addClass("error");
        messageElement.text("Oops! Something went wrong. Please try again.");
      })
      .always(function () {
        chatbox.scrollTop(chatbox[0].scrollHeight);
      });
  };

  const handleChat = () => {
    userMessage = chatInput.val().trim();
    if (!userMessage) return;
    chatInput.val("");
    chatInput.css("height", `${inputInitHeight}px`);
    chatbox.append(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTop(chatbox[0].scrollHeight);
    setTimeout(() => {
      const incomingChatLi = createChatLi("Thinking...", "incoming");
      chatbox.append(incomingChatLi);
      chatbox.scrollTop(chatbox[0].scrollHeight);
      generateResponse(incomingChatLi);
    }, 600);
  };

  chatbotToggler.on("click", () => {
    $("body").toggleClass("show-chatbot");
  });
  chatbotCloseBtn.on("click", () => {
    $("body").removeClass("show-chatbot");
  });
  chatInput.on("input", () => {
    chatInput.css("height", `${inputInitHeight}px`);
    chatInput.css("height", `${chatInput[0].scrollHeight}px`);
  });
  chatInput.on("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleChat();
    }
  });
  sendChatBtn.on("click", handleChat);
});
