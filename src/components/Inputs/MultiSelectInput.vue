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
 <div class="card flex justify-content-center custom-multiselect">
  <MultiSelect
   style=""
   v-model="selectedCities"
   :options="options"
   optionLabel="name"
   :placeholder="placeholder"
   :maxSelectedLabels="3"
   class="w-full md:w-20rem border border-md"
   @select="$emit('update:modelValue', $event)"
  />
 </div>
</template>

<script setup>
 import { ref } from 'vue';
 import MultiSelect from 'primevue/multiselect';
 const selectedCities = ref();
 const props = defineProps({
  options: [],
  placeholder: '',
 });
</script>

<style scoped>
 .custom-multiselect .p-multiselect .p-inputtext .p-component:focus {
  border-color: gray !important;
 }
</style>
