# 🏥 MedForAll  -- Full-Stack Medicine Delivery Website

A complete Medicine Ordering Website built using **React.js, MongoDB, Express.js, Node.js, and Stripe**. This full-stack web application allows users to browse medicines, add them to the cart, and place orders with **secure online payments via Stripe**. It also includes an **admin panel** for managing orders and inventory.

---

## 🚀 Features

### 🛒 User Features:
- **User Authentication**: Sign up, login, and logout functionality.
- **Medicine Browsing**: View a catalog of available medicines.
- **Shopping Cart**: Add medicines to the cart before purchasing.
- **Secure Payments**: Integrated with **Stripe** for online transactions.
- **Order Tracking**: Users can check the status of their orders.
- **Responsive UI**: Optimized for both desktop and mobile.

### 🛠 Admin Panel:
- **Manage Products**: Add, edit, or remove medicines.
- **Order Management**: Update order status (Pending, Shipped, Delivered, etc.).
  
---

## 🏗 Tech Stack

### **Frontend:**
- React.js (Vite)
- React Router
- Redux (for state management)
- Tailwind CSS / Bootstrap (for styling)

### **Backend:**
- Node.js
- Express.js
- MongoDB (with Mongoose for ODM)

### **Other Integrations:**
- Stripe (for payments)

---

## 📌 Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/medicine-delivery.git
cd medicine-delivery
```

### 2️⃣ Install Dependencies
#### Install Admin Dependencies:
```sh
cd admin
npm install
```

#### Install Frontend Dependencies:
```sh
cd frontend
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the `backend` directory and add the following:
```env
MONGO_URI=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
```

---

## 🔥 Running the Project

### Start Backend Server:
```sh
cd backend
npm run server
```

### Start Frontend Server (Vite):
```sh
cd frontend
npm run dev
```

### Start Admin Server (Vite):
```sh
cd admin
npm run dev
```

---

## 📜 API Endpoints
### **User Authentication**
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### **Medicine Management**
- `GET /api/medicines` - Fetch all medicines
- `POST /api/medicines` - Add new medicine (Admin only)

### **Cart & Orders**
- `POST /api/cart/add` - Add medicine to cart
- `POST /api/orders/create` - Place an order
- `GET /api/orders/:userId` - Get user orders

---

## 💡 Future Improvements

- Implement **email notifications**
- Allow users to **upload prescriptions**

---

## 🤝 Contributing
Feel free to fork this repository and submit a pull request. Any contributions are welcome! 🚀

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 📬 Contact
For any questions or suggestions, reach out to me at  [LinkedIn](https://www.linkedin.com/in/vinod-kuril-6398b5220/).

