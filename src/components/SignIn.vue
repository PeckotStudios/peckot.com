<script setup>
import BackgroundLight from './BackgroundLight.vue';
</script>

<template>
    <div class='relative'>
        <BackgroundLight />
        <div class='relative pt-28'>
            <div class='bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl'>
                <section>
                    <h3 class='font-bold text-2xl'>注册登录 · 即刻开始</h3>
                    <p class='text-gray-600 pt-2'>『 加入 Peckot Studios 的行列 』</p>
                </section>
                <section class='mt-5 grid grid-cols-3'>
                    <button type='button' @click='loginWithMicrosoft'
                        class='text-white bg-gradient-to-r from-[#00A4EF] to-[#7FBA00] hover:from-[#0084CF] hover:to-[#5F9A00] focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center mr-2 mb-2'>
                        <svg class='w-4 h-4 mr-2 ml-2' aria-hidden='true' focusable='false' data-prefix='fab'
                            data-icon='microsoft' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 460 460'>
                            <path fill='currentColor'
                                d='M 0 0 h 210 v 210 h -210 z M 250 0 h 210 v 210 h -210 z M 0 250 h 210 v 210 h -210 z M 250 250 h 210 v 210 h -210 z'>
                            </path>
                        </svg>
                        微软登录
                    </button>
                    <button type='button' @click='loginWithGithub'
                        class='text-white bg-gradient-to-r from-[#6f42c1] to-[#9B4DCA] hover:from-[#4f22a1] hover:to-[#7B2DaA] focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center mr-2 mb-2'>
                        <svg class='w-4 h-4 mr-2 -ml-1' aria-hidden='true' focusable='false' data-prefix='fab'
                            data-icon='github' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'>
                            <path fill='currentColor'
                                d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'>
                            </path>
                        </svg>
                        Github登录
                    </button>
                    <button type='button' @click='test'
                        class='text-white bg-gradient-to-r from-[#DB4437] to-[#AB5374] hover:from-[#bB2417] hover:to-[#8B3354] focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center mr-2 mb-2'>
                        <svg class='w-4 h-4 mr-2 -ml-1' aria-hidden='true' focusable='false' data-prefix='fab'
                            data-icon='google' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 488 512'>
                            <path fill='currentColor'
                                d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'>
                            </path>
                        </svg>
                        Google登录
                    </button>
                </section>

                <section class='mt-5 grid grid-cols-3 grid-flow-col'>
                    <div class='divide-y col-span-1'>
                        <div></div>
                        <div></div>
                    </div>
                    <div class='text-gray-500 text-center font-bold -mt-2.5'>OR</div>
                    <div class='divide-y col-span-3'>
                        <div></div>
                        <div></div>
                    </div>
                </section>

                <section class='mt-5'>
                    <form class='flex flex-col' @submit.prevent='loginWithLink'>
                        <div class='mb-6 pt-3 rounded bg-gray-200'>
                            <label class='block text-gray-700 text-sm font-bold mb-2 ml-3' for='email'>邮箱地址</label>
                            <input type='text' id='email' placeholder='user@example.com' v-model='email' required
                                class='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3'>
                        </div>
                        <div class='flex justify-end'>
                            <p class='flex-auto text-sm text-left text-gray-500 mb-6'>系统将自动注册不存在的账户</p>
                            <a href='#'
                                class='flex-none text-sm text-right text-purple-600 hover:text-purple-700 hover:underline mb-6'>忘记密码?</a>
                        </div>
                        <button
                            class='bg-purple-500 hover:bg-purple-800 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200'
                            type='submit'>发送邮件</button>
                    </form>
                </section>
            </div>
        </div>
    </div>
</template>
  
<script>
import { auth } from '../firebase'

import { setPersistence, browserLocalPersistence, signInWithEmailLink, signInWithPopup, GithubAuthProvider, OAuthProvider, GoogleAuthProvider, sendSignInLinkToEmail, isSignInWithEmailLink, updateProfile } from 'firebase/auth'

export default {
    data() {
        return {
            email: '',
        }
    },
    created() {
        this.checkSignInLink()
    },
    methods: {
        logError(error) {
            this.$notify({
                group: 'bottom-right',
                type: 'error',
                title: '严重错误',
                text: error.message
            }, 5000)
        },
        loginWithLink() {
            setPersistence(auth, browserLocalPersistence)
                .then(async () => {
                    const actionCodeSettings = {
                        url: 'https://peckot.com/signin',
                        handleCodeInApp: true
                    }
                    try {
                        await sendSignInLinkToEmail(auth, this.email, actionCodeSettings)
                        localStorage.setItem('_email_signin', this.email)
                        this.$notify({
                            group: 'bottom-right',
                            type: 'info',
                            title: '发送成功',
                            text: `邮件已发送至 ${this.email}`
                        }, 3000)
                    } catch (error) {
                        this.logError(error)
                    }
                })
                .catch((error) => this.logError(error))
        },
        async checkSignInLink() {
            if (isSignInWithEmailLink(auth, window.location.href)) {
                let mail = localStorage.getItem('_email_signin')
                if (!mail) {
                    this.$notify({
                        group: 'bottom-right',
                        type: 'warning',
                        title: '注册失败',
                        text: '请使用同一浏览器完成注册！'
                    }, 5000)
                    this.$router.push('/')
                }
                try {
                    const userCredential = await signInWithEmailLink(auth, mail, window.location.href)
                    localStorage.removeItem('_email_signin')
                    localStorage.setItem('_user', JSON.stringify(userCredential.user))
                    this.$notify({
                        group: 'bottom-right',
                        type: 'info',
                        title: '登陆成功',
                        text: `尊敬的 ${userCredential.user.email}`
                    }, 3000)
                } catch (error) {
                    this.logError(error)
                }
            }
        },
        loginWithMicrosoft() {
            signInWithPopup(auth, new OAuthProvider('microsoft.com'))
                .then((userCredential) => {
                    localStorage.setItem('_user', JSON.stringify(userCredential.user))
                    this.$router.push('/')
                    this.$notify({
                        group: 'bottom-right',
                        type: 'info',
                        title: '登陆成功',
                        text: `尊敬的 ${userCredential.user.email}`
                    }, 3000)
                })
                .catch((error) => this.logError(error))
        },
        loginWithGithub() {
            signInWithPopup(auth, new GithubAuthProvider())
                .then((userCredential) => {
                    localStorage.setItem('_user', JSON.stringify(userCredential.user))
                    this.$router.push('/')
                    this.$notify({
                        group: 'bottom-right',
                        type: 'info',
                        title: '登陆成功',
                        text: `尊敬的 ${userCredential.user.email}`
                    }, 3000)
                })
                .catch((error) => this.logError(error))
        },
        loginWithGoogle() {
            signInWithPopup(auth, new GoogleAuthProvider())
                .then((userCredential) => {
                    localStorage.setItem('userIdToken', JSON.stringify(userCredential.user))
                    this.$router.push('/')
                    this.$notify({
                        group: 'bottom-right',
                        type: 'info',
                        title: '登陆成功',
                        text: `尊敬的 ${userCredential.user.email}`
                    }, 3000)
                })
                .catch((error) => this.logError(error))
        }
    }
}
</script>
<!--   

<script>
import { signInWithPopup, createUserWithEmailAndPassword } from '@firebase/auth';
import { GithubAuthProvider } from '@firebase/auth';

export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        github() {
            signInWithPopup(this.$firebaseAuth, new GithubAuthProvider())
                .then((result) => {
                    const credential = GithubAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    this.$firebaseUser = result.user;
                    this.$router.push('/');
                    console.log('用户登录成功: Github');
                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    const email = error.customData.email;
                    const credential = GithubAuthProvider.credentialFromError(error);
                });
        },
        submit() {
            createUserWithEmailAndPassword(this.$firebaseAuth, this.email, this.password)
                .then((userCredential) => {
                    this.$router.push('/');
                    this.$firebaseUser = userCredential.user;
                    console.log('用户登录成功: Email');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log('eCode', errorCode);
                    console.log('eMsg', errorMessage);
                });
        },
    },
}
</script> -->
