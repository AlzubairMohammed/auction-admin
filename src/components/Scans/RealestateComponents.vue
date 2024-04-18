<template>
 <form style="height: 500px">
  <div class="mb-5 grid grid-cols-5 gap-5">
   <div class="dropdown">
    <label for="btnRight">Right</label>
    <div class="flex">
     <input
      id="btnRight"
      type="text"
      placeholder=""
      class="form-input w-[50px] ltr:rounded-r-none rtl:rounded-l-none ltr:border-r-0 rtl:border-l-0 font-semibold border border-secondary cursor-pointer"
     />
     <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="0" class="align-middle input-group-dropodwn">
      <div
       class="bg-white dark:bg-[#1b2e4b] text-secondary flex justify-center items-center rounded-none px-3 font-semibold border border-secondary cursor-pointer h-full"
      >
       <icon-caret-down class="w-[80px] h-5" />
      </div>
      <template #content="{ close }">
       <ul @click="close()">
        <li><a href="javascript:;">Action</a></li>
        <li><a href="javascript:;">Another action</a></li>
        <li><a href="javascript:;">Something else here</a></li>
        <li><a href="javascript:;">Separated link</a></li>
       </ul>
      </template>
     </Popper>
     <div
      class="bg-secondary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-secondary cursor-pointer"
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
 const store = useAppStore();
</script>
