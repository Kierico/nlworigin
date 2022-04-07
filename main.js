/** Objetos de links sociais */
const linksSocialMedia = {
    github: "kierico",
    youtube: "kiericograndao",
    facebook: "lojaprincesalu",
    instagram: "princesalu.loja"
}

/** Consumindo API do Github */
function getGithubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`;

    fetch(url)
        .then(githubResponse => githubResponse.json())
        .then(data => {
            userName.textContent = data.name;
            userBio.textContent = data.bio;
            userLink.href = data.html_url;
            // userAvatar.src = data.avatar_url;
            userLogin.textContent = data.login;
        });
}
getGithubProfileInfos();

/** Add links dinâmicamente */
function changelinksSocialMedia() {
    /** for (let i = 0; i <= 10; i++) { */
    for (let li of socialLinks.children) {
        const social = li.getAttribute("class");
        li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`;
    }
}
changelinksSocialMedia();