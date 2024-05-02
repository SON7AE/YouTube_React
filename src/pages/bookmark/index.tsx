import CommonHeader from '@components/common/header/CommonHeader'
import styles from './styles/index.module.scss'
import Card from './components/Card'
import { useEffect, useState } from 'react'
import { CardDTO } from '../index/types/card'

function index() {
    const [data, setData] = useState([])
    const getData = () => {
        const getLocalStorageData = JSON.parse(localStorage.getItem('bookmark'))

        if (getLocalStorageData || getLocalStorageData !== null) setData(getLocalStorageData)
        else setData([])
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className={styles.page}>
            {/* 공통 헤더 UI 부분 */}
            <CommonHeader />
            <main className={styles.page__contents}>
                {data.map((item: CardDTO) => {
                    return <Card data={item} />
                })}
            </main>
        </div>
    )
}

export default index
