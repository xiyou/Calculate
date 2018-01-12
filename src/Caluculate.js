import React, { Component } from 'react';
import './Caluculate.css';

var count = 0;
class Caluculate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prev: '',
      oo: '',
      post: '',
      value: '', 
      status: 'init',
      res: '',
      dot: '.'
    };
  }

  calculateClick = () => {
    alert(this.state.status);
    this.setState(prevState => {
      switch (prevState.oo) {
        case "+":
          return {
            value: prevState.prev+ prevState.post,
            res: prevState.prev+ prevState.post,
            status: 'f',
          }
          break;
        case "-":
          return {
            value: prevState.prev - prevState.post,
            res: prevState.prev+ prevState.post,
            status: 'f',
          }
          break;
        case "×":
          return {
            value: prevState.prev * prevState.post,
            res: prevState.prev+ prevState.post,
            status: 'f',
          }
          break;
        case "%":
          return {
            value: prevState.prev % prevState.post,
            res: prevState.prev+ prevState.post,
            status: 'f',
          }
          break;
        default:
          return {
            value: ''
          }
      }
    });
  }

  transmit = (i) => {
    if (this.state.status === 'init'){
      this.setState((prevState) => {
        return {
          prev: i,
          status: 'p',
        }
      })
    }

    if (this.state.status === 'p') {
      this.setState((prevState) => {
        return {
          prev: prevState.prev * 10 + i,
          status: 'p',
        }
      })
    }
    if (this.state.status === 'o') {
      this.setState( prevState => {
        return {
          post: i,
          status: 's'
        }
      })
    }

    if (this.state.status === 's') {
      this.setState( prevState => {
        return {
          post: prevState.post *10 + i
        }
      })
    }

    // this.setState(prevState => {
    //   if (prevState.prevNum) {
    //     if (prevState.postNum) {
    //       return;
    //     } else {
    //       return {
    //         postNum: count>0 ? prevState.postNum+' '+i : i
    //       }
    //     }
    //   } else {
    //     return {
    //       prevNum: count>0 ?  prevState.prevNum+' '+i : i
    //     }
    //   }

    // })
    // count++;
    // console.log(count);
  }

  transmitOpe = (val) => {
    this.setState(prevState => {
      return {
        oo: val,
        status: 'o'
      }
    })
  }

  revocation = () => {
    console.log(this.state.status);
    if (this.state.status === 'p') {
      this.setState( (prevState) => {
        return {
          prev: Number.parseInt(prevState.prev /10) 
        }
      })
    }
    
    if (this.state.status === 's') {
      this.setState( (prevState) => {
        return {
          post: Number.parseInt(prevState.post /10)
        }
      })
    }
  }
  makeZero = () => {
    this.setState(prevState => {
      return {
        prev: '',
        oo: '',
        post: '',
        value: '',
        status: 'init',
        res: ''
      }
    });
    console.log(this.state);
  }

  render() {
    const { prev, oo, post, value } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">计算器</h1>
        </header>
        <main className="App-shell">
          <div className="App-show">
            <div className="App-progress">
              <p className="App-pre" >{prev}</p>
              <p className="App-o">{oo}</p>
              <p className="App-post">{post}</p>
              <p className="App-value">{value}</p>
            </div>
          </div>
          <ul className="App-number">
            {['CE', 'C', '←', '÷', 7, 8, 9, '×', 4, 5, 6, '+', 1, 2, 3, '-', ' ±', 0, '.', '='].map(
              (val, i) => {
                return <li
                  onClick={() => {
                    if (typeof val === 'number') {
                      this.transmit(val)
                    }
                    if (typeof val === 'string') {
                      if (val === 'C') {
                        this.makeZero()
                      } else if (val === '=') {
                        this.calculateClick();
                      } else if (val === '←'){
                        this.revocation()
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
