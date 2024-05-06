<script setup>
 import DirectCost from '@/components/Evaluations/Cost/DirectCost.vue';
 import IndirectCost from '@/components/Evaluations/Cost/IndirectCost.vue';
 import DepreciationRate from '@/components/Evaluations/Cost/DepreciationRate.vue';
 import SelectRealestateModal from '@/components/Evaluations/Cost/SelectRealestateModal.vue';
 import { ref } from 'vue';
 const isAddPropertyModalActive = ref(true);
</script>
<template>
 <SelectRealestateModal v-model="isAddPropertyModalActive" />
 <DirectCost />
 <IndirectCost />
 <DepreciationRate />
</template>
