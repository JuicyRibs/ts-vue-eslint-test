import type { Advertisers } from '@/types/Advertisers'
import HttpClient from './http-client'

export default class ApiClient extends HttpClient {
  public constructor() {
    super('https://m4j8wwmlag.execute-api.us-west-2.amazonaws.com/')
  }

  public getAdvertisers = () =>
    this.instance.get<Advertisers[]>('/Test/ds-advertisers')
}
