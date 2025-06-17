/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrectTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrectIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrectTheme());
  localStorage.setItem("selected-icon", getCurrectIcon());
});

/*===================== YEAR CALCULATOR =====================*/
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = `Jan C Bierowiec. ${currentYear}`;
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".language [data-language]");
  elements.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      const lang = e.target.getAttribute("data-language");
      changeLanguage(lang);
    });
  });

  function changeLanguage(lang) {
    // navigation
    const navHome = {
      en: "Home",
      pl: "Strona Główna",
    };
    const navSkills = {
      en: "Skills",
      pl: "Umiejętności",
    };
    const navPortfolio = {
      en: "Portfolio",
      pl: "Portfolio",
    };
    const navContact = {
      en: "Contact",
      pl: "Kontakt",
    };
    const navLanguage = {
      en: "Language",
      pl: "Język",
    };
    const naven = {
      en: "English",
      pl: "Angielski",
    };
    const navpl = {
      en: "Polish",
      pl: "Polski",
    };

    // home section
    const descriptions = {
      en: "A young developer seeking experiences in Software, Electrical, and Mechanical Engineering.",
      pl: "Młody programista poszukujący doświadczeń w dziedzinie inżynierii oprogramowania oraz inżynierii elektrycznej i mechanicznej.",
    };

    // skills section
    const skills_title = {
      en: "Skills",
      pl: "Umiejętności",
    };
    const skills_subtitle = {
      en: "Technical",
      pl: "Techniczne",
    };
    const web_dev = {
      en: "Web Development",
      pl: "Oprogramowanie Stron Internetowych",
    };
    const prog_tool = {
      en: "Programming & tools",
      pl: "Programowanie i narzędzia rozwojowe",
    };
    const graph_desgn = {
      en: "Graphic Design",
      pl: "Grafika Komputerowa",
    };
    const app_dev = {
      en: "App Development",
      pl: "Rozwój Aplikacji",
    };
    const robotics = {
      en: "Robotics",
      pl: "Robotyka",
    };

    // portfolio section
    const portfolio_title = {
      en: "Portfolio",
      pl: "Portfolio",
    };
    const portfolio_subtitle = {
      en: "Most Recent Work",
      pl: "Najnowsza Praca",
    };

    const all_filter = {
      en: "All",
      pl: "Wszystko",
    };
    const web_development_filter = {
      en: "Web Development",
      pl: "Opracowane Strony Internetowe",
    };
    const web_design_filter = {
      en: "Web Design",
      pl: "Zaprojektowane Strony Internetowe",
    };
    const app_filter = {
      en: "App Development",
      pl: "Opracowane Aplikacje",
    };

    const web_development1 = {
      en: "Physim",
      pl: "Physim",
    };
    const web_development2 = {
      en: "PocketBookApps",
      pl: "PocketBookApps",
    };
    const web_development3 = {
      en: "MyCyberLab",
      pl: "MyCyberLab",
    };

    const web_design1 = {
      en: "Micro SaaS Landing Page",
      pl: "Strona Docelowa Dirmy Micro SaaS",
    };
    const web_design2 = {
      en: "Technology Landing Page",
      pl: "Strona Docelowa Firmy Technologicznej",
    };
    const web_design3 = {
      en: "Construction Landing Page",
      pl: "Strona Docelowa Firmy Budowlanej",
    };

    const app1 = {
      en: "Mathematical Proofs",
      pl: "Dowody Matematyczne",
    };
    const app2 = {
      en: "Biology Definitions",
      pl: "Definicje Biologiczne",
    };
    const app3 = {
      en: "Polonia Internationalis",
      pl: "Polonia Internationalis",
    };

    // contact section
    const contact_title = {
      en: "Contact Me",
      pl: "Skontaktuj się ze Mną",
    };
    const contact_subtitle = {
      en: "Get in Touch",
      pl: "Skontaktuj Się",
    };
    const contact_name = {
      en: "Name",
      pl: "Imię",
    };
    const contact_email = {
      en: "Email",
      pl: "Email",
    };
    const contact_project = {
      en: "Project",
      pl: "Projekt",
    };
    const contact_message = {
      en: "Message",
      pl: "Wiadomość",
    };
    const contact_button = {
      en: "Send Message <i class='uil uil-message button__icon'></i>",
      pl: "Wyślij Wiadomość <i class='uil uil-message button__icon'></i>",
    };

    // footer section
    const footer_home = {
      en: "Home",
      pl: "Strona Główna",
    };
    const footer_skills = {
      en: "Skills",
      pl: "Umiejętności",
    };
    const footer_portfolio = {
      en: "Portfolio",
      pl: "Portfolio",
    };
    const footer_blog = {
      en: "Blog",
      pl: "Blog",
    };
    const footer_contact = {
      en: "Contact",
      pl: "Kontakt",
    };
    const legal_ending = {
      en: "&#169; Jan C. Bierowiec <span id='year'></span> All Rights Reserved",
      pl: "&#169; Jan C. Bierowiec <span id='year'></span> Wszelkie Prawa Zastrzeżone",
    };

    document.querySelector("html").setAttribute("lang", lang);

    // navigation
    document.getElementById("navHome").textContent = navHome[lang];
    document.getElementById("navSkills").textContent = navSkills[lang];
    document.getElementById("navPortfolio").textContent = navPortfolio[lang];
    document.getElementById("navContact").textContent = navContact[lang];
    document.getElementById("navLanguage").textContent = navLanguage[lang];
    document.getElementById("naven").textContent = naven[lang];
    document.getElementById("navpl").textContent = navpl[lang];

    // home section
    document.getElementById("description").textContent = descriptions[lang];

    // skills section
    document.getElementById("skills_title").textContent = skills_title[lang];
    document.getElementById("skills_subtitle").textContent =
      skills_subtitle[lang];
    document.getElementById("web_dev").textContent = web_dev[lang];
    document.getElementById("prog_tool").textContent = prog_tool[lang];
    document.getElementById("graph_desgn").textContent = graph_desgn[lang];
    document.getElementById("app_dev").textContent = app_dev[lang];
    document.getElementById("robotics").textContent = robotics[lang];

    // portfolio section
    document.getElementById("portfolio_title").textContent =
      portfolio_title[lang];
    document.getElementById("portfolio_subtitle").textContent =
      portfolio_subtitle[lang];

    document.getElementById("all_filter").textContent = all_filter[lang];
    document.getElementById("web_development_filter").textContent = web_development_filter[lang];
    document.getElementById("web_design_filter").textContent = web_design_filter[lang];
    document.getElementById("app_filter").textContent = app_filter[lang];

    // web development
    document.getElementById("web_development1").textContent =
      web_development1[lang];
    document.getElementById("web_development2").textContent =
      web_development2[lang];
    document.getElementById("web_development3").textContent =
      web_development3[lang];

    // web design
    document.getElementById("web_design1").textContent = web_design1[lang];
    document.getElementById("web_design2").textContent = web_design2[lang];
    document.getElementById("web_design3").textContent = web_design3[lang];

    // app development
    document.getElementById("app1").textContent = app1[lang];
    document.getElementById("app2").textContent = app2[lang];
    document.getElementById("app3").textContent = app3[lang];

    // contact section
    document.getElementById("contact_title").textContent = contact_title[lang];
    document.getElementById("contact_subtitle").textContent =
      contact_subtitle[lang];
    document.getElementById("contact_name").textContent = contact_name[lang];
    document.getElementById("contact_email").textContent = contact_email[lang];
    document.getElementById("contact_project").textContent =
      contact_project[lang];
    document.getElementById("contact_message").textContent =
      contact_message[lang];
    document.getElementById("contact_button").innerHTML = contact_button[lang];

    // footer section
    document.getElementById("footer_home").textContent = footer_home[lang];
    document.getElementById("footer_skills").textContent = footer_skills[lang];
    document.getElementById("footer_portfolio").textContent =
      footer_portfolio[lang];
    document.getElementById("footer_blog").textContent = footer_blog[lang];
    document.getElementById("footer_contact").textContent =
      footer_contact[lang];
    document.getElementById("legal_ending").innerHTML = legal_ending[lang];
    document.getElementById("year").textContent = new Date().getFullYear();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const languageSelector = document.getElementById("navLanguage");
  const languageList = document.getElementById("languageList");
  //const navLanguage = document.getElementById("navLanguage");
  const languageOptions = languageList.querySelectorAll("li");

  languageSelector.addEventListener("click", () => {
    languageList.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!languageSelector.contains(e.target) && !languageList.contains(e.target)) {
      languageList.classList.remove("active");
    }
  });

  // Initially hide the language list
  languageList.style.display = "none";

  // Toggle language list visibility on click
  languageSelector.addEventListener("click", function () {
    if (languageList.style.display === "none") {
      languageList.style.display = "block";
    } else {
      languageList.style.display = "none";
    }
  });

  // Hide language list when a language option is clicked
  languageOptions.forEach(function (option) {
    option.addEventListener("click", function () {
      languageList.style.display = "none";
    });
  });
});

/*
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".portfolio__item");
  const projects = document.querySelectorAll(".portfolio__card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.id.replace("_filter", ""); // Gets the category from the button id

      projects.forEach((project) => {
        if (category === "all" || project.dataset.category === category) {
          project.style.display = "";
        } else {
          project.style.display = "none";
        }
      });
    });
  });
});
*/

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".portfolio__item");
  const projects = document.querySelectorAll(".portfolio__card");

  const categoryMap = {
    all_filter: "all",
    web_development_filter: "web_development",
    web_design_filter: "web_design",
    app_filter: "app",
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = categoryMap[button.id];

      projects.forEach((project) => {
        if (category === "all" || project.dataset.category === category) {
          project.style.display = "";
        } else {
          project.style.display = "none";
        }
      });
    });
  });
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyI7zXIglHx9zAPdcmCJDvYXYDLTC_SglJ3qMV_LjiRha7dqRV0JevuMc5uQZ8kCoru/exec";
const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
