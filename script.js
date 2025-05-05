const message = document.querySelector(".message");
function getdata(data) {
    return new Promise((resolve) => {

        const timeout = Math.random()

        setTimeout(() => {
            const text = document.createElement("span");
            text.className = "bottext"
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
    text.className = "usertext"
    text.innerHTML = data;
    message.appendChild(text);
}


function handleno(data) {
    document.querySelector(".buttons").style.display = "none";
    const message = document.querySelector(".message");
    const text = document.createElement("div");
    text.className = "textdiv"
    text.innerHTML = data;
    message.appendChild(text);
}

async function handleYeahResponse() {
    handleyeahh("1. I'm feeling great!");
    await getdata("That’s great to hear! 😄");
    await getdata("Would you like a high five? ✋");
    await getdata("Just kidding... unless you actually tried. 😅");
    handlerbutton()

}


async function handlenoResponse() {
    handleyeahh("2. A bit tired...");
    await getdata("I detect a slight drop in energy levels. 💡");
    await getdata("Try taking a 5-minute stretch break.");
    await getdata("Would you like me to play relaxing music for you? 🎶");
    await getdata("Or maybe suggest a healthy snack? 🍎");
    handlerbutton()

}


async function handlerbutton() {
    const container = document.createElement("div");
    container.className = "button3"
    message.appendChild(container)
    handle2response("Hehehe", container)
    handle2response("Okay Bye!!", container)

}

function handle2response(data, container) {
    const button = document.createElement("button");
    button.innerHTML = data;
    function disapper() {
        container.remove()
    }
    button.addEventListener("click", async () => {
        disapper()
        const text = document.createElement("div")
        text.innerHTML = data;
        message.appendChild(text)
        text.className = "usertext"
        
        if (data == "Hehehe") {
            await getdata("hahahaha")
        } else if (data == "Okay Bye!!") {
            await getdata("hmm okay Bye!!")
        }
    })
    container.appendChild(button)

}