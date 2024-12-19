# MERN Product Market

A fully functional product marketplace built using the **MERN stack** (MongoDB, Express.js, React, and Node.js). This application allows users to manage products, including viewing, adding, editing, and deleting items. It leverages a responsive design, intuitive UI, and backend integration for seamless user experience.

---

## Features

- **Frontend**: Built with React, utilizing Chakra UI for a sleek and responsive design.
- **Backend**: Powered by Express.js and Node.js, ensuring efficient API handling.
- **Database**: MongoDB Atlas for secure and scalable data storage.
- **CRUD Operations**: Full control over product data (Create, Read, Update, Delete).
- **Error Handling**: User-friendly feedback with `react-hot-toast` notifications.
- **State Management**: Integrated with a custom product store.
- **Theming**: Light and dark mode support using `useColorModeValue`.

---

## Tech Stack

### Frontend:

- React
- Chakra UI
- React Modal
- Vite for blazing-fast development

### Backend:

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose for schema modeling

---

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/MERN_product_market.git
   cd MERN_product_market
   ```

2. Install dependencies for the backend:

   ```bash
   npm install
   ```

3. Install dependencies for the frontend:

   ```bash
   cd FrontEnd
   npm install
   ```

4. Set up environment variables:

   - Create a `.env` file in the `BackEnd` folder and add the following:
     ```
     PORT=5000
     MONGO_URI=your-mongodb-connection-string
     ```

5. Build the frontend:

   ```bash
   cd FrontEnd
   npm run build
   ```

6. Start the application:
   ```bash
   npm start
   ```

---

## Directory Structure

```
MERN_product_market/
├── BackEnd/          # Express.js server and API logic
├── FrontEnd/         # React app (Frontend)
│   ├── src/          # Source files for React
│   ├── dist/         # Built production files
│   └── public/       # Static assets
├── package.json      # Backend dependencies and scripts
└── README.md         # Documentation
```

---

## Scripts

- **Development Mode**: `npm run dev`
- **Production Build**: `npm run build`
- **Start Server**: `npm start`

---

## Contributions

Contributions are welcome! Please fork the repository and submit a pull request with your updates.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author

Made with ❤️ by **Mustapha Bouddahr**.

```

```
