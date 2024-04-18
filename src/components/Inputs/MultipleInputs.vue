<template>
 <div class="flex">
  <input
   v-if="inputOnePlaceholder"
   type="text"
   :placeholder="inputOnePlaceholder"
   v-model="inputOneValue"
   class="form-input ltr:border-r-0 rtl:border-l-0 focus:!border-r focus:!border-l rounded-none flex-1"
   :class="{ 'ltr:!border-r rtl:!border-l': !inputTwoPlaceholder }"
  />
  <input
   v-if="inputTwoPlaceholder"
   type="text"
   :placeholder="inputTwoPlaceholder"
   v-model="inputTwoValue"
   class="form-input ltr:rounded-l-none rtl:rounded-r-none flex-1"
   :class="{ 'ltr:border-r rtl:border-l': !inputOnePlaceholder }"
  />
 </div>
</template>

<script lang="ts" setup>
 import { defineProps } from 'vue';

 const props = defineProps({
  inputOnePlaceholder: {
   type: String,
  },
  inputTwoPlaceholder: {
   type: String,
  },
  inputOneValue: {
   type: String,
   default: '',
  },
  inputTwoValue: {
   type: String,
   default: '',
  },
 });
</script>
