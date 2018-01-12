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
          </ul>
        </main>
      </div>
    );
  }
}

export default Caluculate;
