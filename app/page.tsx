import type { APIResponse } from "@/interfaces/api-response"
import VideoItem from "@/components/VideoItem"

export default async function Home() {
  const apiKey = process.env.YOUTUBE_API_KEY
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=id%2Csnippet&chart=mostPopular&key=${apiKey}`
  const resp = await fetch(url)
  const respJson: APIResponse = await resp.json()
  console.log(respJson)
  return (<>
    {respJson.items.map((videoItem) => <VideoItem key={videoItem.id} videoItem={videoItem} />)}
  </>)
}