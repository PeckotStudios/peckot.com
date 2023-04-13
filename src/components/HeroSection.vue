<script setup>
import BackgroundLight from './BackgroundLight.vue';
</script>

<template>
    <div class="relative">
        <BackgroundLight />
        <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <div class="relative pt-36">
                <div class="lg:w-2/3 text-center mx-auto">
                    <h1 class="text-gray-900 dark:text-white font-bold text-4xl md:inline-flex md:text-5xl xl:text-6xl">
                        &nbsp;不只是<span
                            class="md:inline-flex text-gradient bg-gradient-to-br bg-clip-text text-transparent from-primary to-secondary dark:from-primarydark dark:to-secondarydark">专注开发</span>&nbsp;<br /><span
                            class="md:inline-flex">更是</span><span
                            class="md:inline-flex text-gradient bg-gradient-to-tl bg-clip-text text-transparent from-primary to-secondary dark:from-primarydark dark:to-secondarydark">构建梦想</span>
                    </h1>
                    <p class="mt-8 text-gray-700 dark:text-gray-300">
                        一个有着远大白日梦想的高中生团队，一个编程爱好者们共同组建并运营的团队，<br>一个真正用心考虑用户体验的团队。与其驻足观望，不如加入我们，在此创造——<br><span
                            class="font-bold text-2xl">更出色的产品与服务</span></p>
                    <div class="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                        <a href="/signin"
                            class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:dark:bg-primarydark before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                            <span class="relative text-base font-semibold text-white">
                                注册账户
                            </span>
                        </a>
                        <a href="/about"
                            class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:dark:bg-primarydark/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max">
                            <span class="relative text-base font-semibold text-primary dark:text-white">
                                关于我们
                            </span>
                        </a>
                        <a href="https://docs.peckot.com"
                            class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:dark:bg-primarydark/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max">
                            <span class="relative text-base font-semibold text-primary dark:text-white">
                                阅读文档
                            </span>
                        </a>
                    </div>
                    <div class="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
                        <div class="text-left">
                            <h6 class="text-lg font-semibold text-gray-700 dark:text-white">Some feature here</h6>
                            <p class="mt-2 text-gray-500">Some text here</p>
                        </div>
                        <div class="text-left">
                            <h6 class="text-lg font-semibold text-gray-700 dark:text-white">Some feature here</h6>
                            <p class="mt-2 text-gray-500">Some text here</p>
                        </div>
                        <div class="text-left">
                            <h6 class="text-lg font-semibold text-gray-700 dark:text-white">Some feature here</h6>
                            <p class="mt-2 text-gray-500">Some text here</p>
                        </div>
                    </div>
                </div>
                <div class="mt-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4">
                    <a href="https://github.com/" class="p-4 grayscale transition duration-200 hover:grayscale-0">
                        <img src="/supporters/github.svg" class="h-12 w-auto mx-auto center" loading="lazy" alt="GitHub" />
                    </a>
                    <a href="https://nodejs.org/zh-cn/" class="p-4 grayscale transition duration-200 hover:grayscale-0">
                        <img src="/supporters/nodejs.svg" class="h-12 w-auto mx-auto center" loading="lazy" alt="Node.js" />
                    </a>
                    <a href="https://astro.build/" class="p-4 grayscale transition duration-200 hover:grayscale-0">
                        <img src="/supporters/astro.svg" class="h-12 w-auto mx-auto center" loading="lazy" alt="Astro" />
                    </a>
                    <a href="https://vercel.com/home/" class="p-4 grayscale transition duration-200 hover:grayscale-0">
                        <img src="/supporters/vercel.svg" class="h-12 w-auto mx-auto center" loading="lazy" alt="Vercel" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>