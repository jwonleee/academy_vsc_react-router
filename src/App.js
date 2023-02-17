import axios from "axios";


const App = () => {

    const handleClick = async() => {

        const data = {id: "aaa", name: "bbb"};

        const result = await axios.post("http://localhost:8383/getJson", data);
        console.log(result);
    }

    return (

        <div>
            <input type="button" onClick={handleClick} value="데이터요청하기" />
        </div>
    )

}

export default App;