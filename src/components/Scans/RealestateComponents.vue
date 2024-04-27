<script setup>
 import { useAppStore } from '@/stores/index';
 import { useScansStore } from '@/stores/scans';
 import IconCaretDown from '@/components/icon/icon-caret-down.vue';
 import IconTrashLines from '@/components/icon/icon-trash-lines.vue';
 import SingleSelectInput from '@/components/Inputs/SingleSelectInput.vue';
 import AddingBar from '@/components/AddingBar/AddingBar.vue';
 import { ref, onMounted } from 'vue';
 const store = useAppStore();
 const useScans = useScansStore();
 const select = ref();
 const formData = ref([]);
 const realestateComponents = ref([]);
 const setStyle = () => {
  select.value.blur();
 };
 onMounted(async () => {
  await useScans.fetchRealestateComponents();
  realestateComponents.value = useScans.scan.realestateComponents;
 });
</script>
<template>
 <AddingBar :clicked-function="() => formData.push({ value: '', id: '' })" title="اضافة خاصية" />
 <form>
  <div class="">
   <div class="flex flex-wrap">
    <div v-for="item in formData" class="w-1/5 flex flex-wrap p-2">
     <input
      v-model="item.value"
      id="btnRight"
      type="text"
      placeholder=""
      class="form-input w-1/6 ltr:rounded-r-none rtl:rounded-l-none ltr:border-r-0 rtl:border-l-0 font-semibold border border-[#e0e6ed] cursor-pointer"
     />
     <select v-model="item.id" class="border border-[#e0e6ed] w-4/6 rounded-none select-no-ring:focus" @change="setStyle" @focus="setStyle" ref="select">
      <option>اختار المكون</option>
      <option v-for="component in realestateComponents" :value="component.id">{{ component.name }}</option>
     </select>
     <div
      class="bg-info w-1/6 text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-info cursor-pointer"
      @click="formData.splice(formData.indexOf(item), 1)"
     >
      <icon-trash-lines />
     </div>
    </div>
   </div>
  </div>
 </form>
</template>

<style scoped></style>
