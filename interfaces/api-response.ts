export interface VideoItem {
    id: string
    snippet: {
        publishiedAt: string
        title: string
        description: string
        thumbnails: {
            default: {
                url: string
                width: number
                height: number
            }
        }
    }
}

export interface APIResponse {
    items: VideoItem[]
}