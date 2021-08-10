import axios from 'axios';

/**
 * Get all possibble places from CMS to prepare paths for static generation
 * @returns URL slug for all places as id
 */
export async function getPlaceIds() {
    const {data} = await axios.get(process.env.NEXT_PUBLIC_STRAPI_API + '/places');
    return data.map(({url}) => {
        return {
            params: {
                id: url
            }
        }
    })
}

/**
 * Get data about specific place from CMS
 * @param {*} url Specific place URL slug
 * @returns specific place data
 */
export async function getPlace(url) {
    let {data} = await axios.get(process.env.NEXT_PUBLIC_STRAPI_API + `/places?url=${url}`)
    const [place] = JSON.parse(JSON.stringify(data));
    return {
        place
    }
}