import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, GithubAuthProvider, OAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const providers = {
    google: new GoogleAuthProvider(),
    github: new GithubAuthProvider(),
    microsoft: new OAuthProvider('microsoft.com')
}