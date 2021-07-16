export type Photo = {
  id: string
  url: string
  title: string
}

export type photoResource = { id: string; src: { medium: string }; photographer: string }

export interface PexelsResponse {
  photos: photoResource[]
}
