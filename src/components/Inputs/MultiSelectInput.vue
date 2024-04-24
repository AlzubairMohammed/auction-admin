<!-- <template>
 <MultiSelect
  display="chip"
  :options="options"
  optionLabel="name"
  placeholder="اختر الخيارات"
  :maxSelectedLabels="3"
  class="w-full md:w-20rem"
  @select="$emit('update:modelValue', $event)"
 />
</template>

script -->

<template>
 <div class="card flex justify-content-center">
  <MultiSelect
   v-model="selectedCities"
   display="chip"
   :options="options"
   optionLabel="name"
   placeholder="Select Cities"
   :maxSelectedLabels="3"
   class="w-full md:w-20rem border border-300"
  />
 </div>
</template>

<script setup>
 import { ref } from 'vue';
 import MultiSelect from 'primevue/multiselect';
 const selectedCities = ref();
 const props = defineProps({
  options: [],
 });
</script>
