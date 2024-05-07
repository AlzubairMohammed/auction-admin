import { defineStore } from 'pinia';
import request from '@/services/request';
export const useCostEvaluationsStore = defineStore('costEvaluations', {
 state: () => {
  return {
   url: '/costEvaluations',
   list: [],
   isLoading: false,
   searchQuery: '',
   total: 0,
   page: 1,
   perPage: 10,
   costEvaluation: {
    realestate_id: '',
    directCostOperations: [],
    indirectCostOperations: [],
    depreciationRate: {},
   },
  };
 },
 actions: {
  addCostEvaluation: async function () {
   const responseData = await request
    .post(
     this.url,
     this.costEvaluation,
     {
      headers: {
       'Content-Type': 'application/json',
      },
     },
     false
    )
    .then((response) => {
     return response.depreciationData;
    });
   return responseData;
  },
 },
});
