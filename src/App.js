import React, { Component } from 'react';
import {connect} from 'react-redux';



import './App.css';
import {ADD_TO_CART, addCart} from "./actions/cart-action";
import store from "./store";

// const mapStateToProps = (state) => {
//     return {
//         cart: state.cart.cart
//     }
// }
// const mapDispatchToProps = (dispatch) =>{
//    return{
//      onClick:() =>{
//        dispatch({
//            type:ADD_TO_CART,
//            product:'li',
//            quantity:3
//        })
//      }
//    }
// }

class App extends Component {
  constructor(props){
    super(props);
    this.state={}
  }
  componentDidMount(){
    store.subscribe((state)=> this.setState(state))
    console.log(this.props)
    console.log(this.state)
  }
  addTo(){
    store.dispatch(addCart('a',2))
      console.log(store.getState())
  }

  render() {
    return (
      <div className="App">
          {store.getState().cart.cart.map((item,i)=>{
                return(
                    <div key={i}>
                        {item.product}
                    </div>
                )
          })}
          <button onClick={this.addTo}>add</button>
      </div>
    );
  }
}
// App = connect(mapStateToProps,mapDispatchToProps)(App);
export default App;
