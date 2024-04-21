<!-- basic -->
<template>
 <flat-pickr v-model="date1" class="form-input" :config="basic"></flat-pickr>
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
</script>
