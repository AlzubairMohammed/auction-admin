<script setup>
 import { Dialog, DialogOverlay, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
 import { computed, ref } from 'vue';
 import { defineProps } from 'vue';
 import SingleSelectInput from '@/components/Inputs/SingleSelectInput.vue';
 import AddingBar from '@/components/AddingBar/AddingBar.vue';
 import { useScansStore } from '@/stores/scans';

 const useScans = useScansStore();
 const formData = ref({ type: '', name: '', options: [] });

 const props = defineProps({
  title: {
   type: String,
   required: true,
  },
  button: '',
  buttonLabel: '',
  hasCancel: '',
  modelValue: '',
  submitFunction: '',
  formData: null,
  isFeature: '',
 });

 const emit = defineEmits(['update:modelValue', 'cancel', 'confirm']);

 const value = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
 });

 const confirmCancel = (mode) => {
  value.value = false;
  emit(mode);
 };

 const confirm = () => {
  confirmCancel('confirm');
  props.submitFunction(); // Call the submit function when confirming
 };

 const cancel = () => confirmCancel('cancel');

 const addProperty = async () => {
  formData.value.is_feature = props.isFeature;
  await useScans.addProperty(formData.value);
  cancel();
 };
 window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && value.value) {
   cancel();
  }
 });
</script>
<template>
 <TransitionRoot :show="value || false" as="template">
  <Dialog as="div" @close="!value" class="relative z-[51]">
   <TransitionChild
    as="template"
    enter="duration-300 ease-out"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="duration-200 ease-in"
    leave-from="opacity-100"
    leave-to="opacity-0"
   >
    <DialogOverlay class="fixed inset-0 bg-[black]/60" />
   </TransitionChild>

   <div class="fixed inset-0 overflow-y-auto">
    <div class="flex min-h-full items-center justify-center px-4 py-8">
     <TransitionChild
      as="template"
      enter="duration-300 ease-out"
      enter-from="opacity-0 scale-95"
      enter-to="opacity-100 scale-100"
      leave="duration-200 ease-in"
      leave-from="opacity-100 scale-100"
      leave-to="opacity-0 scale-95"
     >
      <DialogPanel class="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark">
       <button
        type="button"
        class="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none"
        @click="cancel"
       >
        <icon-x />
       </button>
       <div class="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">
        {{ formData.id ? 'تعديل خاصية' : 'اضافة خاصية' }}
       </div>
       <div class="p-5">
        <AddingBar :clicked-function="() => formData.options.push({ name: '' })" title="اضافة  خيار" class="mt-3" />
        <form @submit.prevent="addProperty">
         <div class="mb-5">
          <SingleSelectInput
           @on-select="
            (event) => {
             formData.type = event.value;
            }
           "
           :placeholder="'نوع الخاصية'"
           :options="[
            { name: 'نص', value: 'text' },
            { name: 'اختيار واحد من بين متعدد', value: 'single' },
            { name: 'اختيار متعدد من بين متعدد', value: 'multiple' },
           ]"
          />
         </div>
         <div class="mb-5">
          <input id="title" type="text" placeholder="ادخل اسم الخاصية" class="form-input" v-model="formData.name" />
         </div>
         <div v-for="(item, index) in formData.options" class="mb-5">
          <input
           v-if="formData.type === 'multiple'"
           id="title"
           type="text"
           :placeholder="`ادخل الخيار${index + 1}`"
           class="form-input"
           v-model="formData.options[index].name"
          />
          <input v-else id="title" type="text" :placeholder="`ادخل الخيار${index + 1}`" class="form-input" v-model="item.name" />
         </div>
         <div class="ltr:text-right rtl:text-left flex justify-end items-center mt-8">
          <button type="button" class="btn btn-outline-danger" @click="cancel">الغاء</button>
          <button type="submit" class="btn btn-primary ltr:ml-4 rtl:mr-4">
           {{ formData.id ? 'تعديل' : 'اضافة' }}
          </button>
         </div>
        </form>
       </div>
      </DialogPanel>
     </TransitionChild>
    </div>
   </div>
  </Dialog>
 </TransitionRoot>
</template>
