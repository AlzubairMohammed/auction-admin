<template>
 <div class="mb-5">
  <multiselect
   v-model="input1"
   :options="options"
   class="custom-multiselect"
   :searchable="false"
   :preselect-first="true"
   :allow-empty="false"
   :disabled="true"
   selected-label=""
   select-label=""
   deselect-label=""
  ></multiselect>
 </div>
</template>
<script>
 export default {
  data() {
   return {
    input1: null,
    options: [
     { value: 'option1', label: 'Option 1' },
     { value: 'option2', label: 'Option 2' },
     { value: 'option3', label: 'Option 3' },
     // Add more options here
    ],
   };
  },
 };
</script>
