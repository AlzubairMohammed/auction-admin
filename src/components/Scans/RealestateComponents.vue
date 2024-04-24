<template>
 <form>
  <div class="mb-5 grid grid-cols-4 gap-2">
   <div class="dropdown">
    <label for="btnRight">Right</label>
    <div class="flex">
     <input
      id="btnRight"
      type="text"
      placeholder=""
      class="form-input w-[50px] ltr:rounded-r-none rtl:rounded-l-none ltr:border-r-0 rtl:border-l-0 font-semibold border border-[#e0e6ed] cursor-pointer"
     />
     <select class="border border-[#e0e6ed] w-[100px] rounded-none select-no-ring:focus" @change="setStyle" @focus="setStyle" ref="select">
      <option>اختار المكون</option>
      <option value="1">two</option>
      <option value="1">three</option>
     </select>
     <div
      class="bg-info text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-info cursor-pointer"
     >
      <icon-trash-lines />
     </div>
    </div>
   </div>
  </div>
 </form>
</template>
<script lang="ts" setup>
 import { useAppStore } from '@/stores/index';
 import IconCode from '@/components/Icons/IconCode.vue';
 import IconCaretDown from '@/components/icon/icon-caret-down.vue';
 import IconTrashLines from '@/components/icon/icon-trash-lines.vue';
 import SingleSelectInput from '@/components/Inputs/SingleSelectInput.vue';
 import { ref } from 'vue';
 const store = useAppStore();
 const select = ref();
 const setStyle = () => {
  select.value.blur();
 };
</script>

<style scoped>
 .select-selected:after {
  border-radius: 0 !important;
 }
</style>
