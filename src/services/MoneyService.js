import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Money } from "@/models/MoneyPic.js"

class MoneyService {
  async getAds() {
    const response = await api.get('api/ads')
    const ads = response.data.map(adPojo => new Money(adPojo))
    AppState.moneyPics = ads
  }

}
export const moneyService = new MoneyService()