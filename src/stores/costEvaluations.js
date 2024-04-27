import { defineStore } from 'pinia';
export const useCostEvaluationsStore = defineStore('costEvaluations', {
 state: () => {
  return {
   list: [],
   isLoading: false,
   searchQuery: '',
   total: 0,
   page: 1,
   perPage: 10,
   directCostOperations: [],
   IndirectCostOperations: [],
  };
 },
 actions: {
  reset() {
   this.list = [];
   this.total = 0;
   this.page = 1;
   this.perPage = 10;
   this.isOpenFilter = false;
   this.filter = {
    status: null,
    startDate: '',
    endDate: '',
   };
  },
 },
});
