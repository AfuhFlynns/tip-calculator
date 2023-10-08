# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./desktop view Functional.jpg),(./Mobile view Functional.jpg)


### Links
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Js
### What I learned
 I lerned how to perform click events that passe in values to a Function that can be used in the function only.
 numberFifteen.onclick = function () {
    const performOnething = ()=>{
        numberFifty.style.backgroundColor = "hsl(183, 100%, 15%)";
        numberFifty.style.color = "white";
        numberFive.style.backgroundColor = "hsl(183, 100%, 15%)";
        numberFive.style.color = "white";
        numberTen.style.backgroundColor = "hsl(183, 100%, 15%)";
        numberFifteen.style.backgroundColor = "hsl(172, 67%, 45%)";
        numberFifteen.style.color = "hsl(183, 100%, 15%)";
        numberTen.style.color = "white";
        numberTwentiF.style.backgroundColor = "hsl(183, 100%, 15%)";
        numberTwentiF.style.color = "white";

        Reset.style.backgroundColor = "hsl(183, 98%, 20%)";
    }
      performOnething();
  if (numberOfPeople > 0) {
    performCalcs(15);
    Errors.style.display = "none";
    numOfP.style.borderColor = "";
  } else {
    Errors.style.display = "block";
    numOfP.style.borderColor = "red";
  }
};


### Continued development
I want to foucs more on building platforms for mobile devices and native desktop platforms And I intend to learn backend development so I can use it for my projects and more.


## Author

- Website - [Afuh Flynn's Tembeng](https://www.your-site.com)
- Frontend Mentor - [@AfuhFlynns](https://www.frontendmentor.io/profile/AfuhFlynns)
- Twitter - [@afuhFlynn_s](https://www.twitter.com/afuhFlynns_s)
