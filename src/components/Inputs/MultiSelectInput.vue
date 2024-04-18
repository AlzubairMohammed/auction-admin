<template>
 <multiselect
  v-model="input6"
  :options="options"
  class="custom-multiselect"
  :multiple="true"
  :searchable="false"
  :close-on-select="false"
  :clear-on-select="false"
  :preserve-search="true"
  placeholder="اختار خيار"
  selected-label=""
  select-label=""
  deselect-label=""
  tag-placeholder=""
  :taggable="true"
  :tag-position="tagPosition"
  :tag-class="tagClass"
  :tag-placeholder="tagPlaceholder"
  option-color="#000"
 >
  <template #singleLabel="{ option }">
   <div class="custom-option">
    <input type="checkbox" :value="option" v-model="input6" :id="option" class="custom-checkbox" />
    <label :for="option" class="custom-label">{{ option }}</label>
   </div>
  </template>
 </multiselect>
</template>

<!-- script -->
<script lang="ts" setup>
 import { ref } from 'vue';
 import Multiselect from '@suadelabs/vue3-multiselect';
 import '@suadelabs/vue3-multiselect/dist/vue3-multiselect.css';

 const options = ref(['خيار', 'اثنين', 'ثلاثة', 'أربعة', 'خمسة']);
 const input6 = ref([]);
 const tagPosition = ref('top');
 const tagClass = ref('custom-tag');
 const tagPlaceholder = ref('Add a custom tag');

 // ... your other code ...
</script>
