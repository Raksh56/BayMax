const message = document.querySelector(".message");
function getdata(data) {
    return new Promise((resolve) => {

        const timeout = Math.random()

        setTimeout(() => {
            const text = document.createElement("span");
            text.innerHTML = data;
            message.appendChild(text)
            resolve()
        }, timeout * 1000);
    })
}

async function run() {
    await getdata("Hello, I am Baybot ");
    await getdata("your personal healthcare companion 🤖");
    await getdata("How are you feeling today?");
    document.querySelector(".buttons").style.display = "flex";
    document.querySelector(".Button1").innerHTML = "1. I'm feeling great!";
    document.querySelector(".Button2").innerHTML = "2. A bit tired...";

} run()


function handleyeahh(data) {
    document.querySelector(".buttons").style.display = "none";
    const message = document.querySelector(".message");
    const text = document.createElement("div");
    text.innerHTML = data;
    message.appendChild(text);
}


function handleno(data) {
    document.querySelector(".buttons").style.display = "none";
    const message = document.querySelector(".message");
    const text = document.createElement("div");
    text.innerHTML = data;
    message.appendChild(text);
}

async function handleYeahResponse() {
    handleyeahh("1. I'm feeling great!");
    await getdata("That’s great to hear! 😄");
    await getdata("Would you like a high five? ✋");
    await getdata("Just kidding... unless you actually tried. 😅");
    await getdata("Let me know if you need help with anything.");
    await getdata("Would you like a high five? ✋");
    await getdata("Just kidding... unless you actually tried. 😅");
    await getdata("Let me know if you need help with anything.");
    // You can continue expanding here
}


async function handlenoResponse() {
    handleyeahh("2. A bit tired...");
    await getdata("I detect a slight drop in energy levels. 💡");
    await getdata("Try taking a 5-minute stretch break.");
    await getdata("Would you like me to play relaxing music for you? 🎶");
    await getdata("Or maybe suggest a healthy snack? 🍎");
    // You can continue expanding here
}