import type { VideoItem } from "@/interfaces/api-response"
import Grid from '@mui/material/Grid';
import Image from "next/image";


export default function VideoItem({ videoItem }: { videoItem: VideoItem }) {
    const title = videoItem.snippet.title
    const thumbnails = videoItem.snippet.thumbnails
    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <Image src={thumbnails.default.url} alt={title} width={thumbnails.default.width} height={thumbnails.default.width} />
            </Grid>
            <Grid item xs={10}>
                <p>{title}</p>
            </Grid>
        </Grid>
    )
}