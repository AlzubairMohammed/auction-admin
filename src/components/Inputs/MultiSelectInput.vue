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
   :class="classValue"
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
  classValue: '',
 });
</script>

<style scoped>
 .custom-multiselect .p-multiselect .p-inputtext .p-component:focus {
  border-color: gray !important;
 }
</style>
