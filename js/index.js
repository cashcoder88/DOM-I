const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse veltempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
//let logo = document.getElementById("logo-img");
//logo.setAttribute('src', siteContent["nav"]["img-src"])

// Task 1 Create Selectors To Point Data Into Elements

// Footer

let footerDom = document.querySelector('footer p').textContent = siteContent.footer.copyright;

//// Contact 

let contactDom = document.querySelector('.contact');
contactDom.querySelector('h4').textContent = siteContent.contact["contact-h4"];

let contactPDom = contactDom.querySelectorAll('p');

contactPDom[0].textContent = siteContent.contact.address;
contactPDom[1].textContent = siteContent.contact.phone;
contactPDom[2].textContent = siteContent.contact.email;

// Middle Content

let textContentDivDom = document.querySelectorAll('.text-content')

//IS THERE A BETTER WAY TO DO THIS?? Doesn't Seem DRY
textContentDivDom[0].querySelector('h4').textContent = siteContent["main-content"]["features-h4"];
textContentDivDom[0].querySelector('p').textContent = siteContent["main-content"]["features-content"];
textContentDivDom[1].querySelector('h4').textContent = siteContent["main-content"]["about-h4"];
textContentDivDom[1].querySelector('p').textContent = siteContent["main-content"]["about-content"];
textContentDivDom[2].querySelector('h4').textContent = siteContent["main-content"]["services-h4"];
textContentDivDom[2].querySelector('p').textContent = siteContent["main-content"]["services-content"];
textContentDivDom[3].querySelector('h4').textContent = siteContent["main-content"]["product-h4"];
textContentDivDom[3].querySelector('p').textContent = siteContent["main-content"]["product-content"];
textContentDivDom[4].querySelector('h4').textContent = siteContent["main-content"]["vision-h4"];
textContentDivDom[4].querySelector('p').textContent = siteContent["main-content"]["vision-content"];


let middleImgDom = document.getElementById("middle-img");
middleImgDom.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// CTA 

let ctaH1Dom = document.querySelector('.cta-text h1').textContent = siteContent.cta.h1;

let ctaButtonDom = document.querySelector('.cta-text button').textContent = siteContent.cta.button;

let ctaImgDom = document.getElementById('cta-img');
ctaImgDom.setAttribute('src', siteContent.cta["img-src"]);

// Navigation 

let logoDom = document.getElementById("logo-img");
logoDom.setAttribute('src', siteContent["nav"]["img-src"]);

let navDom = document.querySelectorAll('a');
for (let i = 0; i < navDom.length; i++) {
    navDom[i].textContent = siteContent.nav[`nav-item-${i+1}`];
}

