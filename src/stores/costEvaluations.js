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
   console.log(this.url);
   await request
    .post(this.url, this.costEvaluation, {
     headers: {
      'Content-Type': 'application/json',
     },
    })
    .then((response) => {
     this.list.push(response.data);
    });
  },
 },
});
