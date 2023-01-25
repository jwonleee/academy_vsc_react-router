import { createContext, Fragment } from "react"

//컨텍스트의 기본 상태 지정
const ColorContext = createContext({color: 'red'});

export default ColorContext; //consumer, provider로 내보내지는 모양