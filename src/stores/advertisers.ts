import ApiClient from '@/apis/client'
import type { Advertisers } from '@/types/Advertisers'
import { defineStore } from 'pinia'

const api = new ApiClient()

const useAdvertisersStore = defineStore('advertisers', {
  state: () => ({
    advertisers: [] as Advertisers[] | undefined,
  }),
  getters:{
    count: (state) => state.advertisers?.length || 0
  },
  actions: {
    async getAll() {
        const resp = await api.getAdvertisers()
        this.advertisers = resp
    }
  },
})

export default useAdvertisersStore
