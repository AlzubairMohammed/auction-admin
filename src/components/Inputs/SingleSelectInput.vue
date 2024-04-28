<template>
 <div>
  <label v-if="label" class="block text-sm text-gray-700"> {{ label }}</label>
  <p v-if="errorMessage" class="error-msg text-red-300">{{ errorMessage }}</p>
  <multiselect
   :placeholder="placeholder"
   :options="options"
   class="custom-multiselect"
   :class="{ 'ring-1 ring-red-300 rounded': errorMessage }"
   :searchable="true"
   selected-label=""
   select-label=""
   deselect-label=""
   ref="inputEl"
   track-by="value"
   label="name"
   @select="onChange"
   :required="isRequired"
   v-model="computedValue"
  ></multiselect>
 </div>
</template>

<!-- script -->
<script setup>
 import Multiselect from '@suadelabs/vue3-multiselect';
 import '@suadelabs/vue3-multiselect/dist/vue3-multiselect.css';
 import { ref, computed, onMounted } from 'vue';
 const placeholder = ref('');
 const props = defineProps({
  options: '',
  label: '',
  placeholder: '',
  modelValue: '',
  isRequired: false,
  errorMessage: '',
 });
 placeholder.value = props.placeholder;
 const inputEl = ref(null);
 const emit = defineEmits(['update:modelValue', 'setRef', 'on-select']);

 const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
   emit('update:modelValue', value.value);
  },
 });
 onMounted(() => {
  emit('setRef', inputEl.value);
 });
 const onChange = (event) => {
  placeholder.value = event.name;
  emit('on-select', event);
 };
</script>
<style scoped>
 .error-msg {
  font-size: 0.875rem;
 }
</style>
