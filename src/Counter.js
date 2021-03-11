// コンポーネントのファイル名は必ず大文字
import React,{ Component } from 'react';


class Counter extends Component{

// constructorで初期値を設定
constructor(props){
  super(props)
  // component上でやり取りされる情報をstateで管理
  this.state = {
    count: 0
  };
}
increment = () => {
  // アロー関数を定義した時点でthisが確定する
  // stateの値を編集するためにはsetStateを使う
  this.setState({
    count: this.state.count + 1
  });
};

decrement = () => {
  this.setState({
    count: this.state.count -1
  });
};


  render(){
    return(
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

// 他のところで使えるようにexportする↓
export default Counter