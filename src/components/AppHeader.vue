<template>
    <header>
        <nav class="z-10 w-full absolute">
            <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                <div class="flex flex-wrap items-center justify-between py-4 gap-6 md:gap-0 relative">
                    <input aria-hidden="true" type="checkbox" name="toggle_nav" id="toggle_nav" class="hidden peer" />
                    <div class="relative z-20 w-full flex justify-between bg:w-max md:px-0">
                        <a href="/" aria-label="logo" class="flex space-x-2 items-center">
                            <div aria-hidden="true" class="flex space-x-1">
                                <img class="h-10" src="/logo.svg" alt="Peckot" />
                            </div>
                            <span class="text-2xl font-bold text-gray-900 dark:text-white">Peckot Studios</span>
                        </a>
                        <div class="relative flex items-center bg:hidden max-h-10">
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
                    <!-- <div aria-hidden="true"
                        class="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70">
                    </div> -->
                    <div
                        class="flex-col z-20 flex-wrap gap-4 p-6 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end invisible opacity-0 translate-y-1 absolute top-full right-0 transition-all duration-300 scale-95 origin-top bg:relative bg:scale-100 bg:peer-checked:translate-y-0 bg:translate-y-0 bg:flex bg:flex-row bg:items-center bg:gap-0 bg:p-0 bg:bg-transparent bg:visible bg:opacity-100 bg:border-none peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible bg:shadow-none dark:shadow-none dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex-auto text-gray-600 dark:text-gray-300 bg:pr-4 bg:w-auto bg:ml-36 bg:pt-0">
                            <ul class="tracking-wide font-medium bg:text-sm flex-col flex bg:flex-row gap-6 bg:gap-0">
                                <li>
                                    <a href="/about" :class="getPageClass('about')">
                                        <span>关于我们</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://blog.peckot.com" target="_self" :class="getPageClass()">
                                        <span>Peckot 博客</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://docs.peckot.com" target="_self" :class="getPageClass()">
                                        <span>阅读文档</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://peckot.com/f/joinus/qq" target="_blank" :class="getPageClass()">
                                        <span>QQ交流群</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://peckot.com/f/joinus/bilibili" target="_blank" :class="getPageClass()">
                                        <span>哔哩哔哩</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://peckot.com/f/joinus/github" target="_blank" :class="getPageClass()">
                                        <span>Github</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    methods: {
        isPage(page) {
            return (window.location.pathname.substring(1) || 'home') == page;
        },
        getPageClass(page) {
            return {
                'block md:px-4 transition': true,
                'hover:text-primary hover:dark:text-primarydark': this.isPage('home'),
                'text-primary dark:text-primarydark': this.isPage(page),
            };
        },
    }
};
</script>
