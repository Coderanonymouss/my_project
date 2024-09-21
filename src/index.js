// // eslint-disable-next-line no-undef
// ReactDOM.render(<div><h1>"Привет"</h1>
//     <h2>Hello</h2>
// </div>, document.getElementById("app"))
// // eslint-disable-next-line no-undef
// ReactDOM.render(React.createElement('input', {
//     placeholder: "Help text",
//     value: "",
//     onClick: () => console.log("Clicked"),
//     onMouseEnter: () => console.log("Mouse Over"),
// }), document.getElementById("apps"))


const inputClick = () => console.log("Clicked")
const mouseOver = () => console.log("Mouse Over")

const helpText = "Help text"


const elements = <div className="name">
    <h1>{helpText}</h1>
    <input placeholder={helpText}
           onClick={inputClick} onMouseEnter={mouseOver}/>
    <p>{helpText === "Help text!" ? "Yes" : "No"}</p>
</div>

const app = document.getElementById("HelpText")

// eslint-disable-next-line no-undef
ReactDOM.render(elements,app)