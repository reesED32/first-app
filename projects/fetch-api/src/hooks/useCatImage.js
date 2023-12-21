import { useEffect, useState } from "react"

export function useCatImage ( { fact }) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        if (!fact) return
        const threeFirstWord = fact.split(' ', 3).join(' ')
        console.log(threeFirstWord)

        /**
         * I can't do this second fetch cause the API is not returning an URL anymore
         */
        // fetch(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`)
        //     .then(res => res.json() )
        //     .then(response => {
        //         const {url} = response
        //         setImageUrl(`https://cataas.com${url}`)
        //     })

        setImageUrl(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red`)
    }, [fact])

    return { imageUrl }
}