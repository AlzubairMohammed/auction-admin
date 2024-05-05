<script setup>
 import { ref } from 'vue';
 import MultipleInputs from '@/components/Inputs/MultipleInputs.vue';
 import AddingBar from '@/components/AddingBar/AddingBar.vue';
 import { useComparisonsEvaluationsStore } from '@/stores/comparisonsEvaluations';
 import AddAttributeModal from './AddAttributeModal.vue';
 import IconXCircle from '@/components/icon/icon-x-circle.vue';
 import IconTrashLines from '@/components/icon/icon-trash-lines.vue';

 const comparisonsEvaluationsStore = useComparisonsEvaluationsStore();
 const isAddPropertyModalActive = ref(false);
 let result = ref(0.0);
 let properties = comparisonsEvaluationsStore.comparisonsEvaluation.properties;
 const multiArray = comparisonsEvaluationsStore.comparisonsEvaluation.comparisons;

 const onSubmit = async () => {
  const data = {
   comparisons: multiArray,
   properties: properties,
   realestate: {
    id: 7,
    meters: 2250,
   },
  };
  comparisonsEvaluationsStore.addComparisonsEvaluation(data);
  result.value = comparisonsEvaluationsStore.comparisonsEvaluation;
 };
 const pushToRealestates = () => {
  const length = multiArray.length;
  multiArray.push([]);
  for (let i = 0; i < properties.length; i++) {
   multiArray[length].push({ value: '', percentage: '' });
  }
 };

 const trashProperty = (index) => {
  properties.splice(index, 1);
  multiArray.forEach((realestate) => {
   realestate.splice(index, 1);
  });
 };
</script>
<template>
 <AddAttributeModal v-model="isAddPropertyModalActive" />
 <form @submit.prevent="onSubmit">
  <AddingBar :clicked-function="pushToRealestates" title="اضافة عقار" class="mt-3" />
  <table>
   <thead>
    <tr>
     <th class="text-center">عوامل التسوية</th>
     <th v-for="(attribute, RealestateIndex) in multiArray" :key="RealestateIndex">
      <div class="flex">
       <IconTrashLines class="w-1/4" v-if="RealestateIndex !== 0" @click="multiArray.splice(RealestateIndex, 1)" />
       <span class="w-3/4"> {{ RealestateIndex === 0 ? 'عقار التقييم' : `عقار (${RealestateIndex})` }}</span>
      </div>
     </th>
    </tr>
   </thead>
   <tbody>
    <tr v-for="(, index) in properties" :key="index">
     <td class="text-right">
      <div class="flex">
       <IconXCircle @click="trashProperty(index)" class="w-1/4" />
       <span class="w-3/4">{{ properties[index] }}</span>
      </div>
     </td>
     <td v-for="(, RealestateIndex) in multiArray" :key="RealestateIndex">
      <MultipleInputs
       v-if="RealestateIndex === 0"
       v-model="multiArray[RealestateIndex][index].value"
       :inputOnePlaceholder="index === 0 ? 'السعر' : index === properties.length - 1 ? 'لايوجد' : 'التسوية'"
       required
      />
      <MultipleInputs
       v-if="RealestateIndex !== 0"
       v-model="multiArray[RealestateIndex][index].percentage"
       :name="`compairson_percentage_${index}`"
       type="number"
       required
       class="pt-2"
       :inputOnePlaceholder="index === 0 ? 'السعر' : 'التسوية'"
       inputTwoPlaceholder="القيمة"
       :input-one-value="multiArray[RealestateIndex][index].value"
      />
     </td>
    </tr>
   </tbody>
  </table>
  <AddingBar title="اضافة عامل" class="mt-3" />
  <div class="flex items-center justify-between">
   <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">تقييم</button>
  </div>
 </form>
</template>
