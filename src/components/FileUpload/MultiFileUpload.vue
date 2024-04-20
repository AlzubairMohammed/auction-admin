<!-- multiple file -->
<template>
 <div class="custom-file-container" data-upload-id="mySecondImage">
  <div class="label-container"><label>رفع الملفات</label> <a href="javascript:;" class="custom-file-container__image-clear" title="Clear Image">×</a></div>
  <label class="custom-file-container__custom-file">
   <input type="file" class="custom-file-container__custom-file__custom-file-input" multiple />
   <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
   <span class="custom-file-container__custom-file__custom-file-control ltr:pr-20 rtl:pl-20"></span>
  </label>
  <div class="custom-file-container__image-preview"></div>
 </div>
</template>

<!-- script -->
<script setup>
 import { onMounted } from 'vue';
 import FileUploadWithPreview from 'file-upload-with-preview';
 import 'file-upload-with-preview/dist/file-upload-with-preview.min.css';
 import '@/assets/css/file-upload-preview.css';

 onMounted(() => {
  // multiple image upload
  new FileUploadWithPreview('mySecondImage', {
   images: {
    baseImage: '/assets/images/file-preview.svg',
    backgroundImage: '',
   },
   multiple: true,

   text: { chooseFile: 'اختر الملف', browse: 'تصفح' },
  });
 });
</script>
