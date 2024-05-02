import request from '@/services/request';
import { defineStore } from 'pinia';
import { useAppStore } from '@/stores/index';
const useApp = useAppStore();
export const useAuctionsStore = defineStore('auctions', {
 state: () => {
  return {
   url: '/auctions',
   auctions: [],
   auction: {
    assignment_number: '',
    auction_type: '',
    start_date: '',
    end_date: '',
    user_id: 2,
    name: '',
    key: 'name',
    value: '',
   },
   auctionErrors: {
    assignment_number: '',
    auction_type: '',
    start_date: '',
    end_date: '',
    name: '',
   },
  };
 },
 getters: {
  getAuctions() {
   return this.auctions;
  },
 },
 actions: {
  fetchAuctions: async function () {
   await request.get(`${this.url}?key=${this.auction.key}&value=${this.auction.value}`).then((response) => {
    this.auctions = response.data;
    if (this.auctions) {
     useApp.isShowMainLoader = false;
    }
   });
  },
  getAuction: async function (id) {
   return await request.get(`${this.url}/${id}`);
  },
  addAuction: async function (auction) {
   this.auctionErrors.assignment_number = '';
   this.auctionErrors.auction_type = '';
   this.auctionErrors.start_date = '';
   this.auctionErrors.end_date = '';
   this.auctionErrors.name = '';

   !auction.assignment_number && (this.auctionErrors.assignment_number = 'الحقل مطلوب');
   !auction.auction_type && (this.auctionErrors.auction_type = 'الحقل مطلوب');
   !auction.start_date && (this.auctionErrors.start_date = 'الحقل مطلوب');
   !auction.end_date && (this.auctionErrors.end_date = 'الحقل مطلوب');
   !auction.name && (this.auctionErrors.name = 'الحقل مطلوب');
   if (Object.values(this.auctionErrors).some((r) => r !== '')) {
    return;
   }
   await request.post(this.url, auction, null, false).then((response) => {
    this.auction = response.data;
   });
  },
  removeAuction(id) {
   request.delete(this.url, id).then(() => {
    this.auctions = this.auctions.filter((r) => r?.id !== id);
   });
  },
  updateAuction(auction) {
   this.auctions = this.auctions.map((r) => (r.id === auction?.id ? auction : r));
  },
 },
});
