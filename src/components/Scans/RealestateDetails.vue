<script setup>
 import MultiSelectInput from '@/components/Inputs/MultiSelectInput.vue';
 import SingleSelectInput from '@/components/Inputs/SingleSelectInput.vue';
 import BasicInput from '@/components/Inputs/BasicInput.vue';
 import AddingBar from '@/components/AddingBar/AddingBar.vue';
 import PropertiesModal from '@/components/Scans/PropertiesModal.vue';
 import InputDeleteButton from '@/components/Buttons/InputDeleteButton.vue';
 import { useScansStore } from '@/stores/scans';
 import { ref } from 'vue';
 const useScans = useScansStore();
 let isAddPropertyModalActive = ref(false);
 const activeModal = () => {
  isAddPropertyModalActive.value = !isAddPropertyModalActive.value;
 };
 const logTest = () => {
  console.log(test.value);
 };
 const removeProperty = async (id) => {
  await useScans.removeProperty(id);
 };
</script>
<template>
 <PropertiesModal v-model="isAddPropertyModalActive" />
 <form @submit.prevent="logTest">
  <AddingBar :clicked-function="activeModal" title="اضافة خاصية" />
  <div class="flex flex-wrap" :key="index">
   <div v-for="(item, index) in useScans.formProperties.filter((item) => !item.is_feature)" class="w-1/5 p-2">
    <div v-if="item.type === 'multiple'" class="flex flex-wrap">
     <MultiSelectInput
      @on-select="
       (event) => {
        item.value = event.value;
        item.multiple = true;
       }
      "
      :options="item.properties_options"
      :placeholder="item.name"
      class="w-5/6"
      classValue="ltr:rounded-r-none rtl:rounded-l-none ltr:border-r-0 rtl:border-l-0"
     />
     <InputDeleteButton @click="removeProperty(item.id)" class="w-1/6" />
    </div>
    <div v-else-if="item.type === 'single'" class="flex flex-wrap">
     <SingleSelectInput
      @on-select="(event) => (item.value = event)"
      :options="item.properties_options"
      :placeholder="item.name"
      class="w-5/6"
      classValue=" ltr:rounded-r-none rtl:rounded-l-none ltr:border-r-0 rtl:border-l-0"
     />
     <InputDeleteButton @click="removeProperty(item.id)" class="w-1/6" />
    </div>
    <div v-else class="flex flex-wrap">
     <BasicInput :placeholder="item.name" v-model="item.value" class="w-5/6" classValue="ltr:rounded-r-none rtl:rounded-l-none ltr:border-r-0 rtl:border-l-0" />
     <InputDeleteButton @click="removeProperty(item.id)" class="w-1/6" />
    </div>
   </div>
  </div>
 </form>
</template>

<style scoped></style>
