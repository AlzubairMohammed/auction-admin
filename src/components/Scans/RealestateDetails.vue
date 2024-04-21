<script lang="ts" setup>
 import MultiselectInput from '@/components/Inputs/MultiselectInput.vue';
 import SingleSelectInput from '@/components/Inputs/SingleSelectInput.vue';
 import BasicInput from '@/components/Inputs/BasicInput.vue';
 import AddingBar from '@/components/AddingBar/AddingBar.vue';
 import AttributeModal from '@/components/Scans/AttributeModal.vue';
 import { ref } from 'vue';
 let isAddPropertyModalActive = ref(false);
 const activeModal = () => {
  isAddPropertyModalActive.value = !isAddPropertyModalActive.value;
 };
</script>
<template>
 <AttributeModal v-model="isAddPropertyModalActive" :params="{ id: null, title: '' }" />
 <form>
  <div class="mb-5">
   <AddingBar :clicked-function="activeModal" title="اضافة خاصية" />
   <div class="grid grid-cols-5 gap-5">
    <MultiselectInput class="col-span-1" />
    <SingleSelectInput :options="['1', '2', '3']" class="col-span-1" />
    <BasicInput class="col-span-1" />
   </div>
  </div>
 </form>
</template>

<style scoped>
 .grid {
  display: grid;
 }

 .grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
 }

 .gap-5 {
  gap: 1.25rem;
 }

 .col-span-1 {
  grid-column: span 1;
 }
</style>
