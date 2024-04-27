<template>
 <div ref="el">
  <slot></slot>
 </div>
</template>
<script setup>
 import { onMounted, ref } from 'vue';
 import 'highlight.js/styles/monokai-sublime.css';
 import highlight from 'highlight.js';

 let el = ref(null);

 onMounted(() => {
  if (el.value) {
   let preElement = el.value.querySelector('pre');
   if (preElement) {
    highlight.highlightElement(preElement);
   }
  }
 });
</script>

<style>
 pre.hljs {
  @apply overflow-x-auto !bg-[#191e3a] p-4 rounded-md text-white;
 }
</style>
