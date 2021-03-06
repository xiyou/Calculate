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
    };
  }

  // "=" 等于号事件"
  calculateClick = () => {
    if (this.state.status === 'o') {
        console.log("啥也没有")
    }else {
      this.setState(prevState => {
        switch (prevState.oo) {
          case "+":
            return {
              value: Number(prevState.prev) + Number(prevState.post),
              res: Number(prevState.prev) + Number(prevState.post),
              status: 'f',
            }
            break;
          case "-":
            return {
              value: Number(prevState.prev) - Number(prevState.post),
              res: Number(prevState.prev) - Number(prevState.post),
              status: 'f',
            }
            break;
          case "×":
            return {
              value: Number(prevState.prev) * Number(prevState.post),
              res: Number(prevState.prev) * Number(prevState.post),
              status: 'f',
            }
            break;
          case "÷":
            return {
              value: prevState.post ? Number(prevState.prev) / Number(prevState.post) : '小子，除数不能为零',
              res: Number(prevState.prev) / Number(prevState.post),
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
  }

  // "1234567890" 数字标签的事件
  transmit = (i) => {
    console.log(this.state.status);
    if (this.state.status === 'init') {
      this.setState((prevState) => {
        return {
          prev: i,
          status: 'p',
        }
      })
    }

    if (this.state.status === 'p') {
      this.setState((prevState) => {
        console.log(prevState.prev);
        return {
          prev: typeof prevState.prev == 'string' ? prevState.prev + i : (prevState.prev < 0  ? prevState.prev * 10 - i : prevState.prev * 10 + i),
          status: 'p',
        }
      })
    }

    if (this.state.status === 'o') {
      this.setState(prevState => {
        return {
          post: i,
          status: 's'
        }
      })
    }

    if (this.state.status === 's') {
      this.setState(prevState => {
        return {
          post: typeof prevState.post == 'string' ? prevState.post + i : (prevState.post < 0 ? prevState.post * 10 - i : prevState.post * 10 + i),
          status: 's'
        }
      })
    }

    if (this.state.status === 'f') {
      console.log('执行到这里了吗？');
      this.setState(prevState => {
        return {
          prev: i,
          oo: '',
          post: '',
          value: '',
          status: 'p',
        }
      })
    }
    // this.setState(prevState => {
    //   return {
    //     post: prevState.post * 10 + i
    //   }
    // })
    // if (this.state.status === 'd1') {
    //   this.setState(prevState => {
    //     return {
    //       prev: prevState.prev + i,
    //     }
    //   })
    // }

    if (this.state.status === 'd2') {
      this.setState(prevState => {
        return {
          post: prevState.post + i,
        }
      })
    }

    // if (this.state.status === 'd3') {
    //   this.setState(prevState => {
    //     return {
    //       prev: prevState.prev + i,
    //       status: 'p'
    //     }
    //   })
    // }
  }

  // "+-*/" 操作符事件
  transmitOpe = (val) => {
    if (this.state.status === 'p') {
      this.setState(prevState => {
        return {
          oo: val,
          status: 'o',
        }
      })
    }

    if (this.state.status === 'o') {
      this.setState(prevState => {
        return {
          oo: val,
          status: 'o'
        }
      })
    }
    if (this.state.status === 's') {
      switch (val) {
        case '×':
          this.setState(prevState => {
            return {
              prev: prevState.prev * prevState.post,
              post: '',
            }
          });
          break;
        case '÷':
          this.setState(prevState => {
            return {
              prev: prevState.prev / prevState.post,
              post: ''
            }
          });
          break;
        case '+':
          this.setState(prevState => {
            return {
              prev: prevState.prev + prevState.post,
              post: ''
            }
          });
          break;
        case '-':
          this.setState(prevState => {
            return {
              prev: prevState.prev - prevState.post,
              post: ''
            }
          })
          break;
        default:
          return "来呀"
      }
    }

    if (this.state.status === 'f') {
      this.setState(prevState => {
        return {
          prev: prevState.res,
          oo: val,
          post: '',
          value: '',
          status: 'o',
          round: false
        }
      })
    }
  }

  // "CE" 清空事件
  makeEmpty = () => {
    if (this.state.status === 'p') {
      this.setState(prevState => {
        return {
          prev: ''
        }
      })
    }

    if (this.state.status === 's') {
      this.setState(prevState => {
        return {
          post: ''
        }
      })
    }

    if (this.state.status === 'f') {
      this.setState(prevState => {
        return {
          value: ''
        }
      })
    }


    if (this.state.status === 'd1') {
      this.setState(prevState => {
        return {
          prev: ''
        }
      })
    }

    if (this.state.status === 'd2') {
      this.setState(prevState => {
        return {
          post: ''
        }
      })
    }
  }

  // "←" 撤退事件
  revocation = () => {
    console.log(this.state.status);
    if (this.state.status === 'p') {
      this.setState((prevState) => {
        return {
          prev: Number.parseInt(prevState.prev / 10)
        }
      })
    }

    if (this.state.status === 's') {
      this.setState((prevState) => {
        return {
          post: Number.parseInt(prevState.post / 10)
        }
      })
    }

    // if (this.state.status === 'f') {
    //   this.setState(prevState => {
    //     return {
    //       post: Number.parseInt(prevState.post / 10)
    //     }
    //   })
    // }
  }

  // "C" 归零事件 
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
  }

  //"." 小数点事件
  addDot = (i) => {
    if (this.state.status === 'init') {
      this.setState(prevState => {
        return {
          prev: 0+'.',
          status: 'p',
        }
      })
    }
    if (this.state.status === 'p') {
      
      this.setState(prevState => {
        return {
          prev:  prevState.prev + '.',
          status: 'p'
        }
      })
    }

    if (this.state.status === 'o') {
      this.setState(prevState => {
        return {
          post: 0+'.',
          status: 's'
        }
      })
    }

    if (this.state.status === 's') {
      this.setState(prevState => {
        return {
          post: prevState.post + '.',
          status: 's'
        }
      })
    }
    // if (this.state.status === 'f') {
    //   this.setState(prevState => {
    //     return {
    //       post: prevState.post + '.',
    //       status: 'd2'
    //     }
    //   })
    // }

  }

  //"±" 正负符号事件
  addSymbol = () => {
    if (this.state.status === 'p') {
      this.setState(prevState => {
        return {
          prev: -prevState.prev
        }
      })
    }

    if (this.state.status === 's') {
      this.setState(prevState => {
        return {
          post: -prevState.post
        }
      })
    }

    if (this.state.status === 'o') {
      this.setState(prevState => {
        return {
          post: -prevState.post
        }
      })
    }

    // if (this.state.status === 'd1') {
    //   this.setState(prevState => {
    //     return {
    //       prev: -prevState.prev
    //     }
    //   })
    // }

    // if (this.state.status === 'd2') {
    //   this.setState(prevState => {
    //     return {
    //       post: -prevState.post
    //     }
    //   })
    // }
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
            {['CE', 'C', '←', '÷', 7, 8, 9, '×', 4, 5, 6, '+', 1, 2, 3, '-', '±', 0, '.', '='].map(
              (val, i) => {
                return <li
                  onClick={() => {
                    //数字的事件
                    if (typeof val === 'number') {
                      this.transmit(val);
                    }
                    //操作符的事件
                    if (typeof val === 'string') {
                      if (val === 'C') {
                        this.makeZero();
                      } else if (val === '=') {
                        this.calculateClick();
                      } else if (val === '←') {
                        this.revocation();
                      } else if (val === 'CE') {
                        this.makeEmpty();
                      } else if (val === '.') {
                        this.addDot();
                      } else if (val === '±') {
                        this.addSymbol();
                      } else {
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
