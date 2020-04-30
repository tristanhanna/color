import React, { Component, Fragment } from 'react';

class Picture extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {pixelClicked: "", colorChosen: "#FFFFFF"};
        this.setColor = this.setColor.bind(this);
        this.sendPixel = this.sendPixel.bind(this);
    }
    
    setColor = (color) => {
        this.setState({colorChosen: color});
    }
    
    sendPixel = (id) => {
        this.setState({pixelClicked: id});
        var thePixel = document.getElementById(id);
        thePixel.style.background=this.state.colorChosen;
    }
    
    render() {
        const squareStyle = {
            width: "80px",
            height: "80px",
            cursor: "pointer"
          }

          const lineStyle = {
            display: "flex",
            flexDirection: "horizontal"
          }
          
          const pictureStyle = {
              padding: "1px",
              border: "1px solid black",
              width: "640px",
              display: "inline-block"
          }
          
          const inputStyle = {
              border: "2px solid #270949",
              height: "30px",
              borderRadius: "4px",
              margin: "20px",
              fontSize: "1.5em"
          }
          
          const pageStyle = {
              textAlign: "center"
          }
        return(
                <div style={pageStyle}>
                    <div>
						<input style={inputStyle} id="color" type="text" onChange={event => this.setColor(event.target.value)} required="required" placeholder="Enter Color"/>
                    </div>
                    <div style={pictureStyle}>
                      <div style={lineStyle}>
                        <div id="A1" style={squareStyle} onClick={this.sendPixel.bind(this, "A1")}>
                        </div>
                        <div id="A2" style={squareStyle} onClick={this.sendPixel.bind(this, "A2")}>
                        </div>
                        <div id="A3" style={squareStyle} onClick={this.sendPixel.bind(this, "A3")}>
                        </div>
                        <div id="A4" style={squareStyle} onClick={this.sendPixel.bind(this, "A4")}>
                        </div>
                        <div id="A5" style={squareStyle} onClick={this.sendPixel.bind(this, "A5")}>
                        </div>
                        <div id="A6" style={squareStyle} onClick={this.sendPixel.bind(this, "A6")}>
                        </div>
                        <div id="A7" style={squareStyle} onClick={this.sendPixel.bind(this, "A7")}>
                        </div>
                        <div id="A8" style={squareStyle} onClick={this.sendPixel.bind(this, "A8")}>
                        </div>
                      </div>
                      <div style={lineStyle}>
                        <div id="B1" style={squareStyle} onClick={this.sendPixel.bind(this, "B1")}>
                        </div>
                        <div id="B2" style={squareStyle} onClick={this.sendPixel.bind(this, "B2")}>
                        </div>
                        <div id="B3" style={squareStyle} onClick={this.sendPixel.bind(this, "B3")}>
                        </div>
                        <div id="B4" style={squareStyle} onClick={this.sendPixel.bind(this, "B4")}>
                        </div>
                        <div id="B5" style={squareStyle} onClick={this.sendPixel.bind(this, "B5")}>
                        </div>
                        <div id="B6" style={squareStyle} onClick={this.sendPixel.bind(this, "B6")}>
                        </div>
                        <div id="B7" style={squareStyle} onClick={this.sendPixel.bind(this, "B7")}>
                        </div>
                        <div id="B8" style={squareStyle} onClick={this.sendPixel.bind(this, "B8")}>
                        </div>
                      </div>
                      <div style={lineStyle}>
                        <div id="C1" style={squareStyle} onClick={this.sendPixel.bind(this, "C1")}>
                        </div>
                        <div id="C2" style={squareStyle} onClick={this.sendPixel.bind(this, "C2")}>
                        </div>
                        <div id="C3" style={squareStyle} onClick={this.sendPixel.bind(this, "C3")}>
                        </div>
                        <div id="C4" style={squareStyle} onClick={this.sendPixel.bind(this, "C4")}>
                        </div>
                        <div id="C5" style={squareStyle} onClick={this.sendPixel.bind(this, "C5")}>
                        </div>
                        <div id="C6" style={squareStyle} onClick={this.sendPixel.bind(this, "C6")}>
                        </div>
                        <div id="C7" style={squareStyle} onClick={this.sendPixel.bind(this, "C7")}>
                        </div>
                        <div id="C8" style={squareStyle} onClick={this.sendPixel.bind(this, "C8")}>
                        </div>
                      </div>
                      <div style={lineStyle}>
                        <div id="D1" style={squareStyle} onClick={this.sendPixel.bind(this, "D1")}>
                        </div>
                        <div id="D2" style={squareStyle} onClick={this.sendPixel.bind(this, "D2")}>
                        </div>
                        <div id="D3" style={squareStyle} onClick={this.sendPixel.bind(this, "D3")}>
                        </div>
                        <div id="D4" style={squareStyle} onClick={this.sendPixel.bind(this, "D4")}>
                        </div>
                        <div id="D5" style={squareStyle} onClick={this.sendPixel.bind(this, "D5")}>
                        </div>
                        <div id="D6" style={squareStyle} onClick={this.sendPixel.bind(this, "D6")}>
                        </div>
                        <div id="D7" style={squareStyle} onClick={this.sendPixel.bind(this, "D7")}>
                        </div>
                        <div id="D8" style={squareStyle} onClick={this.sendPixel.bind(this, "D8")}>
                        </div>
                      </div>
                      <div style={lineStyle}>
                        <div id="E1" style={squareStyle} onClick={this.sendPixel.bind(this, "E1")}>
                        </div>
                        <div id="E2" style={squareStyle} onClick={this.sendPixel.bind(this, "E2")}>
                        </div>
                        <div id="E3" style={squareStyle} onClick={this.sendPixel.bind(this, "E3")}>
                        </div>
                        <div id="E4" style={squareStyle} onClick={this.sendPixel.bind(this, "E4")}>
                        </div>
                        <div id="E5" style={squareStyle} onClick={this.sendPixel.bind(this, "E5")}>
                        </div>
                        <div id="E6" style={squareStyle} onClick={this.sendPixel.bind(this, "E6")}>
                        </div>
                        <div id="E7" style={squareStyle} onClick={this.sendPixel.bind(this, "E7")}>
                        </div>
                        <div id="E8" style={squareStyle} onClick={this.sendPixel.bind(this, "E8")}>
                        </div>
                      </div>
                      <div style={lineStyle}>
                        <div id="F1" style={squareStyle} onClick={this.sendPixel.bind(this, "F1")}>
                        </div>
                        <div id="F2" style={squareStyle} onClick={this.sendPixel.bind(this, "F2")}>
                        </div>
                        <div id="F3" style={squareStyle} onClick={this.sendPixel.bind(this, "F3")}>
                        </div>
                        <div id="F4" style={squareStyle} onClick={this.sendPixel.bind(this, "F4")}>
                        </div>
                        <div id="F5" style={squareStyle} onClick={this.sendPixel.bind(this, "F5")}>
                        </div>
                        <div id="F6" style={squareStyle} onClick={this.sendPixel.bind(this, "F6")}>
                        </div>
                        <div id="F7" style={squareStyle} onClick={this.sendPixel.bind(this, "F7")}>
                        </div>
                        <div id="F8" style={squareStyle} onClick={this.sendPixel.bind(this, "F8")}>
                        </div>
                      </div>
                      <div style={lineStyle}>
                        <div id="G1" style={squareStyle} onClick={this.sendPixel.bind(this, "G1")}>
                        </div>
                        <div id="G2" style={squareStyle} onClick={this.sendPixel.bind(this, "G2")}>
                        </div>
                        <div id="G3" style={squareStyle} onClick={this.sendPixel.bind(this, "G3")}>
                        </div>
                        <div id="G4" style={squareStyle} onClick={this.sendPixel.bind(this, "G4")}>
                        </div>
                        <div id="G5" style={squareStyle} onClick={this.sendPixel.bind(this, "G5")}>
                        </div>
                        <div id="G6" style={squareStyle} onClick={this.sendPixel.bind(this, "G6")}>
                        </div>
                        <div id="G7" style={squareStyle} onClick={this.sendPixel.bind(this, "G7")}>
                        </div>
                        <div id="G8" style={squareStyle} onClick={this.sendPixel.bind(this, "G8")}>
                        </div>
                      </div>
                      <div style={lineStyle}>
                        <div id="H1" style={squareStyle} onClick={this.sendPixel.bind(this, "H1")}>
                        </div>
                        <div id="H2" style={squareStyle} onClick={this.sendPixel.bind(this, "H2")}>
                        </div>
                        <div id="H3" style={squareStyle} onClick={this.sendPixel.bind(this, "H3")}>
                        </div>
                        <div id="H4" style={squareStyle} onClick={this.sendPixel.bind(this, "H4")}>
                        </div>
                        <div id="H5" style={squareStyle} onClick={this.sendPixel.bind(this, "H5")}>
                        </div>
                        <div id="H6" style={squareStyle} onClick={this.sendPixel.bind(this, "H6")}>
                        </div>
                        <div id="H7" style={squareStyle} onClick={this.sendPixel.bind(this, "H7")}>
                        </div>
                        <div id="H8" style={squareStyle} onClick={this.sendPixel.bind(this, "H8")}>
                        </div>
                      </div>
                    </div>
                </div>
        );
    }
}

export default Picture