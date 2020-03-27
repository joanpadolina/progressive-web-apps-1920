# Progressive web-apps WAFS
<img src="./readme_assets/screen1.png" >

## Table of contents

1. **[Introduction](#introduction)**
1. **[Installation](#installation)**
1. **[Npm list](#npm-list)**
1. **[Learning Goals](#learning-goals)**
1. **[To-do-list](#to-do-list)**
1. **[Performance](#performance)**
1. **[Features](#features)**
1. **[Credits](#credits)**


## Introduction

This course is about converting a client side web application to a server side web app. Doing so will create a progressive web-app which won't depend on javascript. The reason for this change is to make the app faster and reliable for every device.

## Installation

**1. Clone Project**
```
git clone https://github.com/joanpadolina/progressive-web-apps-1920.git
```

**2. Install packages**

```
npm instal
```

**3. Start server**

```
npm run start
```

**4. Browser**

In your browser type in the url:
``localhost:3000``

## [Dependencies](https://github.com/joanpadolina/progressive-web-apps-1920/wiki/Dependencies)
For a detailed view on the dependencies please read the following link about this in the [wiki](https://github.com/joanpadolina/progressive-web-apps-1920/wiki/Dependencies).

1. EJS 
1. Node
1. Express
1. Node-fetch
1. dotenv
1. Gulp
1. Manifest
1. Service Worker
1. Heroku



## Learning goals

* **Know the difference between Client side and Server side rendering**

Web application are fun and games until it starts depending on things where you've no control of. This can be the internet speed or devices and browser. 
If most application are rendered through a server you won't exclude users from interacting with the main goal of the application.

<hr>

* **What is a Service Worker and how can I implement this in the application**

A service worker is a vague concept I'm still struggling to get the hang of it. This because why would you want to cache somethings or why it won't overload the browser.
The main struggle was to test this via browser. The data I tried to get either non existing or it does exist but on different browser.

*It is vague as it sounds, need to update this content*


<hr>

* **Understand how the critical render path works and how to optimize it for a better runtime and/or perceived performance**

<hr>

* **Building**

On the other note I tried building CSS with gulp which was process I've never thought would take this long. It's was hard to understand or select folders in npm scripts. But in the end with help from Declans code and stackoverflow it works for now. The main thing I've learned are the script for prestart and poststart. I struggled a few times about why things weren't building in the logical order. But I found out that using prestart twice is not gonna help the process. And my mind went "Isn't there something like poststart" and began typing this. Me being amaze this thing worked like wanted made me giggle and happy. And all the frustration about why things won't work dissapeared.

## To-do-list
* ~~WAFS app to server side rendering~~ :white_check_mark:
* ~~Use EJS for templating~~ :white_check_mark:
* ~~Render overview and detail page~~ :white_check_mark:
* ~~Use tooling via npm or gulp~~ :white_check_mark:
* ~~Add a manifesto~~ :white_check_mark:
* ~~Add service worker~~
* Create a working registration *extra
* ~~Deploy (on heroku)~~ :white_check_mark:

## Performance

At first sight the perfomance looked like this. Application is not as big as others so it was not shocking to see what the results where.

<img src="/readme_assets/performance/chromedev.png">

So this application had some issues with Accessebilty, Best Performance and the SEO. Let the digging begin..

__For accessebilty I've change a few things__

* Alt Tag in images

Well didn't know this but it drastically change after adding alt-tags.

* Contrast Text

Some of the colors of the text didn't have the best contrast if you're looking at the background. With the devTools in chrome the perfect ammount of color was an easy fix.
<img width="160em" src="/readme_assets/colorcertified.png">

+ Double Id

It's common knowledge that Id's are unique so don't forget to stay in this rule otherwise Lighthouse is going to pick this up and your application is less accessible.


__Best perfomance__

I was not sure what the error was telling me. Lighthouse mentioned something abour requesting from Http instead of Http/2.
After some reseach HTTP2 was basically faster than the previous one which will me the app faster, I guess? So I tried this out.

What you'll need is package that handles HTTP2 and some `certifications` which are **server.key** and **server.crt**. Well I'm not a genius so googling bunch of thing what you'll do in the terminal.

Followed this tutorial by [Azat Mardan](https://webapplog.com/http2-node/).

But it did gave a lot of errors which had to be cheated out because Chrome didn't allow any suspicious link without SSL certification.

__So..__

After going back and forth with this, it ended up putting the certicaten in Google Chrome which makes it "trusted" and placing this :

`/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --user-data-dir=/tmp/foo --ignore-certificate-errors --unsafely-treat-insecure-origin-as-secure=https://localhost:3000`

in the terminal which will open Google Canery and tadaá things worked.

Ran the Lighthouse once more and:

<img src="/readme_assets/performance/perfomance2.png">

The weird part is maybe that there was no need to touch the SEO.

## Features

A few new features for the applicatin I want to work with.

1. **Read later**

Store a story in the localstorage and render this to a page.

2. **Login**

Register for an account where *read later* can be seen.

3. **Search**

Search for categories from the news API.

## Credits

Mikael - Service worker
Lien - Heroku deploy


<!-- # Progressive Web Apps @cmda-minor-web · 2019-2020

In this course we will convert the client side web application previously made at the OBA into a server side rendered application. We also add functionalities based on the Service Worker and turn the application into a Progressive Web App. Ultimately we are going to implement a series of optimisations to improve the performance of the application.  

## Learning goals
- _You understand the difference between client side and server side rendering and you can apply server side rendering
in your application_
- _You understand how a Service Worker works and you can implement it in your application._
- _You understand how the critical render path works and how you can optimize it for a better runtime and / or perceived performance._

[Rubric](https://docs.google.com/spreadsheets/d/e/2PACX-1vSc48v1nrjcwH0llcTd68xyK7f2fDC2UL4d6h4ZNW3DU8ucez6ZOHiId1XSX0RP5ByvLC8p5pVUGZT4/pubhtml)

## Program

### Week 1 - Server Side Rendering 📡

Goal: Render web pages server side

[Exercises](https://github.com/cmda-minor-web/progressive-web-apps-1920/blob/master/course/week-1.md)  
[Slides](...)  
[The Web landscape](...)  


### Week 2 - Progressive Web App 🚀

Goals: Convert application to a Progressive Web App

[Opdrachten](https://github.com/cmda-minor-web/progressive-web-apps-1920/blob/master/course/week-2.md)  
[Slides](...)


### Week 2 - Critical Rendering Path 📉 

Doel: Optimize the Critical Rendering Path   
[Opdrachten](https://github.com/cmda-minor-web/progressive-web-apps-1920/blob/master/course/week-3.md)  
[Slides](...)


<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
