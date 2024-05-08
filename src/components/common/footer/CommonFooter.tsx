import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil'
import { imageData } from '@/recoil/selectors/imageSelector'
import { pageState } from '@/recoil/atoms/pageState'
import styles from './CommonFooter.module.scss'
import { searchState } from '@/recoil/atoms/searchState'

function CommonFooter() {
    const imgSelector = useRecoilValueLoadable(imageData)
    const search = useRecoilValue(searchState)
    const [page, setPage] = useRecoilState(pageState)
    const [step, setStep] = useState(0)

    useEffect(() => {
        setStep(0)
    }, [search])

    // 페이지 리스트 UI 생성
    const newArr: number[] = new Array()
    for (let i = 1; i <= imgSelector.contents.total_pages; i++) {
        newArr.push(i)
    }
    const length = newArr.length
    const divide = Math.floor(length / 10) + (Math.floor(length % 10) > 0 ? 1 : 0)
    const res = []

    for (let i = 0; i <= divide; i++) {
        // 배열 0부터 n개씩 잘라 새 배열에 넣기
        res.push(newArr.splice(0, 10))
    }

    // ----------------------------------------------------------------------------------------------------

    const moveToPage = (selected: number) => {
        setPage(selected)
    }
    const moveToPrev = () => {
        if (step === 0) return
        else {
            setStep(step - 1)
            setPage(res[step - 1][0])
        }
    }
    const moveToNext = () => {
        if (step < res[step].length - 2) {
            setStep(step + 1)
            setPage(res[step + 1][0])
        } else return
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.pagination}>
                <button className={styles.pagination__button} onClick={moveToPrev}>
                    <img src="/assets/icons/icon-arrowLeft.svg" alt="" />
                </button>
                {/* 변경될 UI 부분 */}
                {/* <span>1</span> */}
                {res[step] &&
                    res[step].map((item: number, index: number) => {
                        if (item < 11) {
                            return (
                                <button className={index === page - 1 ? `${styles.pagination__button} ${styles.active}` : `${styles.pagination__button} ${styles.inactive}`} key={item} onClick={() => moveToPage(item)}>
                                    {item}
                                </button>
                            )
                        } else {
                            return (
                                <button className={index === page - 1 - step * 10 ? `${styles.pagination__button} ${styles.active}` : `${styles.pagination__button} ${styles.inactive}`} key={item} onClick={() => moveToPage(item)}>
                                    {item}
                                </button>
                            )
                        }
                    })}
                <button className={styles.pagination__button} onClick={moveToNext}>
                    <img src="/assets/icons/icon-arrowRight.svg" alt="" />
                </button>
            </div>
        </footer>
    )
}

export default CommonFooter
