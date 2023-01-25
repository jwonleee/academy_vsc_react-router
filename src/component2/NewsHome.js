import { Fragment } from "react";
import NewsCategory from "./NewsCategory";
import NewsList from "./NewsList";



const NewsHome = () => {


    return (
        <Fragment>
            <h3>뉴스홈 테스트</h3>
            <NewsCategory/>
            <NewsList/>
            
        </Fragment>
    )
}

export default NewsHome;