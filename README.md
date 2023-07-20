# assainment
# Meditation Generator

This is a Single Page Application that generates personalized meditation texts based on user input. The frontend is hosted on Netlify, and the backend is hosted on Glitch.

## Usage

1. Access the application in your web browser at [https://64b8fa7a88e573591aac5c3e--voluble-rabanadas-36dbd8.netlify.app/](https://64b8fa7a88e573591aac5c3e--voluble-rabanadas-36dbd8.netlify.app/).

2. In the application, there are three tabs for the user to enter their details:
   - Feeling: Enter how you are feeling right now.
   - Current Activity: Describe what you are currently doing.
   - Issues: Mention any issues you are facing today.

3. After entering the details in all three tabs, click on "Generate Meditation."

4. The application will call the backend API hosted on [https://glowing-spectacled-pyrite.glitch.me/](https://glowing-spectacled-pyrite.glitch.me/) with your input, and the generated meditation text will be displayed on the screen.

## Backend API Endpoint

- POST [https://glowing-spectacled-pyrite.glitch.me/api/generate-meditation](https://glowing-spectacled-pyrite.glitch.me/api/generate-meditation): Takes the user input as JSON and returns the generated meditation text.

## Technologies Used

- Frontend: React
- Backend: Node.js, Express.js
- Hosting: Netlify (Frontend), Glitch (Backend)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Links

- [Frontend](https://64b8fa7a88e573591aac5c3e--voluble-rabanadas-36dbd8.netlify.app/)
- [Backend API](https://glowing-spectacled-pyrite.glitch.me/api/generate-meditation)
- [GitHub Repository](https://github.com/1Gireesh/assainment/)
