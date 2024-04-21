<template>
 <div>
  <label v-if="props.label" class="block text-sm text-gray-700"> {{ props.label }}</label>
  <input type="text" v-model="computedValue" :placeholder="props.placeholder" class="form-input" :required="required" />
 </div>
</template>
<script lang="ts" setup>
 import { computed, ref } from 'vue';
 const props = defineProps<{
  label: string;
  placeholder: string;
  modelValue: {
   type: [String, Number, Boolean, Array, Object];
   default: '';
  };
  required: {
   type: Boolean;
   default: false;
  };
 }>();
 const inputEl = ref<HTMLInputElement | null>(null);
 const emit = defineEmits(['update:modelValue', 'setRef']);

 const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
   emit('update:modelValue', value);
  },
 });
 emit('setRef', inputEl.value);
</script>
