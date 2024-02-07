import { useState, useEffect } from "react"
import { ImageData } from "@/types/image"
import styles from "./DetailDialog.module.scss"

interface Props {
    data: ImageData
    handleDialog: (eventValue: boolean) => void
}

function DetailDialog({ data, handleDialog }: Props) {
    const [bookmark, setBookmark] = useState(false)
    const addBookmark = () => {
        setBookmark(!bookmark)
    }
    const closeDialog = () => {
        handleDialog(false)
    }

    // ESC Key 입력시, 다이얼로그 닫기
    useEffect(() => {
        const escKeyDialogClose = (e: any) => {
            if (e.key === "Escape") {
                handleDialog(false)
            }
        }
        // esc key를 눌렀을 때 Modal 창 close
        window.addEventListener("keydown", escKeyDialogClose) // 위에 만들어 놓은 escKeyDialogClose를 keydown했을 때 이벤트로 등록한다. 즉, esc를 눌렀을 때 modal창 종료
        return () => window.removeEventListener("keydown", escKeyDialogClose) // 위의 이벤트를 제거
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.container__dialog}>
                <div className={styles.container__dialog__header}>
                    <div className={styles.close}>
                        <button className={styles.close__button} onClick={closeDialog}>
                            <span className="material-symbols-outlined" style={{ fontSize: 28 + "px" }}>
                                close
                            </span>
                        </button>
                        <img src={data.user.profile_image.small} alt="사진작가 프로필 사진" className={styles.close__authorImage} />
                        <span className={styles.close__authorName}>{data.user.name}</span>
                    </div>
                    <div className={styles.bookmark}>
                        <button className={styles.bookmark__button} onClick={addBookmark}>
                            {bookmark === false ? (
                                <span className="material-symbols-outlined" style={{ fontSize: 16 + "px" }}>
                                    favorite
                                </span>
                            ) : (
                                <span className="material-symbols-outlined added" style={{ fontSize: 16 + "px", color: "red" }}>
                                    favorite
                                </span>
                            )}
                            북마크
                        </button>
                        <button className={styles.bookmark__button}>다운로드</button>
                    </div>
                </div>
                <div className={styles.container__dialog__body}>
                    <img src={data.urls.small} alt={data.alt_description} className={styles.image} />
                </div>
                <div className={styles.container__dialog__footer}>
                    <div className={styles.infoBox}>
                        <div className={styles.infoBox__item}>
                            <span className={styles.infoBox__item__label}>이미지 크기</span>
                            <span className={styles.infoBox__item__value}>
                                {data.width} X {data.height}
                            </span>
                        </div>
                        <div className={styles.infoBox__item}>
                            <span className={styles.infoBox__item__label}>업로드</span>
                            <span className={styles.infoBox__item__value}>{data.created_at.split("T")[0]}</span>
                        </div>
                        <div className={styles.infoBox__item}>
                            <span className={styles.infoBox__item__label}>마지막 업데이트</span>
                            <span className={styles.infoBox__item__value}>{data.updated_at.split("T")[0]}</span>
                        </div>
                        <div className={styles.infoBox__item}>
                            <span className={styles.infoBox__item__label}>다운로드</span>
                            <span className={styles.infoBox__item__value}>{data.likes}</span>
                        </div>
                    </div>
                    <div className={styles.tagBox}>
                        {data.tags.map((item: any) => {
                            return (
                                <div className={styles.tagBox__tag} key={item.title}>
                                    {item.title}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailDialog
