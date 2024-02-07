import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RecoilRoot } from "recoil"

// 페이지 컴포넌트
import MainPage from "./pages/main/MainPage"
import LoadingPage from "./pages/loading/Loading"

function App() {
    return (
        <RecoilRoot>
            <React.Suspense fallback={<LoadingPage />}>
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
