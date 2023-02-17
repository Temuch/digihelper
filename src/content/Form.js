// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }

// import React from 'react'

function Form() {
  return (
    <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        trasnform: 'translate(-50%, -50%)',
        background: 'red',
        fontSize: '30px'
    }}>Test Form</div>
  )
}

// export default Form