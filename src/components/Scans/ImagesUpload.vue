<script setup>
 import BasicInput from '@/components/Inputs/BasicInput.vue';
 import FlexibleFileUpload from '@/components/FileUpload/FlexibleFileUpload.vue';
 import AddingBar from '@/components/AddingBar/AddingBar.vue';
 import { useScansStore } from '@/stores/scans';
 import { ref } from 'vue';
 const useScans = useScansStore();
 const fileItems = useScans;
 let isAddFileModalActive = ref(false);
 const handleFileUpload = (file) => {
  fileItems.images[file.index] = file.value;
  console.log(fileItems);
 };

 const fileInput = ref(null);
</script>
<template>
 <AddingBar :clickedFunction="() => fileItems.imagesNames.push('')" title="اضافة حقل لتحميل مزيد من الصور" class="mt-3" />
 <div
  class="mb-5 border border-gray-200 p-3 rounded shadow dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
  v-for="(item, index) in fileItems.imagesNames"
  :key="index"
 >
  <div class="flex justify-between">
   <label :for="index" v-if="item">{{ item.description }}</label>
   <BasicInput v-else v-model="fileItems.imagesNames[index].description" placeholder="الوصف" type="text" class="w-1/8 p-2" />
   <a href="javascript:;" @click="fileItems.imagesNames.splice(index, 1)" class="font-size-14">×</a>
  </div>
  <FlexibleFileUpload @file-selected="handleFileUpload" :index="index" class="m-3" required />
 </div>
</template>
