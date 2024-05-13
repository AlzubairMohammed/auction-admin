<template>
 <div>
  <label v-if="label" class="block text-sm text-gray-700"> {{ label }}</label>
  <p v-if="errorMessage" class="error-msg text-red-300">{{ errorMessage }}</p>
  <input
   :type="type"
   ref="inputEl"
   v-model="computedValue"
   :placeholder="placeholder"
   class="form-input"
   :class="{ 'ring-1 ring-red-300': errorMessage }"
   :required="required"
  />
 </div>
</template>
<script setup>
 import { computed, ref, onMounted } from 'vue';
 const props = defineProps({
  label: '',
  placeholder: '',
  modelValue: '',
  errorMessage: '',
  required: false,
  type: '',
 });
 const inputEl = ref(null);
 const emit = defineEmits(['update:modelValue', 'setRef']);

 const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
   emit('update:modelValue', value);
  },
 });
 emit('setRef', inputEl.value);
</script>
<style scoped>
 .error-msg {
  font-size: 0.875rem;
 }
</style>
