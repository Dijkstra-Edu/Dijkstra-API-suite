<p align="center">
  <a href="[Dijkstra.org](https://dijkstra-edu.github.io/Dijkstra-Web/)">
    <img src="https://github.com/Dijkstra-Edu/Dijkstra/assets/70965472/21723e6d-bea8-4227-bdbb-5306b8c18b1d" alt="Dijkstra">
  </a>
</p>
&nbsp;

<p align="center">
    <a href="https://dijkstra-edu.github.io/Dijkstra-Web/">Dijkstra.org</a> •
    <a href="">Forum</a> •
    <a href="">Docs</a> •
    <a href="https://forms.gle/rAeb5ki3x7LSWU3FA">Contributing</a> •
    <a href="https://www.linkedin.com/company/dijkstra-edu/">LinkedIn</a> •
    <a href="https://discord.com/invite/Vs87cBBU">Discord</a>
    <br /><br />
    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/Dijkstra-Edu/Dijkstra-API-suite?style=social">
    <img alt="npm" src="https://img.shields.io/npm/v/npm">
    <img alt="GitHub last commit (branch)" src="https://img.shields.io/github/last-commit/Dijkstra-Edu/Dijkstra-API-suite/master">
    <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/Dijkstra-Edu/Dijkstra-API-suite">
    <img alt="GitHub" src="https://img.shields.io/github/license/Dijkstra-Edu/Dijkstra-API-suite">
    <img alt="Docker" src="https://img.shields.io/docker/v/jrs296/dijkstra-api/v3?logo=docker">
    <img alt="Azure" src="https://img.shields.io/badge/Azure%20API-UP-blue?logo=microsoftazure&logoColor=blue">
    <img alt="Kubernetes" src="https://img.shields.io/badge/Kubernetes-v1.26.6-purple?logo=kubernetes&logoColor=white">
    <img alt="Server OS" src="https://img.shields.io/badge/Ubuntu%20Server%20OS-Ubuntu%2022.04.3%20LTS-orange?logo=ubuntu&logoColor=white">
</p>

# Dijkstra - A one Stop Solution for all your CompSci educational needs!
  Dijkstra aims to solve developmental gaps within the Student Community of Tier-2 and Tier-3 Colleges in India in the field of Computer Science by: 
 - Bringing students together and creating a community for all who are passionate about learning computer science but are not sure how to go about it. Dijkstras application provides a community that is open-source by nature. It is run by students, for students, and provides a safe space for learning, collaboration, and mentorship, irrespective of who you are. 
 - Defining a clear path to success, be it with improving fundamentals like data structures and algorithms, networks, operating systems, etc. for clearing interviews at big tech companies, Developmental knowledge to be work-ready in the industry and soft skills to get students within the community ready on all fronts for a career in tech. 
 - Building an environment for students to actively hone their developmental skills in real time via the open-source development of Dijstra. Students will be able to get real-time work experience by collaborating on the development of Dijkstra. This would include skills in full-stack development, micro-services development, cloud services, etc. All of which will be made available for students to access and work on. In simple terms, Dijkstra aims to be a one-stop solution for any aspiring CS student to become work-ready  
  
 We're currently looking for passionate students and Open-Source Developers for the following:
- Application Development (MERN stack)
- Web Development (MERN stack)
- Discord Moderators
- UI/UX Designers
- Content Writers
- Educators

If you can help, please do reach out to us! :) Feel free to send a message through this [form link](https://forms.gle/d18JyvktXtr8FBLF7).

&nbsp;

# Development

### Server - Node (Use Version: v18.14.2)

After installing node (see node version), Begin by installing node dependencies.
```bash
npm i 
```

Start server
```bash
npm start
```

Other important tips to note:
```bash
API Creation:
----------------------------------------------------
Controller -> Contains req/res of API
Routers -> Contains route for API (in case of CreatePost, gets variable from controllers/post)
Models -> Conatains DB Schema for API calls
App.js -> Uses API call via app.use() function call (line 10, app.js)
```

Check out our [official documentation]() for more information about our [recommended hosting stack]() & properly [Updating Dijkstra](), plus work with [our API]().

&nbsp;

# TaskList (Things to do)
There's a LOT to be done. Feel free to pick up a task from this TaskList, or try tackling an issue or two from the issues section. Also, feel free to suggest any fixes, features and suggestions. Your ideas shape Dijkstra, and it's potential to impact thousands of students around the world!

### v3.0.0 (Tenative) for Backend
- [ ] - Add Account Name + Icon for Admin
- [ ] - Account Handling (Password Protection for ADMIN)
- [ ] - Handle duplicate image upload for cloud
- [ ] Trash → Place schema to handle Trash
- [ ] Tags Menu (Like Home, but with bubbles for different tags + Search via tags) + Groups Home Screen additions
- [ ] Notification for new featured post
- [ ] Discussion Room (discuss anything related to placements) - Common Questions, topics, further opportunities, Video references, Useful Links
- [ ] User Login + Auth for App accounts
- [ ] Comments → Disqus
- [ ] Share Post as Web Page Snippet - add mailing list as well ig?
- [ ] Certification Bot + Role handlers (To track progress of individual members + AI generated Letters of Recommendation

&nbsp;

# Dijkstra's Gameplan
![Dijkstra-Architecture](https://github.com/Dijkstra-Edu/Dijkstra/assets/70965472/c3966b86-467d-4388-be58-874aa18468f2)

It's still a work in progress, but please feel free to suggest changes, via GitHub [issues](https://github.com/Dijkstra-Edu/Dijkstra/issues).

&nbsp;

# Current Progress

![admin-panel1](https://github.com/Dijkstra-Edu/Dijkstra/assets/70965472/921eae5b-a754-42de-aa37-1f855afe7ec3)
<div align="center"><i>Dijkstra Admin Panel - Home Page</i></div>
<br>

![image](https://github.com/Dijkstra-Edu/Dijkstra/assets/70965472/64483295-8419-457a-bb29-2db8f6f4a659)
<div align="center"><i>Dijkstra Admin Panel - Create Post</i></div>
<br>

<p style="padding: 5;" align="center">
  <picture><img style="padding: 5;" alt="Splash Screen" src="https://github.com/Dijkstra-Edu/Dijkstra-Monolith/assets/70965472/f4b7c548-a6c5-4a6c-ab27-c3a47d4c20f9" width="30%"></picture>
  <picture><img style="padding: 5;" alt="Home" src="https://github.com/Dijkstra-Edu/Dijkstra-Monolith/assets/70965472/759fe05f-9735-4e30-9b3d-afab63cf6f26" width="30%"></picture>
  <picture><img style="padding: 5;" alt="About Us" src="https://github.com/Dijkstra-Edu/Dijkstra-Monolith/assets/70965472/9045fad1-f078-4caa-99da-73ba88a0e437" width="30%"></picture>
</p>
<div align="center"><i>Splash Screen, Home Screen, About Us Screen</i></div>

&nbsp;

# Community

You can better engage with Dijkstra's community via the following avenues:
- Discord: [https://discord.com/invite/Vs87cBBU](https://discord.com/invite/Vs87cBBU)
- Tell us about yourself: Feel free to fill up this [form](https://forms.gle/rAeb5ki3x7LSWU3FA).
- Join Dijkstra: Click this [link](https://forms.gle/rAeb5ki3x7LSWU3FA) to join Dijkstra's GitHub Organization.

&nbsp;

# Acknowledgements

Shoutouts to all these people and companies that make Dijkstra possible:
- [MLSA](https://studentambassadors.microsoft.com/en-US/studentambassadors/profile/659128e7-9e57-4de9-a787-652411a526e0) - For providing Credits for Dijkstra's Transition to Azure.
- [Full Stack Niraj](https://www.youtube.com/@fsniraj) - Youtube Channel for support on building this application.
- [Canva](https://www.canva.com/) - For Design needs
- [Hotspot Ai](https://hotpot.ai/) - Splash Screens

&nbsp;

<!-- # Getting help

(WIP)

&nbsp; -->

# Copyright & license

Copyright (c) 2023 JRS Studios - Released under the [MIT license](LICENSE). Dijkstra and the Dijkstra Logo are trademarks of JRS Studios Ltd. 
