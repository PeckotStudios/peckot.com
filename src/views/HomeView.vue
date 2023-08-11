<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import Purpose from '../components/home/Purpose.vue';
import Projects from '../components/home/Projects.vue';
import Hero from '../components/home/Hero.vue';
import Feedback from '../components/home/Feedback.vue';
import JoinNow from '../components/home/JoinNow.vue';
import Blogs from '../components/home/Blogs.vue';
</script>

<template>
	<AppHeader />
	<main class="space-y-40 mb-40">
		<Hero />
		<Projects />
		<Purpose />
		<Feedback />
		<JoinNow />
		<Blogs />
	</main>
	<AppFooter />
</template>
