<script setup>
 import { Dialog, DialogOverlay, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
 import { computed, ref } from 'vue';
 import { defineProps } from 'vue';
 import { useComparisonsEvaluationsStore } from '@/stores/comparisonsEvaluations';
 const comparisonsEvaluationsStore = useComparisonsEvaluationsStore();
 let properties = comparisonsEvaluationsStore.comparisonsEvaluation.properties;
 let comparisons = comparisonsEvaluationsStore.comparisonsEvaluation.comparisons;
 let propertyName = ref('');
 const props = defineProps({
  title: {
   type: String,
   required: true,
  },
  button: {
   type: String,
   default: 'info',
  },
  buttonLabel: {
   type: String,
   default: '',
  },
  hasCancel: Boolean,
  modelValue: {
   type: [String, Number, Boolean],
   default: null,
  },
  submitFunction: '',
  params: '',
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
  properties.splice(properties.length - 1, 0, propertyName.value);
  comparisons.forEach((comparison) => {
   comparison.splice(comparison.length - 1, 0, {
    value: '',
    percentage: '',
   });
  });
 };

 const cancel = () => confirmCancel('cancel');

 window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && value.value) {
   cancel();
  }
 });
</script>
<template>
 <TransitionRoot appear :show="value || false" as="template">
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
        {{ params?.id ? 'تعديل معامل' : 'اضافة معامل' }}
       </div>
       <div class="p-5">
        <form @submit.prevent="confirm">
         <div class="mb-5">
          <input id="title" type="text" placeholder="ادخل اسم المعامل" class="form-input" v-model="propertyName" />
         </div>
         <div class="ltr:text-right rtl:text-left flex justify-end items-center mt-8">
          <button type="button" class="btn btn-outline-danger" @click="cancel">الغاء</button>
          <button type="submit" class="btn btn-primary ltr:ml-4 rtl:mr-4">
           {{ params?.id ? 'تعديل' : 'اضافة' }}
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
