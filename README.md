# Login and Registration Project with MongoDB

This is a React project that provides a login and registration functionality, backed by a MongoDB database.

## Prerequisites

- Node.js and npm should be installed on your machine.
- MongoDB should be installed and running locally or accessible via a remote server.

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Run the following command to install dependencies:


4. Create a `.env` file in the project root directory and add the following environment variables:


Replace `<your_mongodb_uri>` with the URI of your MongoDB database and `<your_jwt_secret>` with a secret key for JWT token generation.

## Usage

1. Start the development server with the following command:


2. Open your web browser and go to `http://localhost:3000` to access the application.

3. The home page displays a navigation menu with options to register or login.

4. Click on "Register" to create a new user account. Fill in the required details and submit the form.

5. Once registered, you will be redirected to the login page.

6. Enter your registered email and password and click "Login" to authenticate.

7. After successful login, you will be redirected to a protected page that displays a welcome message.

8. To logout, click on the "Logout" button in the navigation menu.

## Folder Structure

The project structure is as follows:


## Contributing

Contributions are welcome! If you have any suggestions, bug fixes, or improvements, please open an issue or a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
