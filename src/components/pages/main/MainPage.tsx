import CommonHeader from "@components/organisms/common/header/CommonHeader"
import CommonNavigation from "@/components/organisms/common/navigation/CommonNavigation"
import CommonFooter from "@components/organisms/common/footer/CommonFooter"
import SearchBox from "@components/molecules/common/SearchBox"
import styles from "./MainPage.module.scss"

function MainPage() {
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
            </div>
            <CommonFooter />
        </div>
    )
}

export default MainPage
