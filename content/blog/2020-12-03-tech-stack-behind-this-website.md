---
templateKey: blog
title: The Tech Stack Behind This Website
date: 2022-12-03T14:00:00.000Z
description: The technologies and tools I used to build my personal website.
tags:
  - Jamstack
  - GatsbyJS
  - React
  - DecapCMS
  - Styled Components
---
Hi, I'm Max Bibikov, a full-stack software developer. In this article I'll discuss the technologies I used to build this website.

When planning my personal website, I had the following requirements in mind:  

* Display a brief introduction about myself
* Provide visitors with multiple ways to contact me (via email, social links, or a contact form)
* Showcase some of my projects 
* Enable me to write technology-related blog posts
* Ensure the site is fast, accessible, and responsive

I decided to use the [Jamstack](https://jamstack.org/) architecture, which decouples the web experience layer from data and business logic. This approach enhances flexibility, scalability, performance, and maintainability, allowing me to build and host a static website without relying on a dedicated web server. Static websites are fast and can fulfill all the functional requirements for my site.

The Jamstack can consist of a variety of tools, so I needed to select the right ones for my project. After some research and based on my experience with static site generators,  I chose [GatsbyJS](https://www.gatsbyjs.org/). Gatsby is [React](https://reactjs.org/)-based, fast, offers many useful plugins, and has good documentation and an active community. However, it requires some knowledge of GraphQL, as Gatsby uses it as an additional layer for data access. 

To handle the styling of my website, I opted for styled-components. This approach aligns with my use of React, as styled-components offer a natural way to style React components. The benefits include improved code organization, easier theming, and dynamic styling capabilities, all of which contribute to a more efficient development process and a more consistent and visually appealing website.

The website content (blog posts and projects) is managed with [Decap CMS](https://decapcms.org/docs) (formerly  Netlify CMS) and stored alongside the source code in a Git repository. I chose the [Netlify](https://www.netlify.com/) platform for hosting because it's fast, reliable, easy to setup and offers automatic builds and deploy  previews whenever changes are pushed to the Git repository.
