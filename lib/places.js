import axios from 'axios';

export async function getPlaceIds() {
    const {data} = await axios.get(process.env.STRAPI_API + '/places');
    return data.map(({url}) => {
        return {
            params: {
                id: url
            }
        }
    })
}

export async function getPlace(url) {
    let {data} = await axios.get(process.env.STRAPI_API + `/places?url=${url}`)
    const [place] = JSON.parse(JSON.stringify(data));
    return {
        place
    }
}