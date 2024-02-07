import { useState } from "react"
import { useRecoilState } from "recoil"
import { searchState } from "@recoil/atoms/searchState"
import styles from "./SearchBox.module.scss"

function SearchBox() {
    const [search, setSearch] = useRecoilState(searchState)
    const [text, setText] = useState("")
    const onChange = (event: any) => {
        setText(event.target.value)
    }
    // 엔터키 입력
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            if (text === "") return setSearch("korea")
            else return setSearch(text) // 작성한 Input 값 부모컴포넌트로 전달
        }
    }

    return (
        <div className={styles.searchBox}>
            <div className={styles.searchBox__search}>
                <input type="text" placeholder="찾으실 이미지를 검색하세요." className={styles.searchBox__search__input} value={text} onChange={onChange} onKeyDown={handleKeyDown} />
                {/* <input type="text" placeholder="찾으실 이미지를 검색하세요." className={styles.searchBox__search__input} value={text} onChange={onChange} /> */}
                <img src="/assets/icons/search.svg" alt="" />
            </div>
        </div>
    )
}

export default SearchBox
