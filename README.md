
# Vue.js Fetch 'n' Cache Application

<p align="center">
  <img alt="App Screenshot" src="https://github.com/user-attachments/assets/eb3221f7-63e8-431e-b31a-41aa0419b5c9" width="600">
</p>


## Overview

This is a basic "Fetch 'n' Cache" application built with Vue.js that allows users to search for and display Rick and Morty characters. The key features include:

- Fetch character data by entering a numeric ID
- Cache fetched character data in memory to avoid redundant AJAX requests
- Display a list of cached characters on the right side of the page
- Allow users to click on a cached character to display it
- Highlight the selected character in the cached list

  
## Deployment
The application is deployed and available at: https://rick-n-morty-vue.vercel.app/

## Development

### Installation

To install the application, run the following command:

```
npm install
```

### Usage

To start the development server, use the following command:

```
npm run dev
```

This will start the development server and open the application in your default browser.

To build the application for production, use the following command:

```
npm run build
```

This will generate a production-ready build in the `dist` folder.

To preview the production build, use the following command:

```
npm run preview
```

This will start a local server and open the production build in your default browser.

## API Reference

The application provides the following API endpoint:

```
GET /api/characters/:id
```

This endpoint fetches a character with the specified `id` from the Rick and Morty API.
