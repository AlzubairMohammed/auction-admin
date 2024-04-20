<script lang="ts" setup>
 import MultiSelectInput from '@/components/Inputs/MultiSelectInput.vue';
 import BasicInput from '@/components/Inputs/BasicInput.vue';
 import { ref } from 'vue';
 let isAddPropertyModalActive = ref(false);
</script>
<template>
 <form class="mb-5 grid grid-cols-1 p-[100px] gap-5 p-5 bg-white shadow-md rounded-md">
  <BasicInput placeholder="اسم المزاد" />
  <BasicInput placeholder="رقم التكليف" />
  <MultiSelectInput placeholder="اختار نوع المزاد" :options="['مزاد١', 'مزاد٢', 'مزاد٣']" />
  <BasicInput placeholder="تاريخ بداية المزاد" />
  <BasicInput placeholder="تاريخ نهاية المزاد" />
  <button type="button" class="btn btn-primary w-1/6 mb-0">التالي</button>
 </form>
</template>

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
