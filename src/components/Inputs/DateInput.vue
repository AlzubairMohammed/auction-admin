<!-- basic -->
<template>
 <div>
  <label v-if="props.labelValue" class="block text-sm text-gray-700"> {{ props.labelValue }}</label>
  <flat-pickr
   v-model="computedValue"
   @on-change="logDate"
   :placeholder="props.placeholder"
   class="form-input"
   :config="basic"
   :required="props.required"
   ref="inputEl"
  ></flat-pickr>
 </div>
</template>

<script setup>
 import { ref, onMounted, computed } from 'vue';
 import { useAppStore } from '@/stores/index';

 //flatpickr
 import flatPickr from 'vue-flatpickr-component';
 import 'flatpickr/dist/flatpickr.css';

 const emit = defineEmits(['getDate']);
 const store = useAppStore();

 const computedValue = computed({
  get: () => {
   if (date.value) {
    const dateObj = new Date(date.value);
    return `${dateObj.getFullYear()}-${(dateObj.getMonth() + 1).toString().padStart(2, '0')}-${dateObj.getDate().toString().padStart(2, '0')}`;
   }
   return '';
  },
  set: (val) => {
   date.value = val;
  },
 });
 const logDate = () => {
  emit('getDate', date.value);
 };
 const date = ref('');
 const basic = ref({
  dateFormat: 'Y-m-d',
  position: store.rtlClass === 'rtl' ? 'auto right' : 'auto left',
 });
 const props = defineProps({
  labelValue: '',
  placeholder: '',
  required: false,
 });
</script>
