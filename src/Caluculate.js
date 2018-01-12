import React, { Component } from 'react';
import './Caluculate.css';

class Caluculate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevNum: '',
      postNum: '',
      operator: '',
      value: '',
    };
  }

  calculateClick = () => {
    this.setState(prevState => {
      switch (prevState.operator) {
        case "+":
          return {
            value: prevState.prevNum + prevState.postNum
          }
          break;
        case "-":
          return {
            value: prevState.prevNum - prevState.postNum
          }
          break;
        case "×":
          return {
            value: prevState.prevNum * prevState.postNum
          }
          break;
        case "%":
          return {
            value: prevState.prevNum % prevState.postNum
          }
          break;
        default:
          return {
            value: ' '
          }
      }
    })
  }

  transmit = (i) => {
    console.log(i);
    this.setState(prevState => {
      if (prevState.prevNum) {
        if (prevState.postNum) {
          return;
        } else {
          return {
            postNum: i,
          }
        }
      } else {
        return {
          prevNum: i
        }
      }

    })
  }

  transmit2 = (i) => {
    console.log("你过来呀");
    console.log(i + " ");

    // this.setState(prevState => {
    //   if (prevState.prevNum) {
    //     if (prevState.postNum) {
    //       return
    //     } else {
    //       return {
    //         postNum: this.props.arr[1],
    //       }
    //     }
    //   } else {
    //     return {
    //       prevNum: this.props.arr[1]
    //     }
    //   }
    // })
  }

 

  transmitOpe = (val) => {
    this.setState(prevState => {
      return {
        operator: val
      }
    })
  }

  transmitOpe2 = () => {
    this.setState(prevState => {
      return {
        operator: this.props.arr[11]
      }
    })
  }

  makeZero = () => {
    this.setState(prevState => {
      return {
        prevNum: '',
        operator: '',
        postNum: '',
        value: ''
      }
    });
    console.log(this.state);
  }

  render() {
    const { prevNum, operator, postNum, value } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">计算器</h1>
        </header>
        <main className="App-shell">
          <div className="App-show">
            <div className="App-progress">
              <p className="App-pre" >{prevNum}</p>
              <p className="App-o">{operator}</p>
              <p className="App-post">{postNum}</p>
              <p className="App-value">{this.state.value}</p>
            </div>
          </div>
          <ul className="App-number">
            {['CE', 'C', 'B', '÷', 7, 8, 9, '×', 4, 5, 6, '+', 1, 2, 3, '-', ' ±', 0, '.', '='].map(
              (val, i) => {
                return <li
                  onClick={() => {
                    if (typeof val === 'number') {
                      this.transmit(val)
                    }
                    if (typeof val === 'string') {
                      if (val === 'C') {
                        this.makeZero()
                      } else if(val === '=') {
                        this.calculateClick();
                      }else {
                        this.transmitOpe(val);
                      }
                    }
                  }}
                  key={val.toString()} className="App-num">
                  {val}</li>
              })}
            {/* <li className="App-num" onClick={this.transmit1}>{this.props.arr[0]}</li>
            <li className="App-num" onClick={this.transmit2}>{this.props.arr[1]}</li>
            <li className="App-num" onClick={this.transmit3} >{this.props.arr[2]}</li>
            <li className="App-num" onClick={this.transmit4} >{this.props.arr[3]}</li>
            <li className="App-num" onClick={this.transmit5}>{this.props.arr[4]}</li>
            <li className="App-num" onClick={this.transmit6}>{this.props.arr[5]}</li>
            <li className="App-num" onClick={this.transmit7}>{this.props.arr[6]}</li>
            <li className="App-num" onClick={this.transmit8}>{this.props.arr[7]}</li>
            <li className="App-num" onClick={this.transmit9}>{this.props.arr[8]}</li>
            <li className="App-num" onClick={this.transmit10}>{this.props.arr[9]}</li>
            <li className="App-operator" onClick={this.transmitOpe1}>{this.props.arr[10]}</li>
            <li className="App-operator" onClick={this.transmitOpe2}>{this.props.arr[11]}</li>
            <li className="App-operator" onClick={this.transmitOpe3}>{this.props.arr[12]}</li>
            <li className="App-operator" onClick={this.transmitOpe4}>{this.props.arr[13]}</li>
            <li className="App-operator" onClick={this.makeZero}>{this.props.arr[14]}</li>
            <li className="App-operator" onClick={this.calculateClick}>{this.props.arr[15]}</li> */}
          </ul>
        </main>
      </div>
    );
  }
}

export default Caluculate;
