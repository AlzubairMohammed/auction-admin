<!-- multiple file -->
<template>
 <div class="custom-file-container" data-upload-id="mySecondImage">
  <div class="relative">
   <input class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" @change="handleFileUpload" :multiple="multiple" id="file_input" type="file" />
   <div
    class="block w-full text-sm text-gray-900 border border-gray-300 p-2 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
    :class="{ 'ring-1 ring-red-300': false, 'bg-[powderblue]': fileInput }"
   >
    {{ fileInput ? 'تم الاختيار بنجاح' : title }}
   </div>
  </div>
 </div>
</template>

<!-- script -->
<script setup>
 import { onMounted, ref } from 'vue';

 const emit = defineEmits(['file-selected']);
 const file = ref(null);
 let fileInput = ref(false);
 onMounted(() => {});

 const props = defineProps({
  index: 0,
  errorMessage: '',
  multiple: false,
  title: '',
 });
 const handleFileUpload = (event) => {
  file.value = props.multiple ? event.target.files : event.target.files[0];
  file.index = props.index;
  fileInput.value = true;
  emit('file-selected', file);
 };
</script>
<style scoped>
 .error-msg {
  font-size: 0.875rem;
 }
</style>
