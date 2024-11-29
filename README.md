# Role-Based Access Control (RBAC) System

This project is a **Role-Based Access Control (RBAC)** system that implements **Authentication**, **Authorization**, and user management based on assigned roles. It includes an admin panel, a moderator panel, and a user dashboard with secure access control based on predefined permissions.

---

## **Features**

### **Authentication**
- Users can **register**, **log in**, and **log out** securely.
- Secure session management using **JWT** (JSON Web Tokens).
- Passwords are securely hashed using **bcrypt**.

### **Authorization**
- **Role-Based Access Control (RBAC)** determines what resources users can access.
- **Roles and Permissions**:
  - **Admin**:
    - Create users with any role.
    - Update user details.
    - Delete users.
    - View information of all users.
  - **Moderator**:
    - Create users with only the "User" role.
    - View user information (excluding admins).
  - **User**:
    - Log in and view their own profile.

### **Security**
- Implements security best practices:
  - Password hashing with **bcrypt**.
  - Token-based authentication using **JWT**.
  - Endpoint protection to prevent unauthorized access.

### **Usage**
- **Start the backend server:**
  - npm run server
- **Start the frontend website:**
  - npm run dev
- /login - Displays the login page for user authentication.
- /register - Displays the registration page for new user sign-up.

---
