import React, { Component } from 'react'

class Contador extends Component {
  state = {
    contador: 0,
    video: {
      title: "Video",
      likes: 0
    }
  }

  add = () => {
    this.setState((state, props) => ({
      contador: state.contador + 1, video: {
        ...state.video,
        likes: state.contador + 1
      }
    }))
  }

  render() {
    return (
      <div>
        <h1>Hola {this.state.video.title}</h1>
        <button onClick={this.add}>
          Clicks {this.state.contador} && Likes: {this.state.video.likes}
        </button>
      </div>

    )
  }
}

export default Contador;