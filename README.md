# NewCombin - React Challenge

Based off of https://github.com/newcombin/devskillsadv

Client built in React with `create-react-app` default configuration.

## Getting started

### 1. Install dependencies

```bash
  npm ci
```

### 2. Add `.env.local` file to the root of the project so that we get some environment variables
```
REACT_APP_API_USER=sarah
REACT_APP_API_PASSWORD=connor
REACT_APP_API_URL=http://localhost:8081
```

#### **---DISCLAIMER---**
This is not the right approach to save user secrets, since anything in here even if it is an env configuration would be inspectable from DEV-TOOLS.

The right approach should be: have the server do this for us. Preferrably with an intermediate api (which fetches the token and the does the corresponding request), this would hide away the token fetching from the client completely and just get the information required.

Either an express api or a NextJS API Route could do the trick for us here.

But as the Challenge requires for me to send this auth header from the Client I'm going to follow this insecure approach.

### 3. Run app

```bash
npm start
```
