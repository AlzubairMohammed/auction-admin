<template>
 <div>
  <label v-if="label" class="block text-sm text-gray-700"> {{ label }}</label>
  <multiselect
   :placeholder="placeholder"
   :options="options"
   class="custom-multiselect"
   :searchable="true"
   selected-label=""
   select-label=""
   deselect-label=""
   ref="inputEl"
   track-by="id"
   label="name"
   @select="onChange"
   :required="isRequired"
   v-model="computedValue"
  ></multiselect>
 </div>
</template>

<!-- script -->
<script lang="ts" setup>
 import Multiselect from '@suadelabs/vue3-multiselect';
 import '@suadelabs/vue3-multiselect/dist/vue3-multiselect.css';
 import { ref, computed } from 'vue';
 const props = defineProps<{
  options: string[];
  label: string;
  placeholder: string;
  modelValue: {
   type: [String, Number, Boolean, Array, Object];
   default: '';
  };
  isRequired: {
   type: Boolean;
   default: false;
  };
 }>();
 const inputEl = ref<HTMLInputElement | null>(null);
 const emit = defineEmits(['update:modelValue', 'setRef', 'on-select']);

 const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
   emit('update:modelValue', value.id);
  },
 });
 emit('setRef', inputEl.value);
 const onChange = (event) => {
  emit('on-select', event);
 };
</script>
