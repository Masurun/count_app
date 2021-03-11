import React,{ Component } from 'react';
// ↑Reactとコンポーネントを導入してるこれを書かないと使えない
import Counter from './Counter'
import './App.css';

class App extends Component {
  render(){
    return(
      // classでは無くclassNameと記述する
      // divタグの外にh1とかを描くとエラー。必ず1つの親タグで囲む。
      <div className= "App">
        <h1>Count App</h1>
        <Counter />
      </div>
    )
  }
}


export default App;
