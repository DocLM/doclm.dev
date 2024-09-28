---
title: "About this blog"
date: 2024-09-01
description: "About this blog and it's tech stack."
tags: ["hugo", "markdown", "css", "javascript", "blog"]
categories: []
---

Hello there! This is my first blog post, and this space is where I'll be sharing my thoughts, experiences, and discoveries in the world of technology.

But since this is a tech blog, let's go straight to the point: **What's under the hood of this website?**

## Table of Contents:
- [The Foundation: Hugo Framework](#the-foundation-hugo-framework)
- [Customizations: Congo Theme and other tricks](#customizations-congo-theme-and-other-tricks)
- [Global Deployment: GitHub Pages and Cloudflare](#global-deployment-github-pages-and-cloudflare)

## The Foundation: Hugo Framework
Hugo is a powerful framework written in Go and one of the most popular static site generators available today.

This means that this website doesn't have dynamic pages or a database storing the information you're reading. All content is generated upfront from a combination of Markdown files for articles/content pages and a set of HTML template files.

The result of this process is a traditional website folder with all the HTML, CSS, and JavaScript files that compose the site. If the lack of dynamic pages fits your use case, a static site generator can dramatically reduce the complexity of your stack because the only thing you need is a simple web server to host these files.

## Customizations: Congo Theme and other tricks
Just like a house, you need some personal touches and tweaks to make it your home.

The style of this site is based on a powerful theme made for Hugo: [Congo by jpanther](https://github.com/jpanther/congo). This theme is built on top of some of the latest web technologies, like the [Tailwind CSS](https://tailwindcss.com/) framework, and offers a robust set of built-in features such as multilanguage support and integrated search.

On this site, you'll also find some easter eggs from time to time. One example is the terminal-like animation inspired by [this article from Codrops](https://tympanus.net/codrops/2024/06/19/hover-animations-for-terminal-like-typography/).

## Global Deployment: GitHub Pages and Cloudflare
The final step in this journey is finding a home for the website.
I chose to host the site on GitHub Pages due to it's simplicity and the excellent automation that can be achieved through GitHub Actions. This allows for seamless updates and deployments whenever changes are pushed to the repository.
To further enhance the site's performance and reduce the load on the origin server, I've placed it behind Cloudflare's content delivery network (CDN) and gained some benefits:
- Improved performance: Cloudflare's global network helps serve content faster to visitors worldwide.
- Enhanced caching: Static content is cached at the edge, reducing load times for same zone visitors.
- Additional security: Cloudflare offers protection against various online threats, including DDoS attacks.

This combination of GitHub Pages and Cloudflare creates a robust, scalable, and high-performance hosting solution for this static website, all while keeping costs minimal.