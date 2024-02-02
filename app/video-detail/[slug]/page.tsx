export default function VideoDetail({ params }: { params: { slug: string } }) {
    const id = params.slug
    return (<div>
        <p>{id}</p>
    </div>)
}