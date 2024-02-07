import { useState } from "react"
import { useRecoilValue, useRecoilState } from "recoil"
import { pageState } from "@recoil/atoms/pageState"
import { imageList } from "@recoil/selectors/imageSelector"
import styles from "./CommonFooter.module.scss"

function CommonFooter() {
    const images = useRecoilValue(imageList)
    const [page, setPages] = useRecoilState(pageState)
    const [step, setStep] = useState(0)

    // 페이지 리스트 UI 생성
    const newArr: number[] = new Array()
    for (let i = 1; i <= images.data.total_pages; i++) {
        newArr.push(i)
    }

    const length = newArr.length
    const divide = Math.floor(length / 10) + (Math.floor(length % 10) > 0 ? 1 : 0)
    const res = new Array()

    for (let i = 0; i <= divide; i++) {
        // 배열 0부터 n개씩 잘라 새 배열에 넣기
        res.push(newArr.splice(0, 10))
    }
    const pages = res[step].map((item: number, index: number) => {
        if (item < 11) {
            return (
                <button
                    className={index === page - 1 ? `${styles.pagination__button} ${styles.active}` : `${styles.pagination__button} ${styles.inactive}`}
                    key={item}
                    onClick={() => moveToPage(item)}
                >
                    {item}
                </button>
            )
        } else {
            return (
                <button
                    className={index === page - 1 - step * 10 ? `${styles.pagination__button} ${styles.active}` : `${styles.pagination__button} ${styles.inactive}`}
                    key={item}
                    onClick={() => moveToPage(item)}
                >
                    {item}
                </button>
            )
        }
    })

    // ----------------------------------------------------------------------------------------------------

    const moveToPage = (selected: number) => {
        setPages(selected)
    }
    const moveToPrev = () => {
        if (step === 0) {
            return
        } else {
            setStep(step - 1)
            setPages(res[step - 1][0])
        }
    }
    const moveToNext = () => {
        if (step < res[step].length - 2) {
            setStep(step + 1)
            setPages(res[step + 1][0])
        } else {
            return
        }
    }

    return (
        <div className={styles.footer}>
            <div className={styles.pagination}>
                <button className={styles.pagination__button} onClick={moveToPrev}>
                    <img src="/assets/icons/arrow-left.svg" alt="" />
                </button>
                {pages}
                <button className={styles.pagination__button} onClick={moveToNext}>
                    <img src="/assets/icons/arrow-right.svg" alt="" />
                </button>
            </div>
        </div>
    )
}

export default CommonFooter
