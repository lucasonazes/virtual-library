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

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/alura-books.git
   cd alura-books
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

4. Open [http://localhost:3000] in your browser.

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
