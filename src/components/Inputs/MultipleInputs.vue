<template>
 <div class="flex">
  <input
   v-if="inputOnePlaceholder"
   :placeholder="inputOnePlaceholder"
   v-model="computedValue"
   class="form-input ltr:border-r-0 rtl:border-l-0 focus:!border-r focus:!border-l rounded-none flex-1"
   :class="{ 'ltr:!border-r rtl:!border-l': !inputTwoPlaceholder }"
   :required="required"
   ref="inputEl"
   :type="typeInputOne"
   :readonly="readOnly"
  />
  <input
   v-if="inputTwoPlaceholder"
   :placeholder="inputTwoPlaceholder"
   @change="$emit('change', $event)"
   class="form-input ltr:rounded-l-none rtl:rounded-r-none flex-1"
   :class="{ 'ltr:border-r rtl:border-l': !inputOnePlaceholder }"
   :type="typeInputTwo"
  />
 </div>
</template>

<script setup>
 import { defineProps, ref, computed } from 'vue';

 const props = defineProps({
  inputOnePlaceholder: '',
  inputTwoPlaceholder: '',
  inputOneValue: '',
  inputTwoValue: '',
  typeInputOne: '',
  typeInputTwo: '',
  required: false,
  modelValue: '',
  readOnly: false,
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
