import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { MoneyPic } from "@/models/MoneyPic.js"
import { AppState } from "@/AppState.js"

class MoneyPicsService {
  async getAds() {
    const response = await api.get('api/ads')
    const ads = response.data.map(adPojo => new MoneyPic(adPojo))
    AppState.moneyPics = ads
    logger.log(ads)
  }

}
export const moneyPicsService = new MoneyPicsService()