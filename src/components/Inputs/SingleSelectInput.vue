<template>
 <multiselect
  v-model="input3"
  :options="options3"
  class="custom-multiselect"
  :searchable="false"
  :allow-empty="false"
  track-by="name"
  label="name"
  :preselect-first="true"
  selected-label=""
  select-label=""
  deselect-label=""
 ></multiselect>
</template>

<!-- script -->
<script lang="ts" setup>
 import { ref } from 'vue';
 import Multiselect from '@suadelabs/vue3-multiselect';
 import '@suadelabs/vue3-multiselect/dist/vue3-multiselect.css';

 const options3 = ref([{ name: 'Orange' }, { name: 'White', $isDisabled: true }, { name: 'Purple' }]);
 const input3 = ref({ name: 'Orange' });
</script>
