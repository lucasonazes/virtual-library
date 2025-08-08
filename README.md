# Virtual Library

 Virtual Library is a web application built with React. It allows users to search for books, view the latest releases, and manage their list of favorite books.

---

## 🚀 Features

- **Book Search:** Find books by name using the search bar.
- **Latest Releases:** View a curated list of the newest books.
- **Favorites:** Add books to your favorites and manage your favorite list.
- **Responsive Design:** Styled with `styled-components` for a modern look.
- **Routing:** Navigate between pages using React Router.

---

## 🏗️ Project Structure

```
public/
  index.html
src/
  index.js
  components/
    Card/
    Header/
    Input/
    Releases/
    Search/
    Title/
  images/
  pages/
    Favorites.js
    Home.js
  services/
    books.js
    favorites.js
```

---

## 📋 Requirements
- Node.js (v16 or higher recommended)
- npm

---

## ⚡ Getting Started

### Install dependencies

1. Clone the repository.
2. Run `npm install` to install dependencies.

### Running the Server

```sh
npm start
```

### Backend API

This project expects a backend API running at `http://localhost:8000` with endpoints for `/books` and `/favorites`. Make sure to start the backend server before using the app.

---

## 📦 Scripts

- `npm start` - Runs the app in development mode.
- `npm run build` - Builds the app for production.
- `npm test` - Runs tests.

---

## 🔗 Dependencies

- React
- React Router DOM
- Styled Components
- Axios

---

## 📝 License

This project is licensed under the MIT License.
