<script setup>
 import { ref } from 'vue';
 import MultiSelect from 'primevue/multiselect';

 const selectedCities = ref();
 const props = defineProps({
  options: [],
  placeholder: '',
  classValue: '',
  errorMessage: '',
 });
</script>

<template>
 <div class="card flex justify-content-center custom-multiselect">
  <p v-if="errorMessage" class="error-msg text-red-300">{{ errorMessage }}</p>
  <MultiSelect
   style=""
   v-model="selectedCities"
   :options="options"
   optionLabel="name"
   :placeholder="placeholder"
   :maxSelectedLabels="3"
   class="w-full md:w-20rem border border-md"
   :class="{ 'ring-1 ring-red-300': errorMessage }"
   @select="$emit('update:modelValue', $event)"
  />
 </div>
</template>

<style scoped>
 .custom-multiselect .p-multiselect .p-inputtext .p-component:focus {
  border-color: gray !important;
 }
</style>
<style scoped>
 .error-msg {
  font-size: 0.875rem;
 }
</style>
