<!-- basic -->
<template>
 <div>
  <label v-if="props.labelValue" class="block text-sm text-gray-700"> {{ props.labelValue }}</label>
  <flat-pickr v-model="computedValue" :placeholder="props.placeholder" class="form-input" :config="basic" :required="props.required" ref="inputEl"></flat-pickr>
 </div>
</template>

<!-- script -->
<script lang="ts" setup>
 import { ref, onMounted, computed } from 'vue';
 import { useAppStore } from '@/stores/index';

 //flatpickr
 import flatPickr from 'vue-flatpickr-component';
 import 'flatpickr/dist/flatpickr.css';

 const store = useAppStore();

 const date1 = ref('2022-07-05');
 const basic: any = ref({
  dateFormat: 'Y-m-d',
  position: store.rtlClass === 'rtl' ? 'auto right' : 'auto left',
 });
 const props = defineProps<{
  labelValue: string;
  placeholder: string;
  required: boolean;
  modelValue: {
   type: [String, Number, Boolean, Array, Object];
   default: '';
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
