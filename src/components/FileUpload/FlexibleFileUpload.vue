<!-- multiple file -->
<template>
 <div class="custom-file-container" data-upload-id="mySecondImage">
  <div class="label-container"><label></label> <a hidden href="javascript:;" class="custom-file-container__image-clear" title="Clear Image">×</a></div>
  <label class="custom-file-container__custom-file">
   <input type="file" @change="handleFileUpload" class="custom-file-container__custom-file__custom-file-input" multiple />
   <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
   <span class="custom-file-container__custom-file__custom-file-control ltr:pr-20 rtl:pl-20"></span>
  </label>
  <div hidden class="custom-file-container__image-preview"></div>
 </div>
</template>

<!-- script -->
<script lang="ts" setup>
 import { onMounted, ref, computed } from 'vue';
 import FileUploadWithPreview from 'file-upload-with-preview';
 import 'file-upload-with-preview/dist/file-upload-with-preview.min.css';
 import '@/assets/css/file-upload-preview.css';

 const emit = defineEmits(['file-selected']);
 const file = ref(null);
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

 const props = defineProps<{
  index: {
   type: Number;
  };
 }>();
 const handleFileUpload = (event) => {
  file.value = event.target.files[0];
  file.index = props.index;
  emit('file-selected', file);
 };
</script>
