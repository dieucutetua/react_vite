//component = html + css + js
import './style.css'
const MyComponent = () => {
    // const ltd = "a";
    //const ltd = 4;
    const ltd = [1, 2, 3]
    // const ltd = true;
    // const ltd = {
    //     name: "dieu",
    //     age: 23
    // }
    return (
        <>

            <div
                style={
                    { borderRadius: "10px" }
                }
            >{JSON.stringify(ltd)} LTD  </div>
            <div>{console.log("abccc")}</div>
            <div className="child">abn</div>
        </>
    );
}
export default MyComponent;