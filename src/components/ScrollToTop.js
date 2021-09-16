import React, { Component } from "react";

export class ScrollToTop extends Component {
  render() {
    return (
      <div style={{
        position: 'fixed',
        bottom: '13px',
        right: '31px',
      }}>
        <button 
          style={{
            backgroundColor: "#0d6efd",
            color: "white",
            // padding:'10px 20px',
            height: '65px',
            width: '65px',
            borderRadius: '50%',
            fontSize: '35px',
            border: 'none'
          }}
          onClick={()=>{window.scroll(0,0)}}
        >
          &uArr;
        </button>
      </div>
    );
  }
}

export default ScrollToTop;
