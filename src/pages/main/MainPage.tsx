import { useState } from "react"
import { useRecoilValue } from "recoil"
import { imageList } from "@recoil/selectors/imageSelector"
import { ImageData } from "@/types/image"
// 컴포넌트
import CommonHeader from "@components/organisms/common/header/CommonHeader"
import CommonNavigation from "@components/organisms/common/navigation/CommonNavigation"
import CommonFooter from "@components/organisms/common/footer/CommonFooter"
import SearchBox from "@components/molecules/common/SearchBox"
import Card from "@components/molecules/main/Card"
import DetailDialog from "@components/organisms/dialog/DetailDialog"
import styles from "./MainPage.module.scss"

function MainPage() {
    const images = useRecoilValue(imageList)
    const [imageData, setImageData] = useState<ImageData>()
    const [open, setOpen] = useState(false) // 이미지 상세 다이얼로그 관리 State

    // 이미지 카드 UI
    const CARD_LIST = images.data.results.map((item: any) => {
        return <Card data={item} key={item.id} handleDialog={setOpen} handleEvent={setImageData} />
    })

    return (
        <div className={styles.container}>
            <CommonHeader />
            <CommonNavigation />
            <div className={styles.container__contents}>
                <div className={styles.container__contents__introBox}>
                    <div className={styles.wrapper}>
                        <span className={styles.wrapper__title}>PhtoSplash</span>
                        <span className={styles.wrapper__desc}>
                            인터넷의 시작 자료 출처입니다. <br />
                            모든 지역에 있는 크리에이터들의 지원을 받습니다.
                        </span>
                        <SearchBox />
                    </div>
                </div>
                <div className={styles.container__contents__imageBox}>{CARD_LIST}</div>
            </div>
            <CommonFooter />
            {open && <DetailDialog data={imageData} handleDialog={setOpen} />}
        </div>
    )
}

export default MainPage
