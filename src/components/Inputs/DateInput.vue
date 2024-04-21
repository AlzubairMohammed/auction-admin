<!-- basic -->
<template>
 <div>
  <label v-if="props.labelValue" class="block text-sm text-gray-700"> {{ props.labelValue }}</label>
  <flat-pickr :placeholder="props.placeholder" class="form-input" :config="basic"></flat-pickr>
 </div>
</template>

<!-- script -->
<script lang="ts" setup>
 import { ref, onMounted } from 'vue';
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
 }>();
</script>
