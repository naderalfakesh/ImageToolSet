import { useEffect, useState } from "react"
import { create } from "apisauce"
import { photoResource, Photo, PexelsResponse } from "./types"

const getRandomPage = () => Math.floor(Math.random() * 10)
const api = create({
  baseURL: "https://api.pexels.com/v1",
  headers: { Authorization: "563492ad6f9170000100000139ce4ec75dae47ff995f05134859c51b" },
})
interface Params {
  term?: string
  page?: number
  perPage?: number
  orientation?: "square" | "portrait" | "landscape"
}
const getImages = ({ term = null, page = 1, perPage = 1, orientation = "portrait" }: Params) => {
  return term
    ? api.get<PexelsResponse>(
        `/search?query=${term}&orientation=${orientation}&per_page=${perPage}&page=${page}`,
      )
    : api.get<PexelsResponse>(`/curated?per_page=${perPage}&page=${page}`)
}

const ImageMapper = (image: photoResource): Photo => ({
  id: image.id,
  url: image.src.medium,
  urlLarge: image.src.portrait,
  title: image.photographer,
})

const usePexels = () => {
  const [recent, setRecent] = useState<Photo[] | null>(null)
  const [fruits, setFruits] = useState<Photo[] | null>(null)
  const [mobile, setMobile] = useState<Photo[] | null>(null)
  const [error, setError] = useState<null | unknown>(null)
  const [loading, setLoading] = useState(false)

  const getRecent = async () => {
    try {
      setLoading(true)
      const page = getRandomPage()
      const response = await getImages({ page, perPage: 8 })
      const imageList = response.data.photos.map(ImageMapper)
      setRecent(imageList)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  const getFruits = async () => {
    try {
      setLoading(true)
      const page = getRandomPage()
      const response = await getImages({
        term: "fruit",
        page,
        perPage: 12,
        orientation: "portrait",
      })
      const imageList = response.data.photos.map(ImageMapper)
      setFruits(imageList)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  const getMobileImages = async () => {
    try {
      setLoading(true)
      const page = getRandomPage()
      const response = await getImages({
        term: "mobile",
        page,
        perPage: 3,
        orientation: "portrait",
      })

      const imageList = response.data.photos.map(ImageMapper)
      setMobile(imageList)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getRecent()
    getFruits()
    getMobileImages()
  }, [])

  return { recent, fruits, mobile, loading, error }
}

export default usePexels
