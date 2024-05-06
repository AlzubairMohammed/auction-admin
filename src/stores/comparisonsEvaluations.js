import request from '@/services/request';
import { defineStore } from 'pinia';
export const useComparisonsEvaluationsStore = defineStore('comparisonsEvaluations', {
 state: () => {
  return {
   url: '/comparisonsEvaluations',
   comparisonsEvaluations: [],
   comparisonsEvaluation: {
    properties: ['السعر', 'ظروف السوق', 'شروط التمويل', 'الاستخدام', 'عدد الشوارع', 'المرجح الموزون'],
    comparisons: [
     [
      {
       value: '',
       percentage: '',
      },
      {
       value: '',
       percentage: '',
      },
      {
       value: '',
       percentage: '',
      },
      {
       value: '',
       percentage: '',
      },
      {
       value: '',
       percentage: '',
      },
      {
       value: '',
       percentage: '',
      },
     ],
     [
      {
       value: '',
       percentage: '',
      },
      {
       value: '',
       percentage: '',
      },
      {
       value: '',
       percentage: '',
      },
      {
       value: '',
       percentage: '',
      },
      {
       value: '',
       percentage: '',
      },
      {
       value: '',
       percentage: '',
      },
     ],
     [
      {
       value: '',
       percentage: '',
      },
      {
       value: '',
       percentage: '',
      },
      {
       value: '',
       percentage: '',
      },
      {
       value: '',
       percentage: '',
      },
      {
       value: '',
       percentage: '',
      },
      {
       value: '',
       percentage: '',
      },
     ],
    ],
   },
  };
 },
 getters: {
  getComparisonsEvaluations() {
   return this.comparisonsEvaluations;
  },
 },
 actions: {
  fetchComparisonsEvaluations() {
   request.get(this.url).then((response) => {
    this.comparisonsEvaluations = response.data;
   });
  },
  getComparisonsEvaluation(id) {
   return request.get(`${this.url}/${id}`);
  },
  addComparisonsEvaluation: async function (comparisonsEvaluation) {
   await request
    .post(
     this.url,
     comparisonsEvaluation,
     {
      headers: {
       'Content-Type': 'application/json',
      },
     },
     false
    )
    .then((response) => {
     this.comparisonsEvaluation = response.data;
    });
  },
  removeComparisonsEvaluation(id) {
   request.delete(this.url, id).then(() => {
    this.comparisonsEvaluations = this.comparisonsEvaluations.filter((r) => r.id !== id);
   });
  },
  updateRealestate(realestate) {
   this.realestates = this.realestates.map((r) => (r.id === realestate.id ? realestate : r));
  },
 },
});
