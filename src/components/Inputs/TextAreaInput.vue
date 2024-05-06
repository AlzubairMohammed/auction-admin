<template>
 <div class="flex">
  <div
   class="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-[#e0e6ed] dark:border-[#17263c] dark:bg-[#1b2e4b] whitespace-nowrap"
  >
   {{ label }}
  </div>
  <p v-if="errorMessage" class="error-msg text-red-300">{{ errorMessage }}</p>
  <textarea
   :required="required"
   :placeholder="placeholder"
   v-model="modelValue"
   rows="4"
   ref="inputEl"
   class="form-textarea ltr:rounded-l-none rtl:rounded-r-none"
   :class="{ 'ring-1 ring-red-300': errorMessage }"
  ></textarea>
 </div>
</template>

<script setup>
 import { ref, computed } from 'vue';
 const props = defineProps({
  label: '',
  placeholder: '',
  modelValue: '',
  required: '',
  errorMessage: '',
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
