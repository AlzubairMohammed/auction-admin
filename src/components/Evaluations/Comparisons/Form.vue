<script setup>
 import MultipleInputs from '@/components/Inputs/MultipleInputs.vue';
 import AddingBar from '@/components/AddingBar/AddingBar.vue';
 import { useComparisonsEvaluationsStore } from '@/stores/comparisonsEvaluations';
 import AddAttributeModal from './AddAttributeModal.vue';
 import IconXCircle from '@/components/icon/icon-x-circle.vue';
 import IconTrashLines from '@/components/icon/icon-trash-lines.vue';
 import SelectRealestateModal from '@/components/Scans/SelectRealestateModal.vue';
 import { useScansStore } from '@/stores/scans';
 import { useRealestatesStore } from '@/stores/realestates';
 import { ref, onMounted } from 'vue';
 import { useRoute } from 'vue-router';
 import ResultModal from '@/components/Evaluations/Comparisons/ResultModal.vue';
 const routes = useRoute();
 const comparisonsEvaluationsStore = useComparisonsEvaluationsStore();
 const scansStore = useScansStore();
 const realestatesStore = useRealestatesStore();
 const scan = scansStore.scan;
 const isAddPropertyModalActive = ref(false);
 const isResultModalActive = ref(false);
 let result = ref(0);
 let properties = comparisonsEvaluationsStore.comparisonsEvaluation.properties;
 let multiArray = comparisonsEvaluationsStore.comparisonsEvaluation.comparisons;
 let isSelectRealestateModalActive = ref(false);
 const realestate = ref(null);

 const onSubmit = async () => {
  const data = {
   comparisons: multiArray,
   properties: properties,
   realestate: {
    id: routes.params.id,
    meters: +realestate.value.document.space,
   },
  };
  await comparisonsEvaluationsStore.addComparisonsEvaluation(data);
  result.value = comparisonsEvaluationsStore.result;
  isResultModalActive.value = true;
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
 onMounted(async () => {
  if (!routes.params?.id) {
   isSelectRealestateModalActive.value = true;
  }
  realestate.value = await realestatesStore.getRealestate(routes.params.id);
  console.log(realestate.value.document);
 });
</script>
<template>
 <SelectRealestateModal v-model="isSelectRealestateModalActive" />
 <AddAttributeModal v-model="isAddPropertyModalActive" />
 <ResultModal v-model="isResultModalActive" :result="result" />
 <form @submit.prevent="onSubmit">
  <AddingBar :clickedFunction="pushToRealestates" title="اضافة عقار" class="mt-3" />
  <table>
   <thead>
    <tr>
     <th class="text-center">عوامل التسوية</th>
     <th class="text-center">عقار التقييم</th>
     <th v-for="(attribute, RealestateIndex) in multiArray" :key="RealestateIndex">
      <div class="flex">
       <IconTrashLines class="w-1/4" @click="multiArray.splice(RealestateIndex, 1)" />
       <span class="w-3/4"> {{ `عقار (${RealestateIndex})` }}</span>
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
     <td>
      <MultipleInputs v-if="index === 3 || index === 4" required read-only="true" :inputOnePlaceholder="index === 3 ? realestate?.document?.space : ''" />
     </td>
     <td v-for="(, RealestateIndex) in multiArray" :key="RealestateIndex">
      <MultipleInputs
       v-model="multiArray[RealestateIndex][index].percentage"
       :name="`compairson_percentage_${index}`"
       type="number"
       required
       class="pt-2"
       :inputOnePlaceholder="index === 0 ? 'السعر' : 'التسوية'"
       :inputTwoPlaceholder="index !== 0 && index !== properties.length - 1 ? 'الوصف' : ''"
       @change="multiArray[RealestateIndex][index].value = $event.target.value"
       typeInputOne="number"
       typeInputTwo="text"
      />
     </td>
    </tr>
   </tbody>
  </table>
  <AddingBar :clickedFunction="() => (isAddPropertyModalActive = true)" title="اضافة عامل" class="mt-3" />
  <div class="flex items-center justify-between">
   <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">تقييم</button>
  </div>
 </form>
</template>
