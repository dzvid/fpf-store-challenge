<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/dzvid/fpf-store-challenge">
    <img src="frontend/src/assets/img/logo.svg" alt="Logo" width="200" height="50">
  </a>

  <h3 align="center">FPF Store</h3>

  <p align="center">
    Frontend module
    <br />
    <!-- <a href="https://github.com/dzvid/fpf-store-challenge"><strong>Explore the docs »</strong></a> -->
    <!-- <br />
    <br /> -->
    <!-- <a href="https://fpf-store.netlify.com/">View Demo</a> -->
    ·
    <a href="https://github.com/dzvid/fpf-store-challenge/issues">Report a bug</a>
    ·
    <a href="https://github.com/dzvid/fpf-store-challenge/issues">Request a feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Frontend Developed](#frontend-developed)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Development environment setup](#development-environment-setup)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

This application was built as a challenge for a junior frontend developer position at FPF Tech. 
The challenge consisted of building a web application to manage products of an e-commerce store.
The frontend application should allow an user to:
- List all products registered on the system;
- Add a new product;
- Update details of a product;
- Delete a product, showing a dialog to confirm that the user really wants to delete it.
- Extra features: On the products list screen, allows an user to search products by name.

Development technologies required to be used by the challenge: 
- Frontend Frameworks: Vue.js or Angular;
- Github for code versioning.

Business rules:
- All fields are required. 

<br />

### Frontend Developed

The following images show the features implemented in the frontend module: 

<div style="width: 45%; height: auto; margin: 0 auto;">

<p>List products</p>

![FPFStore][product-screenshot-list]

</br>

<p>Add a new product</p>

![FPFStore][product-screenshot-add-new]

</br>

<p>Edit a product</p>

![FPFStore][product-screenshot-edit]

</br>

<p>Delete a product</p>

![FPFStore][product-screenshot-delete]

</br>

</div>

### Built With

Main libraries and CLI tools used to built the project:

- [Vue.js](https://vuejs.org): Frontend JavaScript framework for building user interfaces and single-page applications.
- [Vuex](https://vuex.vuejs.org): A state management pattern + library for Vue.js applications;
- [Vuetify](https://vuetifyjs.com): A Vue UI library that implements Material Design;
- [Axios](https://github.com/axios/axios): Library to handle http requests;

IDE and tools to manage coding style:
- [VSCode](https://code.visualstudio.com/)
- [ESLint](https://github.com/eslint/eslint)
- [Prettier](https://github.com/prettier/prettier)
- [EditorConfig](https://editorconfig.org/)
- [Vetur](https://github.com/vuejs/vetur)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these steps:

### Prerequisites
Install Git:
- [git](https://git-scm.com/)

Install NodeJS:
- [node](https://nodejs.org/en/)

Install a package manager for node:

- [yarn](https://classic.yarnpkg.com/lang/en/): Yarn 1.22.5 (classic) was used in this project.

or

- npm (default node package manager)

### Development environment setup
Obs: The following commands were executed in a Ubuntu 18.04 system.

1. Clone project repository from Github:

  ```sh
  Using https, in a terminal run:
  git clone https://github.com/dzvid/fpf-store-challenge.git

  Or using ssh, in a terminal run:
  git clone git@github.com:dzvid/fpf-store-challenge.git
  ```

1. Setup and run the mock backend, open a terminal in the project root directory to execute following instructions:
    - Enter in the mock backend module directory, run:
      ```sh
      cd backend
      ```
    - Install mock backend dependencies, run:
      
      Using yarn:
      ```sh
      yarn
      ```

      Using npm:
      ```sh
      npm install
      ```
    - Execute mock backend and keep it running in a dedicated terminal window/tab, run (if the port 3000 is being used, change to another free port passing the new value to `-p` flag.):
 
      Using yarn:
      ```sh
      yarn json-server --watch db.json --host localhost -p 3000
      ```

      Or without a package manager:
      ```sh
      node_modules/json-server/lib/cli/bin.js --watch db.json --host localhost -p 3000
      ```
   

2. Setup and run frontend module, open a terminal in the project root directory to execute following instructions:
    - Enter in the frontend module directory, run:
      ```sh
      cd frontend
      ```
    - Install frontend dependencies, run:
      
      Using yarn:
      ```sh
      yarn
      ```

      Using npm:
      ```sh
      npm install
      ```

    - Setup development environment variables. Create an `.env` file, use the `.env.example` as an template, it has two variables `VUE_APP_NAME` (App name show in browser tab) and `VUE_APP_API_BASE_URL`, run following commands:
      
      ```sh
      cp .env.example .env 
      ```
      Open the `.env` file in your favorite editor. By default, it has the following values: 
      ```sh
      VUE_APP_NAME=FPF Store
      VUE_APP_API_BASE_URL=http://localhost:3000
      ```
      If port 3000 is in use, change `VUE_APP_API_BASE_URL` to match the port configured during mock backend setup in step 1, otherwise, keep the `.env` file as is.

    - Start the development server, run:
      
      Using yarn:
      ```sh
      yarn serve
      ```

      Or using npm:
      ```sh
      npm run serve
      ```

    You can now view `FPF Store` frontend module in the browser at: `http://localhost:8080/` (or in other url shown in terminal).

3. You are done with configuration and ready to code! (I hope so :tada:).

<!-- USAGE EXAMPLES -->

<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_ -->

<!-- ROADMAP -->

<!-- ## Roadmap

See the [open issues](https://github.com/dzvid/fpf-store-challenge/issues) for a list of proposed features (and known issues). -->

<!-- CONTACT -->

## Contact

David Oliveira - oliveiradavid.dev@gmail.com

Project Link: [https://github.com/dzvid/fpf-store-challenge](https://github.com/dzvid/fpf-store-challenge)

<!-- ACKNOWLEDGEMENTS -->

<!-- ## Acknowledgements

- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
- [Choose an Open Source License](https://choosealicense.com)
- [Img Shields](https://shields.io) -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/dzvid/fpf-store-challenge.svg?style=flat-square
[contributors-url]: https://github.com/dzvid/fpf-store-challenge/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dzvid/fpf-store-challenge.svg?style=flat-square
[forks-url]: https://github.com/dzvid/fpf-store-challenge/network/members
[stars-shield]: https://img.shields.io/github/stars/dzvid/fpf-store-challenge.svg?style=flat-square
[stars-url]: https://github.com/dzvid/fpf-store-challenge/stargazers
[issues-shield]: https://img.shields.io/github/issues/dzvid/fpf-store-challenge.svg?style=flat-square
[issues-url]: https://github.com/dzvid/fpf-store-challenge/issues
[license-shield]: https://img.shields.io/github/license/dzvid/fpf-store-challenge.svg?style=flat-square
[license-url]: https://github.com/dzvid/fpf-store-challenge/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/dzvid
[product-screenshot-list]: frontend/src/assets/screenshots/product-list.png
[product-screenshot-add-new]: frontend/src/assets/screenshots/product-add-new.png
[product-screenshot-edit]: frontend/src/assets/screenshots/product-edit.png
[product-screenshot-delete]: frontend/src/assets/screenshots/product-delete.png
