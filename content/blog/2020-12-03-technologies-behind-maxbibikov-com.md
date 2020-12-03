---
templateKey: blog
title: Technologies behind maxbibikov.com
date: 2020-06-11T06:59:56.279Z
description: What technologies and tools I used to build my personal website
tags:
  - Jamstack
  - GatsbyJS
  - React
  - NetlifyCMS
  - Styled Components
---
Hi, I am Max Bibikov, full stack software developer. This is my first article, where i'll tell about technologies I used to build this website.

Main requirements for my personal website:  

* show short info about me
* ability for visitors to contact me through social links or form
* showcase some of my projects 
* be able to write technology-related blog posts
* must be fast, accessible and responsive

I decided to use [Jamstack](https://jamstack.org/) architecture, which is a modern way of building static websites without being dependent on a web server. Static websites are fast and can provide all functionality required for my website.

Jamstack could consist of variety of tools and we need to pick them. After some research and my own brief experience with static site generators,  I decided to use [GatsbyJS](https://www.gatsbyjs.org/). It's based on [React](https://reactjs.org/), it's fast, has many useful plugins, decent documentation and active community. But you need to know some GraphQL, because Gatsby uses it as an additional layer for data access. 

Website content (blog posts and projects) is managed with [Netlify CMS](https://www.netlifycms.org/) and stored alongside source code in Git repository.

[Netlify](https://www.netlify.com/) platform works well for hosting, it's fast, reliable, easy to setup and has automatic builds and deploy  previews on push changes to Git repository.

This was a quick introduction about technologies behind this website.