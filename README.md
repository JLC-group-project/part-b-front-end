## Coders Cafe

### Frontend Git Url
https://github.com/JLC-group-project/part-b-front-end

### Backend Git Url
https://github.com/JLC-group-project/part-b-backend

### Deployed URL
https://coderscafe.herokuapp.com/


### Instructions for API usage
1. AUTH0
   1. Create an account with Auth0
   2. Select create application on the Getting Started page
   3. Type your desired app name
   4. Select Single Page Web Applications
   5. Select React for the technology
   6. You'll be redirected to https://auth0.com/docs/quickstart/spa/react/01-login
   7. Follow the instructions to get access to your Domain key and Client ID which is your application settings page
   8. On the same page, Configure your Callback URLs, Logout URLs and Allowed Web Origins to localhost:3000
   9. Set the values in the .env file to the appropriate environment variables
2. Cloudinary
   1. Create a new Cloudinary account if you don’t have one
   2. After you logged in, go to settings
   3. Go to upload and change the upload presets to unsigned uploading enable
   4. Add a new upload preset and keep the name.
   5. Keep the name of your cloud name as well.
   6. Go to the .env file.
   7. Change the VITE_CLOUDINARY_API to “https://api.cloudinary.com/v1_1/<yourcloudname>/image/upload"
   8. Change the VITE_PRESET = “<your preset name>”
   9. Change the VITE_CLOUDINARY_NAME="< your cloud name>" 
3. API Endpoint
   1. Set your backend URL here
   2. By default it is set to PORT 4000 - [localhost:4000](http://localhost:4000/)

### Running Vite
1. npm install
2. npm run dev
3. [localhost:3000](http://localhost:3000/) on your web browser
4. To access the admin add /admin to the root url e.g. http://localhost:3000/admin

### Libraries
- "@auth0/auth0-react": "^1.10.2"
- "formik": "^2.2.9"
- "react": "^18.0.0
- "react-dom": "^18.0.0"
- "react-icons": "^4.4.0"
- "react-light-accordion": "^0.1.4"
- "react-router-dom": "^6.3.0"
- "yup": "^0.32.11"

### Running Tests
1. npm install
2. npm test

### Test Libraries
- "@testing-library/jest-dom": "^5.16.4"
- "@testing-library/react": "^13.3.0"
- "@testing-library/react-hooks": "^8.0.1"
- "@testing-library/user-event": "^14.3.0"
- "jsdom": "^20.0.0"
- "node-fetch": "^3.2.9"
- "vitest": "^0.19.1"

### Third Party API
- Auth0
- Cloudinary

### ENVIRONMENT VARIABLES
- VITE_AUTH_DOMAIN
- VITE_AUTH_CLIENT_ID
- VITE_API_ENDPOINT
- VITE_CLOUDINARY_API
- VITE_PRESET
- VITE_CLOUDINARY_NAME