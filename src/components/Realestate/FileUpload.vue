<script setup>
 import BasicInput from '@/components/Inputs/BasicInput.vue';
 import FlexibleFileUpload from '@/components/FileUpload/FlexibleFileUpload.vue';
 import AddingBar from '@/components/AddingBar/AddingBar.vue';
 import { useRealestatesStore } from '@/stores/realestates';
 const useRealestateStore = useRealestatesStore();
 const fileItems = useRealestateStore.realestate;
</script>
<template>
 <AddingBar :clicked-function="() => fileItems.filesNames.push({ name: '' })" title="اضافة حقل لتحميل مزيد من الملفات" class="mt-3" />
 <div
  class="mb-5 border border-gray-200 p-3 rounded shadow dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
  v-for="(item, index) in fileItems.filesNames"
  :key="index"
 >
  <div class="flex justify-between">
   <label :for="index" v-if="index < 3">{{ item.name }}</label>
   <BasicInput v-if="index > 2" v-model="item.name" placeholder="الوصف" type="text" class="w-1/8 p-2" />
   <a href="javascript:;" @click="fileItems.filesNames.splice(index, 1)" class="font-size-14">×</a>
  </div>
  <FlexibleFileUpload
   title="اضغط هنا لرفع الملف"
   @file-selected="(file) => (fileItems.files[file.index] = file.value)"
   :index="index"
   class="m-3"
   error-message="الحقل مطلوب"
   required
  />
 </div>
</template>
