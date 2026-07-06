/**
 * LUXURY TRAVEL CONCIERGE INTERFACE ENGINE
 * Integrates directly with the Google AI Studio Gemini API Key.
 */

// Embedded Authorized Client Key
const ENGINES_TOKEN_ID = "AQ.Ab8RN6J_YgTXLqqwoJXFtP5wIEruCxhWHeL1qJAEIZl3g8zr7Q"; 

const chatToggleBtn = document.getElementById("chatToggleBtn");
const aiChatWidget = document.getElementById("aiChatWidget");
const closeChatBtn = document.getElementById("closeChatBtn");
const chatInput = document.getElementById("chatInput");
const sendChatBtn = document.getElementById("sendChatBtn");
const chatMessages = document.getElementById("chatMessages");

// Toggle visibility transitions smoothly
chatToggleBtn.addEventListener("click", () => {
    aiChatWidget.classList.toggle("active");
    if(aiChatWidget.classList.contains("active")) {
        chatInput.focus();
    }
});

closeChatBtn.addEventListener("click", () => {
    aiChatWidget.classList.remove("active");
});

// User action event bindings
sendChatBtn.addEventListener("click", handleOutboundMessage);
chatInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") handleOutboundMessage();
});

function handleOutboundMessage() {
    const textQuery = chatInput.value.trim();
    if (!textQuery) return;

    // Output visual user component bubble
    appendMessageElement(textQuery, "user-message");
    chatInput.value = "";

    // Generate isolated thinking indicator reference ID
    const loaderId = appendMessageElement("Consulting archives...", "ai-message");

    // Initiate API processing request sequence
    dispatchPromptToGemini(textQuery, loaderId);
}

function appendMessageElement(textPayload, systemClassName) {
    const messageBubble = document.createElement("div");
    messageBubble.className = `message ${systemClassName}`;
    messageBubble.innerText = textPayload;
    
    chatMessages.appendChild(messageBubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    const uniqueElementId = "bubble-" + Date.now() + Math.floor(Math.random() * 100);
    messageBubble.setAttribute("id", uniqueElementId);
    return uniqueElementId;
}

async function dispatchPromptToGemini(userMessage, referenceLoadingId) {
    const destinationTargetElement = document.getElementById(referenceLoadingId);
    
    // Explicit system rules preventing off-topic query resolution
    const systemContextInstructions = 
        "You are an exclusive virtual attache concierge for the 'Village Explorer' luxury travel platform. " +
        "You have strict parameters: You are ONLY allowed to answer questions regarding Village Explorer, eco-tourism, local village cultures, premium packages, custom destination bookings, and regional authentic delicacies. " +
        "CRITICAL ERROR PREVENTION RULE: If the user query is off-topic, random, generic, or asks for general concepts outside our eco-tourism platform (such as 'what is a cake', 'tell me a cake recipe', programming code, homework, math, or completely irrelevant definitions), " +
        "you MUST NOT answer the question under any circumstances. Instead, you must explicitly reply with this exact phrasing: " +
        "'I apologize, but my parameters only permit me to assist you with inquiries directly related to the Village Explorer luxury travel network and our curated heritage destinations.'";

    try {
        // Standard endpoint setup for AI Studio Key architectures
        const networkResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${ENGINES_TOKEN_ID}`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [{ parts: [{ text: userMessage }] }],
                systemInstruction: { parts: [{ text: systemContextInstructions }] }
            })
        });

        if (!networkResponse.ok) {
            throw new Error(`API Transaction Failed: ${networkResponse.status}`);
        }

        const standardJSONResponse = await networkResponse.json();
        
        if (standardJSONResponse.candidates && standardJSONResponse.candidates[0].content.parts[0].text) {
            destinationTargetElement.innerText = standardJSONResponse.candidates[0].content.parts[0].text.trim();
        } else {
            destinationTargetElement.innerText = "The concierge engine encountered an validation exception. Please refine your query terms.";
        }
    } catch (transactionError) {
        console.error("Concierge Core Error: ", transactionError);
        destinationTargetElement.innerText = "I apologize, but connection to the premium server is currently unavailable. Please check your credentials.";
    }
}