<template>
    <div class="text-gray-600 dark:text-gray-300">
        <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <div class="mb-20 space-y-4 px-6 md:px-0">
                <h2 class="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                    一些用户和开发者的评价
                </h2>
            </div>
            <div :class="{ 'col-2': wx(610) && ws(880), 'col-3': wx(880) }" class="gap-8 space-y-8">
                <div
                    class="nobreak aspect-auto p-6 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                    <div class="flex gap-4">
                        <img class="w-12 h-12 rounded-full" src="https://q1.qlogo.cn/g?b=qq&nk=2671876934&s=640"
                            alt="Pectics' avatar" loading="lazy" draggable="false" />
                        <div>
                            <h6 class="text-lg font-medium text-gray-700 dark:text-white">Pectics</h6>
                            <p class="text-sm text-gray-500 dark:text-gray-300">Peckot Studios 创立者</p>
                        </div>
                    </div>
                    <p class="mt-4">直到如今我仍然认为 Peckot Studios
                        的创立是值得的，尽管它的管理层相关制度十分随意，但是作为学生，我们的热情是不易熄灭的，既然大家由于拥有共同兴趣爱好而聚集到了一起，又为何不奋斗一时建设属于自己内心的美好呢？</p>
                </div>
                <div
                    class="nobreak aspect-auto p-6 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                    <div class="flex gap-4">
                        <img class="w-12 h-12 rounded-full"
                            src="https://th.bing.com/th/id/R.07f468b53c25821ba3e6f132d6d25bd8?rik=DErpDe5xln0zkQ&riu=http%3a%2f%2fphotos.tuchong.com%2f280990%2ff%2f3418241.jpg&ehk=VPbVmeTbGYp4eM04ruObNwuRl2Isjytt%2fRaPEoC4Gy4%3d&risl=&pid=ImgRaw&r=0"
                            alt="" loading="lazy" draggable="false">
                        <div>
                            <h6 class="text-lg font-medium text-gray-700 dark:text-white">Someone</h6>
                            <p class="text-sm text-gray-500 dark:text-gray-300">Some position</p>
                        </div>
                    </div>
                    <p class="mt-4">Some texts texts texts texts texts texts texts texts.</p>
                </div>
                <div
                    class="nobreak aspect-auto p-6 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                    <div class="flex gap-4">
                        <img class="w-12 h-12 rounded-full" src="https://q1.qlogo.cn/g?b=qq&nk=3492772281&s=640"
                            alt="Bill Zhong's avatar" loading="lazy" draggable="false" />
                        <div>
                            <h6 class="text-lg font-medium text-gray-700 dark:text-white">Bill Zhong</h6>
                            <p class="text-sm text-gray-500 dark:text-gray-300">Peckot Studios 管理组成员</p>
                        </div>
                    </div>
                    <p class="mt-4">2021年6月27日创立 Peckot
                        Studios。那天，我们踏入了未曾设想的的道路。尽管身隔远方，但是我们就像一滴滴的水珠，其表面张力不断地拉拢着我们，正因如此，才砌起了我们心中那一座热情的圣殿、点燃了希望的冉冉篝火。</p>
                </div>
                <div
                    class="nobreak aspect-auto p-6 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                    <div class="flex gap-4">
                        <img class="w-12 h-12 rounded-full"
                            src="https://th.bing.com/th/id/R.07f468b53c25821ba3e6f132d6d25bd8?rik=DErpDe5xln0zkQ&riu=http%3a%2f%2fphotos.tuchong.com%2f280990%2ff%2f3418241.jpg&ehk=VPbVmeTbGYp4eM04ruObNwuRl2Isjytt%2fRaPEoC4Gy4%3d&risl=&pid=ImgRaw&r=0"
                            alt="" loading="lazy" draggable="false">
                        <div>
                            <h6 class="text-lg font-medium text-gray-700 dark:text-white">Someone</h6>
                            <p class="text-sm text-gray-500 dark:text-gray-300">Some position</p>
                        </div>
                    </div>
                    <p class="mt-4">Some texts texts texts texts texts texts texts texts.</p>
                </div>
                <div
                    class="nobreak aspect-auto p-6 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                    <div class="flex gap-4">
                        <img class="w-12 h-12 rounded-full"
                            src="https://th.bing.com/th/id/R.07f468b53c25821ba3e6f132d6d25bd8?rik=DErpDe5xln0zkQ&riu=http%3a%2f%2fphotos.tuchong.com%2f280990%2ff%2f3418241.jpg&ehk=VPbVmeTbGYp4eM04ruObNwuRl2Isjytt%2fRaPEoC4Gy4%3d&risl=&pid=ImgRaw&r=0"
                            alt="" loading="lazy" draggable="false">
                        <div>
                            <h6 class="text-lg font-medium text-gray-700 dark:text-white">Someone</h6>
                            <p class="text-sm text-gray-500 dark:text-gray-300">Some position</p>
                        </div>
                    </div>
                    <p class="mt-4">Some texts texts texts texts texts texts texts texts.</p>
                </div>
                <div
                    class="nobreak aspect-auto p-6 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                    <div class="flex gap-4">
                        <img class="w-12 h-12 rounded-full"
                            src="https://th.bing.com/th/id/R.07f468b53c25821ba3e6f132d6d25bd8?rik=DErpDe5xln0zkQ&riu=http%3a%2f%2fphotos.tuchong.com%2f280990%2ff%2f3418241.jpg&ehk=VPbVmeTbGYp4eM04ruObNwuRl2Isjytt%2fRaPEoC4Gy4%3d&risl=&pid=ImgRaw&r=0"
                            alt="" loading="lazy" draggable="false">
                        <div>
                            <h6 class="text-lg font-medium text-gray-700 dark:text-white">Someone</h6>
                            <p class="text-sm text-gray-500 dark:text-gray-300">Some position</p>
                        </div>
                    </div>
                    <p class="mt-4">Some texts texts texts texts texts texts texts texts.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.col-3 {
    column-count: 3;
}

.col-2 {
    column-count: 2;
}

.col-3 .nobreak {
    break-inside: avoid;
}

.col-2 .nobreak {
    break-inside: avoid;
}
</style>

<script>
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
    }
}
</script>
