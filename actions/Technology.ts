import { internalRequest } from '~/utils/Request'
import { HttpMethod, Technology } from '~/utils/Types'
import { urls } from '~/utils/Urls'

const technologyUrl = urls.baseUrl + urls.api.technology

export const getAllTechnologies = () => {
  return internalRequest<Technology[]>({
    url: technologyUrl,
    method: HttpMethod.GET,
  })
}

export const createTechnology = (technologyName: string, imagePath: string) => {
  return internalRequest<Technology>({
    url: technologyUrl,
    method: HttpMethod.POST,
    body: {
      technologyName,
      imagePath,
    },
  })
}
