import { Fragment } from "react"
import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import NewsHome from "./component2/NewsHome";



const App = () => {


    return (
        
        <Routes>
            <Route element={<Header/>}> {/* 헤더 사용하려고 */}
                <Route path="/" element={<NewsHome/>}/> {/* 본문 내용 */}
                <Route path="/:category" element={<NewsHome/>}/> {/* 본문 내용 */}
            </Route>
        </Routes>

    )
}

export default App;