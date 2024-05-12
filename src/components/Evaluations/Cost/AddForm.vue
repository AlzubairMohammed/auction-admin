<script setup>
 import DirectCost from '@/components/Evaluations/Cost/DirectCost.vue';
 import IndirectCost from '@/components/Evaluations/Cost/IndirectCost.vue';
 import DepreciationRate from '@/components/Evaluations/Cost/DepreciationRate.vue';
 import SelectRealestateModal from '@/components/Evaluations/Cost/SelectRealestateModal.vue';
 import { onMounted, ref } from 'vue';
 import { useRoute } from 'vue-router';
 import { useCostEvaluationsStore } from '@/stores/costEvaluations';
 const costEvaluation = useCostEvaluationsStore().costEvaluation;
 const isSelectRealestateModalActive = ref(false);
 onMounted(() => {
  if (!useRoute().params?.id) {
   isSelectRealestateModalActive.value = true;
  } else {
   costEvaluation.realestate_id = useRoute().params?.id;
  }
 });
</script>
<template>
 <SelectRealestateModal v-model="isSelectRealestateModalActive" />
 <DirectCost />
 <IndirectCost />
 <DepreciationRate />
</template>
