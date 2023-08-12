<template>
    <div>
        <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6" style="margin-top: -58px;">
            <div class="mb-10 space-y-2 text-center">
                <h2 class="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">近期文章</h2>
                <p class="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300 italic">
                    内容来自 Peckot Blog 博客
                </p>
            </div>
            <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-10">
                <a id="blog1_link"
                    class="lg:col-span-3 group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10 hover:scale-105 duration-200">
                    <div class="relative overflow-hidden rounded-xl">
                        <img id="blog1_img" alt="art cover" loading="lazy" src="/images/bg_blog.png"
                            class="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
                    </div>
                    <div class="mt-4 relative">
                        <h3 id="blog1_title" class="text-2xl font-semibold text-gray-800 dark:text-white">
                            获取中...
                        </h3>
                        <p id="blog1_desc" class="mt-4 mb-6 text-gray-600 dark:text-gray-300">
                            获取中...
                        </p>
                        <p class="inline-block" href="#">
                            <span
                                class="font-bold text-secondary dark:text-purple-400 group-hover:text-primary group-hover:dark:text-secondarydark">查看详情</span>
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 64" fill="currentColor"
                            class="inline ml-4 mb-1 text-primary dark:text-secondarydark w-5 h-5 text-2xl opacity-0 transition duration-200 group-hover:opacity-100">
                            <path fill-rule="evenodd"
                                d="M13 8l20 20a7 7 0 010 10l-20 20a1 1 0 01-5-5l20-20-20-20a1 1 0 015-5z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                </a>
                <a id="blog2_link"
                    class="lg:col-span-3 group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10 hover:scale-105 duration-200">
                    <div class="relative overflow-hidden rounded-xl">
                        <img id="blog2_img" alt="art cover" loading="lazy" src="/images/bg_blog.png"
                            class="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
                    </div>
                    <div class="mt-4 relative">
                        <h3 id="blog2_title" class="text-2xl font-semibold text-gray-800 dark:text-white">
                            获取中...
                        </h3>
                        <p id="blog2_desc" class="mt-4 mb-6 text-gray-600 dark:text-gray-300">
                            获取中...
                        </p>
                        <p class="inline-block" href="#">
                            <span
                                class="font-bold text-secondary dark:text-purple-400 group-hover:text-primary group-hover:dark:text-secondarydark">查看详情</span>
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 64" fill="currentColor"
                            class="inline ml-4 mb-1 text-primary dark:text-secondarydark w-5 h-5 text-2xl opacity-0 transition duration-200 group-hover:opacity-100">
                            <path fill-rule="evenodd"
                                d="M13 8l20 20a7 7 0 010 10l-20 20a1 1 0 01-5-5l20-20-20-20a1 1 0 015-5z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                </a>
                <a id="blog3_link"
                    class="lg:col-span-3 group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10 hover:scale-105 duration-200">
                    <div class="relative overflow-hidden rounded-xl">
                        <img id="blog3_img" alt="art cover" loading="lazy" src="/images/bg_blog.png"
                            class="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
                    </div>
                    <div class="mt-4 relative">
                        <h3 id="blog3_title" class="text-2xl font-semibold text-gray-800 dark:text-white">
                            获取中...
                        </h3>
                        <p id="blog3_desc" class="mt-4 mb-6 text-gray-600 dark:text-gray-300">
                            获取中...
                        </p>
                        <p class="inline-block" href="#">
                            <span
                                class="font-bold text-secondary dark:text-purple-400 group-hover:text-primary group-hover:dark:text-secondarydark">查看详情</span>
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 64" fill="currentColor"
                            class="inline ml-4 mb-1 text-primary dark:text-secondarydark w-5 h-5 text-2xl opacity-0 transition duration-200 group-hover:opacity-100">
                            <path fill-rule="evenodd"
                                d="M13 8l20 20a7 7 0 010 10l-20 20a1 1 0 01-5-5l20-20-20-20a1 1 0 015-5z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                </a>
                <a href="https://blog.peckot.com"
                    class="group flex bg-blog bg-cover bg-opacity-50 items-center justify-center p-6 sm:p-8 rounded-3xl border border-gray-100 dark:shadow-none dark:border-gray-700 shadow-2xl shadow-gray-600/10 hover:scale-105 duration-200">
                    <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                        更<br v-if="wx(880)">多<br v-if="wx(880)">内<br v-if="wx(880)">容<br v-if="wx(880)">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 64" fill="currentColor"
                            :class="{ 'inline ml-2 mb-1': ws(880) }"
                            class="md:ml-0 md:mt-6 animate-[pulse_1.5s_ease-in-out_infinite] text-secondary dark:text-secondarydark w-5 h-5 text-2xl">
                            <path fill-rule="evenodd"
                                d="M13 8l20 20a7 7 0 010 10l-20 20a1 1 0 01-5-5l20-20-20-20a1 1 0 015-5"
                                clip-rule="evenodd" />
                        </svg>
                    </h3>
                </a>
            </div>
        </div>
    </div>
</template>

<style>
@media (prefers-color-scheme: dark) {
    .bg-blog {
        background-image: linear-gradient(rgba(20, 20, 20, 0.5),
                rgba(0, 0, 0, 0.5)),
            url(/images/bg_blog.png);
    }
}

@media (prefers-color-scheme: light) {
    .bg-blog {
        background-image: linear-gradient(rgba(255, 255, 255, 0.6),
                rgba(255, 255, 255, 0.5)),
            url(/images/bg_blog.png);
    }
}
</style>

<script>
import axios from 'axios';

export default {
    methods: {
        ws(width) {
            return window.innerWidth < width;
        },
        wx(width) {
            return window.innerWidth >= width;
        }
    },
    mounted() {
        window.addEventListener('resize', () => {
            this.$forceUpdate();
        });
        axios.get('https://blog.peckot.com/api/getLatest3Posts')
            .then((response) => {
                let blogs = response.data.data;
                console.log(blogs);
                for (let i = 0; i < 3; i++) {
                    document.getElementById(`blog${i + 1}_img`).src = blogs[i].cover || '/images/bg_blog.png';
                    document.getElementById(`blog${i + 1}_title`).innerHTML = blogs[i].title || "标题获取失败";
                    document.getElementById(`blog${i + 1}_desc`).innerHTML = blogs[i].description || '描述获取失败';
                    let card = document.getElementById(`blog${i + 1}_link`);
                    card.href = blogs[i]._link;
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
</script>