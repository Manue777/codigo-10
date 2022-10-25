// APP state
const API = "https://api.github.com/users/";
let dark = true

// Grab DOM elements
const result = document.querySelector(".result");
const form = document.querySelector(".form");
const input = document.querySelector(".form__input");
const waiting = document.querySelector(".form__waiting");
const notFound = document.querySelector(".not-found");
const themeSwitch = document.querySelector(".theme__switch");
const themeCSS = document.querySelector(".theme-css")
const themeName = document.querySelector(".theme-name")

// Listen various events
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the username from the input
  const username = input.value.trim();

  if (!username) return;

  getUserData(username);

  input.value = "";
});

themeSwitch.addEventListener("click", switchTheme)

// Query the GitHub API for that username
async function getUserData(username) {
  try {
    const response = await fetch(API + username);
    if (!response.ok) {
      throw new Error("Can't find that username");
    }
    const data = await response.json();
    showUserData(data);
  } catch (error) {
    console.error("Error", error);
    showNotFound()
  }
}

// Show not found (404) message
function showNotFound() {
    const image = '<img class="not-found" src="img/404.webp" alt="Not Found">'
    result.innerHTML = image
}

// Show the user data
function showUserData(data) {
  const {
    login,
    avatar_url: avatar,
    name,
    company,
    blog,
    public_repos: repos,
    location,
    email,
    bio,
    twitter_username: twitter,
    followers,
    following,
    created_at: joined,
  } = data;

  const userData = `
        <img src="${avatar}"
        class="avatar">

        <h2 class="name">${name}</h2>
        <h4 class="joined">${parseDate(joined)}</h4>
        <h5 class="username">${login}</h5>
        <p class="bio">${bio}</p>

        <section class="stats">
            <p class="repos">Repos</p>
            <p class="followers">Followers</p>
            <p class="following">Following</p>
            <small class="repos">${repos}</small>
            <small class="followers">${followers}</small>
            <small class="following">${following}</small>
        </section>

        <nav class="contact">
            <a href="#" class="link"><i class="fa fa-map-marker-alt"></i> ${location}</a>
            <a href="#" class="link"><i class="fa fa-link"></i>${email}</a>
            <a href="${blog}" target="_blank" class="link"><i class="fa fa-link"></i>${blog}</a>
            <a href="#" class="link"><i class="fa fa-building"></i>${company}</a>
        </nav>
    `;
  result.innerHTML = userData;

  function parseDate(date) {
    let options = {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleString("es-ES", options);
  }
}

// Do the theme switching stuff
function switchTheme() {
    dark = !dark
    if (dark) {
        themeCSS.setAttribute("href", "css/light.css")
        themeName.textContent = "LIGHT"
    } else {
        themeCSS.setAttribute("href", "css/dark.css")
        themeName.textContent = "DARK"
    }
}