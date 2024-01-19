import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RecoilRoot } from "recoil"

// 페이지 컴포넌트
import MainPage from "./components/pages/main/MainPage"

function App() {
    return (
        <RecoilRoot>
            <React.Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    <Routes>
                        <Route index path="/" element={<MainPage />} />
                    </Routes>
                </BrowserRouter>
            </React.Suspense>
        </RecoilRoot>
    )
}

export default App
