'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <button onClick={() => this.setState({ liked: true })}>
        J’aime
      </button>
    );
  }
}

class MonContainer extends React.Component {
  render() {
    return(
     <div style={{ backgroundColor: 'red' }}>
      <LikeButton/>
      <LikeButton/>
      <LikeButton/>
      <LikeButton/>
      <LikeButton/>
    </div>
    )
  }
  
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
