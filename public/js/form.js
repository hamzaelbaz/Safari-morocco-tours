const form = document.querySelector("form"),
    firstName = document.querySelector("#first-name"),
    lastName = document.querySelector("#last-name"),
    email = document.querySelector("#email"),
    message = document.querySelector("#message"),
    tel = document.querySelector('#tel')
form.addEventListener("submit", async e => {
    e.preventDefault();
    let a = firstName.value,
        r = lastName.value,
        n = email.value,
        o = message.value,
        p = tel.value;
        console.log(a,r,n,o,p)
    try {
        await axios.post("/.netlify/functions/sendEmail", {
            firstNames: a,
            lastNames: r,
            emails: n,
            messages: o,
            tele: p
        }), firstName.value = "", lastName.value = "", email.value = "", message.value = "", tel.value =""
    } catch (s) {
        console.error("oups! elle y a une erreur:", s)
    }
});