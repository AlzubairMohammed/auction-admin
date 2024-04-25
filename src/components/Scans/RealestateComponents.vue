<script lang="ts" setup>
 import { useAppStore } from '@/stores/index';
 import IconCode from '@/components/Icons/IconCode.vue';
 import IconCaretDown from '@/components/icon/icon-caret-down.vue';
 import IconTrashLines from '@/components/icon/icon-trash-lines.vue';
 import SingleSelectInput from '@/components/Inputs/SingleSelectInput.vue';
 import AddingBar from '@/components/AddingBar/AddingBar.vue';
 import { ref } from 'vue';
 const store = useAppStore();
 const select = ref();
 const formData = ref([]);
 const setStyle = () => {
  select.value.blur();
 };
</script>
<template>
 <AddingBar :clicked-function="() => formData.push({ name: '', id: '' })" title="اضافة خاصية" />
 <form>
  <div class="">
   <div class="flex flex-wrap">
    <div v-for="item in formData" class="w-1/5 flex flex-wrap p-2">
     <input
      v-model="item.name"
      id="btnRight"
      type="text"
      placeholder=""
      class="form-input w-1/6 ltr:rounded-r-none rtl:rounded-l-none ltr:border-r-0 rtl:border-l-0 font-semibold border border-[#e0e6ed] cursor-pointer"
     />
     <select v-model="item.id" class="border border-[#e0e6ed] w-4/6 rounded-none select-no-ring:focus" @change="setStyle" @focus="setStyle" ref="select">
      <option>اختار المكون</option>
      <option value="1">two</option>
      <option value="1">three</option>
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
