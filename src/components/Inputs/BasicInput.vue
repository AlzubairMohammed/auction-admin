<template>
 <div>
  <label v-if="label" class="block text-sm text-gray-700"> {{ label }}</label>
  <input type="text" v-model="computedValue" :placeholder="placeholder" class="form-input" :class="classValue" :required="required" />
 </div>
</template>
<script setup>
 import { computed, ref } from 'vue';
 const props = defineProps({
  label: '',
  placeholder: '',
  modelValue: '',
  required: false,
  classValue: '',
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
