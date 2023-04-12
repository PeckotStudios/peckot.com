<template>
    <footer class="py-20 md:py-60">
        <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <div class="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
                <div
                    class="flex flex-wrap items-center divide-x divide-gray-900 dark:divide-gray-300 justify-between md:flex-nowrap">
                    <div
                        class="flex w-full justify-center space-x-6 text-gray-600 dark:text-gray-300 sm:w-6/12 md:justify-start">
                        <ul class="list-inside list-disc space-y-8">
                            <li><a href="https://docs.peckot.com"
                                    class="transition hover:text-primary hover:dark:text-primarydark">阅读文档</a></li>
                            <li><a href="https://issue.peckot.com"
                                    class="transition hover:text-primary hover:dark:text-primarydark">问题反馈</a></li>
                            <li><a href="https://blog.peckot.com"
                                    class="transition hover:text-primary hover:dark:text-primarydark">Peckot 博客</a></li>
                            <li><a href="https://mc.peckot.com"
                                    class="transition hover:text-primary hover:dark:text-primarydark">PeckotMC</a></li>
                        </ul>

                        <ul role="list" class="space-y-8">
                            <li>
                                <a href="https://peckot.com/f/joinus/bilibili"
                                    class="flex items-center space-x-3 transition hover:text-primary hover:dark:text-primarydark">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5"
                                        viewBox="0 0 500 500">
                                        <path
                                            d="M488.6 104.1C505.3 122.2 513 143.8 511.9 169.8V372.2C511.5 398.6 502.7 420.3 485.4 437.3C468.2 454.3 446.3 463.2 419.9 464H92.02C65.57 463.2 43.81 454.2 26.74 436.8C9.682 419.4 .7667 396.5 0 368.2V169.8C.7667 143.8 9.682 122.2 26.74 104.1C43.81 87.75 65.57 78.77 92.02 78H121.4L96.05 52.19C90.3 46.46 87.42 39.19 87.42 30.4C87.42 21.6 90.3 14.34 96.05 8.603C101.8 2.868 109.1 0 117.9 0C126.7 0 134 2.868 139.8 8.603L213.1 78H301.1L375.6 8.603C381.7 2.868 389.2 0 398 0C406.8 0 414.1 2.868 419.9 8.603C425.6 14.34 428.5 21.6 428.5 30.4C428.5 39.19 425.6 46.46 419.9 52.19L394.6 78L423.9 78C450.3 78.77 471.9 87.75 488.6 104.1H488.6zM449.8 173.8C449.4 164.2 446.1 156.4 439.1 150.3C433.9 144.2 425.1 140.9 416.4 140.5H96.05C86.46 140.9 78.6 144.2 72.47 150.3C66.33 156.4 63.07 164.2 62.69 173.8V368.2C62.69 377.4 65.95 385.2 72.47 391.7C78.99 398.2 86.85 401.5 96.05 401.5H416.4C425.6 401.5 433.4 398.2 439.7 391.7C446 385.2 449.4 377.4 449.8 368.2L449.8 173.8zM185.5 216.5C191.8 222.8 195.2 230.6 195.6 239.7V273C195.2 282.2 191.9 289.9 185.8 296.2C179.6 302.5 171.8 305.7 162.2 305.7C152.6 305.7 144.7 302.5 138.6 296.2C132.5 289.9 129.2 282.2 128.8 273V239.7C129.2 230.6 132.6 222.8 138.9 216.5C145.2 210.2 152.1 206.9 162.2 206.5C171.4 206.9 179.2 210.2 185.5 216.5H185.5zM377 216.5C383.3 222.8 386.7 230.6 387.1 239.7V273C386.7 282.2 383.4 289.9 377.3 296.2C371.2 302.5 363.3 305.7 353.7 305.7C344.1 305.7 336.3 302.5 330.1 296.2C323.1 289.9 320.7 282.2 320.4 273V239.7C320.7 230.6 324.1 222.8 330.4 216.5C336.7 210.2 344.5 206.9 353.7 206.5C362.9 206.9 370.7 210.2 377 216.5H377z" />
                                    </svg>
                                    <span>哔哩哔哩</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://peckot.com/f/joinus/github"
                                    class="flex items-center space-x-3 transition hover:text-primary hover:dark:text-primarydark">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                    <span>GitHub</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://peckot.com/f/joinus/qq"
                                    class="flex items-center space-x-3 transition hover:text-primary hover:dark:text-primarydark">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5"
                                        viewBox="2 2 20 20">
                                        <path
                                            d="M19.913 14.529a31.977 31.977 0 0 0-.675-1.886l-.91-2.246c0-.026.012-.468.012-.696C18.34 5.86 16.507 2 12 2 7.493 2 5.66 5.86 5.66 9.7c0 .229.011.671.012.697l-.91 2.246c-.248.643-.495 1.312-.675 1.886-.86 2.737-.581 3.87-.369 3.895.455.054 1.771-2.06 1.771-2.06 0 1.224.637 2.822 2.016 3.976-.515.157-1.147.399-1.554.695-.365.267-.319.54-.253.65.289.481 4.955.307 6.303.157 1.347.15 6.014.324 6.302-.158.066-.11.112-.382-.253-.649-.407-.296-1.039-.538-1.555-.696 1.379-1.153 2.016-2.751 2.016-3.976 0 0 1.316 2.115 1.771 2.06.212-.025.49-1.157-.37-3.894" />
                                    </svg>
                                    <span>QQ交流群</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://peckot.com/f/joinus/guild"
                                    class="flex items-center space-x-3 transition hover:text-primary hover:dark:text-primarydark">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5"
                                        viewBox="0 0 1000 1000">
                                        <path
                                            d="M896 640h-140.8l17.066667-256H896c34.133333 0 64-29.866667 64-64S930.133333 256 896 256h-115.2l8.533333-123.733333c4.266667-38.4-25.6-68.266667-64-68.266667-34.133333 0-59.733333 25.6-64 59.733333L652.8 256h-256l8.533333-123.733333c4.266667-38.4-25.6-68.266667-64-68.266667-34.133333 0-59.733333 25.6-64 59.733333L268.8 256H128c-34.133333 0-64 29.866667-64 64S93.866667 384 128 384h132.266667l-17.066667 256H128c-34.133333 0-64 29.866667-64 64S93.866667 768 128 768h106.666667l-8.533334 123.733333c-4.266667 38.4 25.6 68.266667 64 68.266667 34.133333 0 59.733333-25.6 64-59.733333l8.533334-132.266667h256l-8.533334 123.733333c-4.266667 38.4 25.6 68.266667 64 68.266667 34.133333 0 59.733333-25.6 64-59.733333l8.533334-132.266667H896c34.133333 0 64-29.866667 64-64S930.133333 640 896 640z m-268.8 0h-256l17.066667-256h256l-17.066667 256z" />
                                    </svg>
                                    <span>QQ频道</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="m-auto mt-16 w-10/12 space-x-6 space-y-5 text-center sm:mt-auto sm:w-6/12 sm:text-left">
                        <span class="block"></span>

                        <span class="block text-gray-500 dark:text-gray-400">
                            <span>
                                『不只是专注开发，<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;更是构建梦想。』
                            </span>
                        </span>

                        <span class="block text-gray-500 dark:text-gray-400">&copy;
                            <span>{{ "2021-" + new Date().getFullYear() }}</span>
                            <a href="https://peckot.com" class="font-bold transition hover:text-white">Peckot Studios</a>
                        </span>

                        <span class="block transition text-gray-500 dark:text-gray-400 hover:text-white">
                            <a href="https://beian.miit.gov.cn" class="font-bold">渝ICP备2022006862号</a>
                        </span>

                        <span class="flex text-gray-600 dark:text-white">
                            <a href="#" class="font-medium">用户使用条款</a>&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="#" class="font-medium">隐私保护协议</a>
                        </span>

                        <span class="block text-gray-500 dark:text-gray-400">
                            需要帮助？ <a href="#" class="font-semibold text-gray-600 dark:text-white">联系我们</a>
                        </span>

                        <span class="block"></span>
                    </div>
                </div>
        </div>
    </div>
</footer></template>