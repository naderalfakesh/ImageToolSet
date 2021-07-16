export type Photo = {
  id: string
  url: string
  urlLarge: string
  title: string
}

export type photoResource = {
  id: string
  src: { medium: string; large: string }
  photographer: string
}

export interface PexelsResponse {
  photos: photoResource[]
}
