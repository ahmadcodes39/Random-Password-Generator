let password = document.getElementById("Finalpassword")
let generateBtn = document.getElementById("generate")
let copyBtn = document.getElementById("copy")
let range = document.getElementById("range")
let Wrongmsg = document.querySelector(".InvalidRange")
let letters = "A12B]CD~!@$%^&E3456F[GHIJKabc.|/defghijklLMNO[PQ78]90URS{mnopqurstu+=vwxyzT-UVW}XYZ";
password.setAttribute("readonly", "true")

generateBtn.addEventListener("click", () => {
    let passwordLength = range.value;
    console.log(passwordLength)
    if (passwordLength <= 0) {
        Wrongmsg.style.display = "block"
        setTimeout(() => {
            Wrongmsg.style.display = "none"
        }, 2000)
    }
    else if (passwordLength > 25 || passwordLength <= 6) {
        passwordLength = 8
    }
    password.value = "";
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * letters.length)
        password.value += letters.charAt(randomIndex)
    }
})
copyBtn.addEventListener("click", () => {
    password.select()
    document.execCommand("copy")
    copyBtn.innerText = "Copied!"
    copyBtn.style.backgroundColor = "rgb(122, 197, 8)"
    setTimeout(() => {
        copyBtn.innerText = "Copy";
        copyBtn.style.backgroundColor = "rgb(11, 82, 163)"

    }, 1000);
})



