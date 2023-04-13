import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, GithubAuthProvider, OAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyCGdxWXlnp3bymQ4uU591NcNAdNncq1D7M'/*process.env.API_KEY*/,
    authDomain: 'auth.peckot.com'/*process.env.AUTH_DOMAIN*/,
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const providers = {
    google: new GoogleAuthProvider(),
    github: new GithubAuthProvider(),
    microsoft: new OAuthProvider('microsoft.com')
}