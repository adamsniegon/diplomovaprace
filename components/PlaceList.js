import useSWR from 'swr';

export default function PlaceList() {
    const {data: places, error} = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_API}/places`);

    if (error) return <div>failed to load</div>
    if (!places) return <div>loading...</div>

    return (
        <div>
            {places.map(place => (
                <p>{place.name}</p>
            ))}
        </div>
    )
}