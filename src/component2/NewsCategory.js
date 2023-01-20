import { NavLink } from "react-router-dom";



const NewsCategory = () => {

    /* 
        business, entertainment, general, health, science, sports, technology
        
        1. 카테고리 맵 회전 - 카테고리는 고정으로 있는 값 (state로 관리할 필요x)
        2. 라우터 설정 = App.js 가보면 /여도 NewsHome, /:category여도 NewsHome
        3. NewsList에서는 라우터값을 처리
    */

    const category = [
        {name: "all", topic: "전체"},
        {name: "business", topic: "비즈니스"},
        {name: "entertainment", topic: "연예"},
        {name: "general", topic: "일반"},
        {name: "health", topic: "건강"},
        {name: "science", topic: "과학"},
        {name: "sports", topic: "스포츠"},
        {name: "technology", topic: "기술"}
    ];

    const myStyle = {
        color : "pink",
        borderBottom : "3px solid red"
    }

    return (
        <ul>
            {
                category.map( (item, index) => <li key={index}>
                    {/* 3항 연산자 부분: 돌아가는 주소 부분이 all이면 공백으로 바꿔주고, 나머지는 링크에 걸린 이름 나오게 */}
                    <NavLink to={item.name === 'all' ? '/' : `/${item.name}`} style={({isActive}) => isActive ? myStyle : undefined}>{item.topic}</NavLink>
                </li>
                )
            }
        </ul>
    )
}

export default NewsCategory;