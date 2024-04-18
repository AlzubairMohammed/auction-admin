<template>
 <form style="height: 500px">
  <div class="mb-5">
   <AddingBar title="اضافة خاصية" />
   <div class="grid grid-cols-5 gap-5">
    <MultiselectInput class="col-span-1" />
    <MultiselectInput class="col-span-1" />
    <MultiselectInput class="col-span-1" />
    <MultiselectInput class="col-span-1" />
    <MultiselectInput class="col-span-1" />
    <MultiselectInput class="col-span-1" />
    <MultiselectInput class="col-span-1" />
    <SingleSelectInput class="col-span-1" />
    <SingleSelectInput class="col-span-1" />
    <SingleSelectInput class="col-span-1" />
    <SingleSelectInput class="col-span-1" />
    <BasicInput class="col-span-1" />
   </div>
  </div>
 </form>
</template>

<script lang="ts" setup>
 import MultiselectInput from '@/components/Inputs/MultiselectInput.vue';
 import SingleSelectInput from '@/components/Inputs/SingleSelectInput.vue';
 import BasicInput from '@/components/Inputs/BasicInput.vue';
 import AddingBar from '@/components/AddingBar/AddingBar.vue';
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
