---
templateKey: blog
title: The Tech Stack Powering This Website
date: 2024-08-27T19:59:00.000Z
description: The technologies and tools I used to build my personal website.
tags:
  - Jamstack
  - GatsbyJS
  - React
  - NetlifyCMS
  - Styled Components
---
Hi, I'm Max Bibikov, a full-stack software developer. In this article I'll discuss the technologies I used to build this website.

When planning my personal website, I had the following requirements in mind:  

* Display a brief introduction about myself
* Provide visitors with multiple ways to contact me (via email, social links, or a contact form)
* Showcase some of my projects 
* Enable me to write technology-related blog posts
* Ensure the site is fast, accessible, and responsive

I decided to use the [Jamstack](https://jamstack.org/) architecture, which decouples the web experience layer from data and business logic. This approach enhances flexibility, scalability, performance, and maintainability, allowing me to build a static website without being dependent on a web server. Static websites are fast and can fulfill all the functional requirements for my site.

The Jamstack can consist of a variety of tools, so I needed to select the right ones for my project. After some research and based on my experience with static site generators,  I chose [GatsbyJS](https://www.gatsbyjs.org/). Gatsby is [React](https://reactjs.org/)-based, fast, offers many useful plugins, and has good documentation and an active community. However it requires some knowledge of GraphQL, as Gatsby uses it as an additional layer for data access. 

The website content (blog posts and projects) is managed with [DecapCMS](https://decapcms.org/docs) (formerly  NetlifyCMS) and stored alongside the source code in a Git repository. I chose [Netlify](https://www.netlify.com/) platform for hosting because it's fast, reliable, easy to setup and offers automatic builds and deploy  previews whenever changes are pushed to the Git repository.
