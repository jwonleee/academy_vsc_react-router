import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsArticle from "./NewsArticle";

import styled from './NewsList.module.css'; //css


const NewsList = () => {

    //1. API 가져오기
    //8eeb2d41ecd540b38900f5df80334afc

    //5. 라우터로 들어오는 값에 처리
    const {category} = useParams();

    //category가 없거나 undefined이면 all
    const query = (category || 'all') === 'all' ? '' : `&category=${category}`; //이 조건은 변할 수 있음!
    // console.log(query);


    //2. useEffect에서 화면 로딩시 데이터처리

    const [data, setData] = useState(); //이렇게 하면 첫번쨰 데이터는 undefined고, 두번째부터 20개의 articles 들어옴


    //useEffect는 내장 함수이기 때문에 그대로 유지하고, 함수를 하나 걸어서 async 해주기
    useEffect( () => {

        (async() => { //즉시 실행함수의 매개변수로 async
            const url = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=8eeb2d41ecd540b38900f5df80334afc`;
            console.log(url);

            let {data: {articles}} = await axios.get(url); //data를 가져와서 그 안의 articles, 구조분해 할당
            
            setData(articles);
            setLoding(true); //로딩완료

        }) (); /* 즉시실행함수 괄호 빼먹지 말자 */
    }, [query] ); //6. 변화가 일어날 때마다 재실행할 변수
    
    // console.log(data);

    //3. 데이터 로딩처리 (데이터가 오기전에 state는 undefined)
    const [loading, setLoding] = useState(false);
    if(loading === false) {
        return <div>로딩중</div>
    }

    //4. li태그를 컴포넌트로 변경


    return (
        <div className={styled.news_container}>
            <h3>오늘의 헤드라인</h3>
            <ul className={styled.news_wrap}>
                {
                    /* 1. url, urlToImage, title, author, description, publishedAt */
                    data.map( (item, index) => <NewsArticle key={index+1} item={item}/>)
                }
            </ul>
        </div>
    )
}

export default NewsList;