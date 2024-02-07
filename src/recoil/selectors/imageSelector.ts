import { selector } from "recoil"
import { searchState } from "../atoms/searchState"
import { pageState } from "../atoms/pageState"

import axios from "axios"

const API_URL = "https://api.unsplash.com/search/photos"
const API_KEY = "mXSaXElt5u9C4xAlm4bVyaiywj9ZRoElzokF0a9_HAU"
const PER_PAGE = 30

export const imageList = selector({
    key: "imageList",
    get: async ({ get }) => {
        const searchValue = get(searchState)
        const pageValue = get(pageState)

        // call unsplash api
        try {
            const res = await axios.get(`${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`)
            console.log(res)

            return res
        } catch (error) {
            console.log(error)
        }
    },
})
