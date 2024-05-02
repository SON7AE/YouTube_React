import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
// 페이지 컴포넌트
// const MainPage = React.lazy(() => import('@pages/index/index'))
import MainPage from '@pages/index/index'
import BoookmarkPage from '@pages/bookmark/index'

function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<MainPage />}></Route>
                    {/* <Route path="/:id" element={<MainPage />}></Route> */}
                    <Route path="/bookmark" element={<BoookmarkPage />}></Route>
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    )
}

export default App
