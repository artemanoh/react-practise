import { Component } from "react";

class Counter extends Component {
  // constructor() {
  //     super()
  //     this.value = 0;
  // } в реакті конструктор можна не створювати, він створиться автоматично

  state = {
    value: 0,
    text: "hi",
    test: true,
  };

add = () => {
    // this.state.value = 5 нільзя
//     this.setState({
// value: 5,
//     }) передаємо об'єкт якщо треба замінити старе значення на нове
// якщо ми старе значення хочемо замінити та записати як нове то передаємо в сетстейт колбек
this.setState((prevState) => {
return {
    value: prevState.value + 1,
}
})
}


minus = () => {
this.setState((prevState) => {
return {
    value: prevState.value - 1,
}
})
}


  render() {
    return (
      <div>
        <h2>{this.state.text}</h2>
        <h2>{this.state.value}</h2>
        <h2>{this.state.test}</h2>
        <button onClick={this.add}>Збільщити</button>
        <button onClick={this.minus}>Зменшити</button>
      </div>
    );
  }
}

export default Counter;
