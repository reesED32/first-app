const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = () => {
    return fetch(CAT_ENDPOINT_RANDOM_FACT)
                .then(res => {
                    if(!res.ok) throw new Error('Error with the res from fact')
                    return res.json()
                })
                .then(data => {
                    const {fact} = data
                    return fact
                })
                .catch((err) => {
                    throw new Error('Error fetching fact')
                })
}


/**
 * O podría ser con async await
 */
// export const getRandomFact = async () => {
//     try {
//         const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
//         if (!res.ok) throw new Error('Error with the res from fact')
//         const data = await res.json()
//         const { fact } = data
//         return fact
//     } catch (err) {
//         throw new Error('Error fetching fact')
//     }
// }