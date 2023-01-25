import { Fragment } from "react";
import ColorContext from "../contexts/ContextAPI";

const ColorComponent = () => {

    return(
        <Fragment>
            <ColorContext.Consumer>
            {/* 사용할 곳: Consumer - 함수의 return 구문에 화면을 처리할 내용을 작성함 */}
            {
                (value) => ( /* 매개변수 value로 ContextAPI에서 사용하는 초기값이 들어옴 */
                    <div>
                        ContextAPI의 사용<br/>
                        값: {value.color}<br/>
                    </div>
                )
            }
            </ColorContext.Consumer> {/* ContextAPI의 ColortContext 가져오기 */}  
        </Fragment>
    )
}

export default ColorComponent;