<script setup>
import Stats from '../components/Stats.vue';
import Features from '../components/Features.vue';
import HeroSection from '../components/HeroSection.vue';
import Testimonials from '../components/Testimonials.vue';
import CallToAction from '../components/CallToAction.vue';
import Blog from '../components/Blog.vue';
</script>

<template>
	<main class="space-y-40 mb-40">
		<HeroSection/>
		<Features/>
		<Stats/>
		<Testimonials/>
		<CallToAction/>
		<Blog/>
	</main>
</template>
