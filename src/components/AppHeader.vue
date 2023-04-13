<template>
    <header>
        <nav class="z-10 w-full absolute">
            <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                <div class="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
                    <input aria-hidden="true" type="checkbox" name="toggle_nav" id="toggle_nav" class="hidden peer" />
                    <div class="relative z-20 w-full flex justify-between lg:w-max md:px-0">
                        <a href="#" aria-label="logo" class="flex space-x-2 items-center">
                            <div aria-hidden="true" class="flex space-x-1">
                                <img class="h-10" src="/logo.svg" alt="Peckot" />
                            </div>
                            <span class="text-2xl font-bold text-gray-900 dark:text-white">Peckot Studios</span>
                        </a>

                        <div class="relative flex items-center lg:hidden max-h-10">
                            <label role="button" for="toggle_nav" aria-label="humburger" id="hamburger"
                                class="relative p-6 -mr-6">
                                <div aria-hidden="true" id="line"
                                    class="m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300">
                                </div>
                                <div aria-hidden="true" id="line2"
                                    class="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300">
                                </div>
                            </label>
                        </div>
                    </div>
                    <div aria-hidden="true"
                        class="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70">
                    </div>
                    <div
                        class="flex-col z-20 flex-wrap gap-4 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1 absolute top-full left-0 transition-all duration-300 scale-95 origin-top lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none dark:shadow-none dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex-auto text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto ml-16 lg:pt-0">
                            <ul class="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
                                <li>
                                    <a target="_self" href="https://docs.peckot.com"
                                        class="block md:px-4 transition hover:text-primary hover:dark:text-primarydark">
                                        <span>阅读文档</span>
                                    </a>
                                </li>
                                <li>
                                    <a target="_self" href="https://blog.peckot.com"
                                        class="block md:px-4 transition hover:text-primary hover:dark:text-primarydark">
                                        <span>Peckot 博客</span>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://peckot.com/f/joinus/qq"
                                        class="block md:px-4 transition hover:text-primary hover:dark:text-primarydark">
                                        <span>QQ交流群</span>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://peckot.com/f/joinus/bilibili"
                                        class="block md:px-4 transition hover:text-primary hover:dark:text-primarydark">
                                        <span>哔哩哔哩</span>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://peckot.com/f/joinus/github"
                                        class="block md:px-4 transition hover:text-primary hover:dark:text-primarydark">
                                        <span>Github</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div v-if="!this.user" class="absolute flex-none lg:mt-0">
                            <a v-if="this.$route.path == '/signin'" href="/"
                                class="h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:dark:bg-primarydark before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                                <span class="relative text-sm font-thin text-white">
                                    返回·主页
                                </span>
                            </a>
                            <a v-else href="/signin"
                                class="h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:dark:bg-primarydark before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                                <span class="relative text-sm font-thin text-white">
                                    注册|登录
                                </span>
                            </a>
                        </div>
                        <div class="absolute flex-none">
                            <Dropdown placement="right">
                                <template v-if="this.user" v-slot:button>
                                    <button class="flex rounded-md bg-transparent">
                                        <img class="flex h-9 w-full items-center rounded-full ring-2 ring-primary dark:ring-primarydark"
                                            :src="this.user.photoURL" />
                                    </button>
                                </template>
                                <template v-slot:content>
                                    <div class="text-gray-700 dark:text-white font-bold">
                                        <a
                                            class="block cursor-pointer hover:bg-secondary hover:dark:bg-primarydark hover:text-white px-4 py-3">个人中心</a>
                                        <a class="block cursor-pointer hover:bg-secondary hover:dark:bg-primarydark hover:text-white px-4 py-3"
                                            @click="logout">退出登录</a>
                                    </div>
                                </template>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import { auth } from '../firebase'
import { signOut, onAuthStateChanged } from "firebase/auth";

import Dropdown from "./Dropdown.vue";

export default {
    data() {
        return {
            user: auth.currentUser
        }
    },
    created() {
        onAuthStateChanged(auth, (firebaseUser) => this.user = firebaseUser)
        if (this.user) this.$router.push('/')
    },
    components: {
        Dropdown,
    },
    methods: {
        logout() {
            signOut(auth)
                .then((ignored) => {
                    this.$router.push('/')
                    this.user = null
                })
                .catch((error) => {
                    alert(error.message)
                    // TODO
                })
        }
    }
};
</script>
