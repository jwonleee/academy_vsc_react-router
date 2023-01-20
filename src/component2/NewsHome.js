import { Fragment } from "react";
import NewsCategory from "./NewsCategory";
import NewsList from "./NewsList";



const NewsHome = () => {


    return (
        <Fragment>
            
            <NewsCategory/>
            <NewsList/>
            
        </Fragment>
    )
}

export default NewsHome;