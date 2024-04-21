<template>
 <label v-if="props.label" class="block text-sm text-gray-700"> {{ props.label }}</label>
 <multiselect
  v-model="props.options[0]"
  :options="props.options"
  class="custom-multiselect"
  :searchable="true"
  selected-label=""
  select-label=""
  deselect-label=""
  placeholder=""
 ></multiselect>
</template>

<!-- script -->
<script lang="ts" setup>
 import Multiselect from '@suadelabs/vue3-multiselect';
 import '@suadelabs/vue3-multiselect/dist/vue3-multiselect.css';
 const props = defineProps<{
  options: { name: string }[];
  label: string;
 }>();
</script>
