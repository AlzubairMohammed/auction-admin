<template>
 <div>
  <label v-if="props.label" class="block text-sm text-gray-700"> {{ props.label }}</label>
  <multiselect
   :placeholder="props.placeholder"
   :options="props.options"
   class="custom-multiselect"
   :searchable="true"
   selected-label=""
   select-label=""
   deselect-label=""
  ></multiselect>
 </div>
</template>

<!-- script -->
<script lang="ts" setup>
 import Multiselect from '@suadelabs/vue3-multiselect';
 import '@suadelabs/vue3-multiselect/dist/vue3-multiselect.css';
 const props = defineProps<{
  options: string[];
  label: string;
  placeholder: string;
 }>();
</script>
