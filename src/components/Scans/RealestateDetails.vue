<script setup>
 import MultiselectInput from '@/components/Inputs/MultiselectInput.vue';
 import SingleSelectInput from '@/components/Inputs/SingleSelectInput.vue';
 import BasicInput from '@/components/Inputs/BasicInput.vue';
 import AddingBar from '@/components/AddingBar/AddingBar.vue';
 import PropertiesModal from '@/components/Scans/PropertiesModal.vue';
 import { useScansStore } from '@/stores/scans';
 import { ref } from 'vue';
 const useScans = useScansStore();
 let isAddPropertyModalActive = ref(false);
 const activeModal = () => {
  isAddPropertyModalActive.value = !isAddPropertyModalActive.value;
 };
 const test = ref('');
 const formData = useScans.properties;
 const logTest = () => {
  console.log(test.value);
 };
</script>
<template>
 <PropertiesModal v-model="isAddPropertyModalActive" />
 <form @submit.prevent="logTest">
  <AddingBar :clicked-function="activeModal" title="اضافة خاصية" />
  <div class="flex flex-wrap gap-3" :key="index">
   <div v-for="(item, index) in formData" class="w-1/5">
    <MultiselectInput v-if="item.type === 'multiple'" v-model="test" :options="item.options" :placeholder="item.name" />
    <SingleSelectInput v-else-if="item.type === 'single'" :options="item.options" :placeholder="item.name" />
    <BasicInput v-else :placeholder="item.name" />
   </div>
  </div>
 </form>
</template>

<style scoped></style>
