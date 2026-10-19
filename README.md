# Exploring Server-Side Rendering (SSR) with Next.js

## Objective
The objective of this project is to understand Server-Side Rendering (SSR) and compare it with Client-Side Rendering (CSR) and Static Site Generation (SSG).

## Technologies Used
- Next.js
- React
- JavaScript
- JSONPlaceholder API
- Official Joke API

## Project Pages

### 1. Basic SSR
The `basic-ssr.js` page fetches a random joke from an API and displays it on the page.

### 2. SSR Page
The `ssr.js` page fetches a post from the API on the server and displays its title and body.

### 3. CSR Page
The `csr.js` page fetches data in the browser using `useEffect` and `useState`. A loading message appears while the data is being fetched.

### 4. SSG Page
The `ssg.js` page uses `getStaticProps` to fetch data at build time and generate a static page.

### 5. Dynamic SSR Page
The `pages/ssr/[id].js` page fetches a post according to the ID in the URL.

Example URLs:
- `/ssr/1`
- `/ssr/2`
- `/ssr/3`

Each URL displays a different post.

## Performance Comparison

- **SSR:** Fetches data on every request. Suitable for pages that need fresh data.
- **CSR:** Fetches data in the browser after the page starts loading. Suitable for interactive applications.
- **SSG:** Generates pages at build time. Suitable for blogs and documentation.

## How to Run the Project

1. Install Node.js.
2. Open the project folder in the terminal.
3. Install the dependencies by running `npm install`.
4. Start the development server using `npm run dev`.
5. Open `http://localhost:3000` in your browser.

## Conclusion
This project demonstrates how SSR, CSR, and SSG work in Next.js. It also demonstrates dynamic routing by fetching different posts using their IDs.