import { initializeApp as initializeAdminApp, credential } from 'firebase-admin'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const env = (() => {
    console.log(process)
    if (typeof process === 'undefined') return {
        SERVICE_ACCOUNT: '{"type":"service_account","project_id":"peckot-studios","private_key_id":"1990dec7f3453759ca42801ccf3c0cee97799dd3","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC24n+llWwO1ihZ\\n9cBXU20z3JRuIZEu/Yt/egmnnUbYnsH8gGoeRp0ynEYqOxp3/jEgalS+alUzsedu\\nhf5arGb41bDtKxYfNKxEcSsI9aaVtKgj/ntSoiHfYL6DJsMUUA7ZuUJLKMicd1D0\\nwVnfFaj7aGDN7HN54JWM9rYQpaFPN7cdy1VzPxcrULKvSUCVVU47xtF2XUJweWck\\nt/vuYY4X6+aO3IfrQD+f39mnAkYN1Rna3nIKRLb9Ny6V2/Ps+lmwBUfmjZUltNhd\\nAVgpnl0wkjHIZJh9OS7TyQPwqJpgByTv2a5OZCNvJG0h85EPNwEJ7i0Vb9Y8lmux\\nQQsX9LPrAgMBAAECggEAWWzAKMm7CDgsi+xwK+MVwyWpCH7uXFFK3D7iqKxtX2+l\\ngB+UhBBYPk6Ouoii5SiMggKsRF1/IuNrPC5V1KV3RlZLCHUogILDd0X02pEvbwVi\\nsBL330x7DpxiG4QhIHYTBOAi69hZ27Q2CC/hD4WqVqBPsXFcd6xaxA5AsTwj97T9\\nAdRC7REBW22hkA3HOXSN8VNMUEGcHUDLdQIRCZKppgwsqKG+Y0c8xsSRUEUAHHSQ\\n6+nvCEBreSed2ZZfvmLvYyK7C1WeLnt7+JBAGHrF0R6FZhR2ps/IuBBz6iG1sk5z\\nXHGRIEm2RlElxsBImwi1pTRfFtNmn/J5LJVhsBVmTQKBgQDns8bK/Ik8fvwC31Hm\\n95rLvbQVDbpGfYymycLsbVES0IlCQn77iW7gM3xcY/pkjM7Qe1jz8L2at0IhbaOh\\nt1iLrEkRUmNicvZrEK14s/+CYtZC+zD1MNMtttmoUq5dtDNO+H2Wa8mDjQ4Wo8Cc\\nB/mVWwZeUZ1AbM+dc7q21kQV9wKBgQDKEC3oc5JF/TY/Ad1SIwt1nqcm3nIdXM2Q\\n6IkoWgnMGzKTlGJA5rhKvqgqwKEzKABwnhPh7qpEQ4k0Z1conE38WR/2QPMqBpdf\\n9fLcjsgkQY4CjXxDx7EQvGw/m7Yy+Q1wyHBkUleoxTFmDTkkOP6h6jBm8GEbYQFb\\nfrpB0rYErQKBgQC2okRN+CUMpGNsuC7MydsgQZXTCpELwya8yUh2J+zB0dJ/gf6p\\nsrjMzIh4Iu5Zl4vlVXTWQ6qQa2cbBlr2u5h18AVgO/rOvSNzXR//hpIeal3NSkZa\\n3nN3EywZu6JphgLzenczvB6JLQQv4D+QPdEDY05vxhEXmS1FRNWmDNp6HQKBgHv4\\nETJcNZHbGDzv1+lcttsiy0p9j2WUWkpdYEjxdLFUvmLs1psa8lZpQqN4K25HTH3L\\nfkdPNgdLqBIOlNrFitMXmxRqJMXT5WtqaeYHc6NK1OWcCHFNQsUR1RfxYIdFZYmc\\nb9gc7MsOsI/77OLcVNzh4XBGak1x5nNL/NoFfMbBAoGAMHUoqwgjp63XiaJco3gy\\nyd+ZNBr6LXlhn1kE9o7nyOYkJn9K1ShfHkyfrB5SEA8U2FrUW4xuNqjt+Qg5MDGk\\nRou7CG//0/iRG0OLqhHbANMzJRCrrwFYvstE7O+mMYDApuo71ZBjZ+3CEEw6TU3D\\nLOAoOm4EXuxClra72qLLQt4=\\n-----END PRIVATE KEY-----\\n","client_email":"firebase-adminsdk-p7qxh@peckot-studios.iam.gserviceaccount.com","client_id":"109656100987870928004","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-p7qxh%40peckot-studios.iam.gserviceaccount.com"}',
        API_KEY: 'AIzaSyCGdxWXlnp3bymQ4uU591NcNAdNncq1D7M',
        AUTH_DOMAIN: 'auth.peckot.com'
    }
    else return {
        SERVICE_ACCOUNT: process.env.SERVICE_ACCOUNT,
        API_KEY: process.env.API_KEY,
        AUTH_DOMAIN: process.env.AUTH_DOMAIN
    }
})()

const serviceAccount = JSON.parse(env.SERVICE_ACCOUNT);
const firebaseConfig = {
    apiKey: env.API_KEY,
    authDomain: env.AUTH_DOMAIN,
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const admin = initializeAdminApp({
    credential: credential.cert(serviceAccount)
});

