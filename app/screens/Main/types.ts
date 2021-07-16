export type Photo = {
  id: string
  url: string
  urlLarge: string
  title: string
}

export type photoResource = {
  id: string
  src: {
    medium: string
    large: string
    large2x: string
    original: string
    portrait: string
    landscape: string
  }
  photographer: string
}

export interface PexelsResponse {
  photos: photoResource[]
}
