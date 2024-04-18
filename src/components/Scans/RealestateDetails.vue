<template>
 <form>
  <div class="mb-5">
   <div class="grid grid-cols-5 gap-5">
    <MultiselectInput class="col-span-1" />
    <MultiselectInput class="col-span-1" />
    <MultiselectInput class="col-span-1" />
    <MultiselectInput class="col-span-1" />
    <MultiselectInput class="col-span-1" />
    <MultiselectInput class="col-span-1" />
    <MultiselectInput class="col-span-1" />
   </div>
  </div>
 </form>
</template>

<script lang="ts" setup>
 import MultiselectInput from '@/components/Inputs/MultiselectInput.vue';
</script>

<style scoped>
 .grid {
  display: grid;
 }

 .grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
 }

 .gap-5 {
  gap: 1.25rem;
 }

 .col-span-1 {
  grid-column: span 1;
 }
</style>
