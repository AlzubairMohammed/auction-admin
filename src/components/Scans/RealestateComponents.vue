<script setup>
 import { useAppStore } from '@/stores/index';
 import { useScansStore } from '@/stores/scans';
 import IconTrashLines from '@/components/icon/icon-trash-lines.vue';
 import AddingBar from '@/components/AddingBar/AddingBar.vue';
 import { ref, onMounted } from 'vue';
 const store = useAppStore();
 const useScans = useScansStore();
 const select = ref();
 const formData = useScans.scan.components;
 const setStyle = () => {
  select.value.blur();
 };
 onMounted(async () => {
  await useScans.fetchRealestateComponents();
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
      type="text"
      placeholder=""
      class="form-input w-1/6 lg:w-1/5 ltr:rounded-r-none rtl:rounded-l-none ltr:border-r-0 rtl:border-l-0 font-semibold border border-[#e0e6ed] cursor-pointer"
     />
     <select
      v-model="item.id"
      class="border border-[#e0e6ed] w-4/6 lg:w-3/5 rounded-none select-no-ring:focus"
      @change="setStyle"
      @focus="setStyle"
      ref="select"
     >
      <option>اختار المكون</option>
      <option v-for="component in useScans.scan.realestateComponents" :value="component.id">{{ component.name }}</option>
     </select>
     <div
      class="bg-info text-lg w-1/6 lg:w-1/5 text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-info cursor-pointer"
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
