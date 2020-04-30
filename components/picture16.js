import React, { Component, Fragment } from 'react';

class Picture16 extends React.Component {
    
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
            width: "40px",
            height: "40px",
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
                        <div id="A9" style={squareStyle} onClick={this.sendPixel.bind(this, "A9")}>
                        </div>
                        <div id="A10" style={squareStyle} onClick={this.sendPixel.bind(this, "A10")}>
                        </div>
                        <div id="A11" style={squareStyle} onClick={this.sendPixel.bind(this, "A11")}>
                        </div>
                        <div id="A12" style={squareStyle} onClick={this.sendPixel.bind(this, "A12")}>
                        </div>
                        <div id="A13" style={squareStyle} onClick={this.sendPixel.bind(this, "A13")}>
                        </div>
                        <div id="A14" style={squareStyle} onClick={this.sendPixel.bind(this, "A14")}>
                        </div>
                        <div id="A15" style={squareStyle} onClick={this.sendPixel.bind(this, "A15")}>
                        </div>
                        <div id="A16" style={squareStyle} onClick={this.sendPixel.bind(this, "A16")}>
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
                        <div id="B9" style={squareStyle} onClick={this.sendPixel.bind(this, "B9")}>
                        </div>
                        <div id="B10" style={squareStyle} onClick={this.sendPixel.bind(this, "B10")}>
                        </div>
                        <div id="B11" style={squareStyle} onClick={this.sendPixel.bind(this, "B11")}>
                        </div>
                        <div id="B12" style={squareStyle} onClick={this.sendPixel.bind(this, "B12")}>
                        </div>
                        <div id="B13" style={squareStyle} onClick={this.sendPixel.bind(this, "B13")}>
                        </div>
                        <div id="B14" style={squareStyle} onClick={this.sendPixel.bind(this, "B14")}>
                        </div>
                        <div id="B15" style={squareStyle} onClick={this.sendPixel.bind(this, "B15")}>
                        </div>
                        <div id="B16" style={squareStyle} onClick={this.sendPixel.bind(this, "B16")}>
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
                        <div id="C9" style={squareStyle} onClick={this.sendPixel.bind(this, "C9")}>
                        </div>
                        <div id="C10" style={squareStyle} onClick={this.sendPixel.bind(this, "C10")}>
                        </div>
                        <div id="C11" style={squareStyle} onClick={this.sendPixel.bind(this, "C11")}>
                        </div>
                        <div id="C12" style={squareStyle} onClick={this.sendPixel.bind(this, "C12")}>
                        </div>
                        <div id="C13" style={squareStyle} onClick={this.sendPixel.bind(this, "C13")}>
                        </div>
                        <div id="C14" style={squareStyle} onClick={this.sendPixel.bind(this, "C14")}>
                        </div>
                        <div id="C15" style={squareStyle} onClick={this.sendPixel.bind(this, "C15")}>
                        </div>
                        <div id="C16" style={squareStyle} onClick={this.sendPixel.bind(this, "C16")}>
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
                        <div id="D9" style={squareStyle} onClick={this.sendPixel.bind(this, "D9")}>
                        </div>
                        <div id="D10" style={squareStyle} onClick={this.sendPixel.bind(this, "D10")}>
                        </div>
                        <div id="D11" style={squareStyle} onClick={this.sendPixel.bind(this, "D11")}>
                        </div>
                        <div id="D12" style={squareStyle} onClick={this.sendPixel.bind(this, "D12")}>
                        </div>
                        <div id="D13" style={squareStyle} onClick={this.sendPixel.bind(this, "D13")}>
                        </div>
                        <div id="D14" style={squareStyle} onClick={this.sendPixel.bind(this, "D14")}>
                        </div>
                        <div id="D15" style={squareStyle} onClick={this.sendPixel.bind(this, "D15")}>
                        </div>
                        <div id="D16" style={squareStyle} onClick={this.sendPixel.bind(this, "D16")}>
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
                        <div id="E9" style={squareStyle} onClick={this.sendPixel.bind(this, "A9")}>
                        </div>
                        <div id="E10" style={squareStyle} onClick={this.sendPixel.bind(this, "E10")}>
                        </div>
                        <div id="E11" style={squareStyle} onClick={this.sendPixel.bind(this, "E11")}>
                        </div>
                        <div id="E12" style={squareStyle} onClick={this.sendPixel.bind(this, "E12")}>
                        </div>
                        <div id="E13" style={squareStyle} onClick={this.sendPixel.bind(this, "E13")}>
                        </div>
                        <div id="E14" style={squareStyle} onClick={this.sendPixel.bind(this, "E14")}>
                        </div>
                        <div id="E15" style={squareStyle} onClick={this.sendPixel.bind(this, "E15")}>
                        </div>
                        <div id="E16" style={squareStyle} onClick={this.sendPixel.bind(this, "E16")}>
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
                        <div id="F9" style={squareStyle} onClick={this.sendPixel.bind(this, "F9")}>
                        </div>
                        <div id="F10" style={squareStyle} onClick={this.sendPixel.bind(this, "F10")}>
                        </div>
                        <div id="F11" style={squareStyle} onClick={this.sendPixel.bind(this, "F11")}>
                        </div>
                        <div id="F12" style={squareStyle} onClick={this.sendPixel.bind(this, "F12")}>
                        </div>
                        <div id="F13" style={squareStyle} onClick={this.sendPixel.bind(this, "F13")}>
                        </div>
                        <div id="F14" style={squareStyle} onClick={this.sendPixel.bind(this, "F14")}>
                        </div>
                        <div id="F15" style={squareStyle} onClick={this.sendPixel.bind(this, "F15")}>
                        </div>
                        <div id="F16" style={squareStyle} onClick={this.sendPixel.bind(this, "F16")}>
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
                        <div id="G9" style={squareStyle} onClick={this.sendPixel.bind(this, "G9")}>
                        </div>
                        <div id="G10" style={squareStyle} onClick={this.sendPixel.bind(this, "G10")}>
                        </div>
                        <div id="G11" style={squareStyle} onClick={this.sendPixel.bind(this, "G11")}>
                        </div>
                        <div id="G12" style={squareStyle} onClick={this.sendPixel.bind(this, "G12")}>
                        </div>
                        <div id="G13" style={squareStyle} onClick={this.sendPixel.bind(this, "G13")}>
                        </div>
                        <div id="G14" style={squareStyle} onClick={this.sendPixel.bind(this, "G14")}>
                        </div>
                        <div id="G15" style={squareStyle} onClick={this.sendPixel.bind(this, "G15")}>
                        </div>
                        <div id="G16" style={squareStyle} onClick={this.sendPixel.bind(this, "G16")}>
                        </div>
                      </div>
                      <div style={lineStyle}>
                        <div id="H1" style={squareStyle} onClick={this.sendPixel.bind(this, "H1")}></div>
                        <div id="H2" style={squareStyle} onClick={this.sendPixel.bind(this, "H2")}></div>
                        <div id="H3" style={squareStyle} onClick={this.sendPixel.bind(this, "H3")}></div>
                        <div id="H4" style={squareStyle} onClick={this.sendPixel.bind(this, "H4")}></div>
                        <div id="H5" style={squareStyle} onClick={this.sendPixel.bind(this, "H5")}></div>
                        <div id="H6" style={squareStyle} onClick={this.sendPixel.bind(this, "H6")}></div>
                        <div id="H7" style={squareStyle} onClick={this.sendPixel.bind(this, "H7")}></div>
                        <div id="H8" style={squareStyle} onClick={this.sendPixel.bind(this, "H8")}></div>
                        <div id="H9" style={squareStyle} onClick={this.sendPixel.bind(this, "H9")}></div>
                        <div id="H10" style={squareStyle} onClick={this.sendPixel.bind(this, "H10")}></div>
                        <div id="H11" style={squareStyle} onClick={this.sendPixel.bind(this, "H11")}></div>
                        <div id="H12" style={squareStyle} onClick={this.sendPixel.bind(this, "H12")}></div>
                        <div id="H13" style={squareStyle} onClick={this.sendPixel.bind(this, "H13")}></div>
                        <div id="H14" style={squareStyle} onClick={this.sendPixel.bind(this, "H14")}></div>
                        <div id="H15" style={squareStyle} onClick={this.sendPixel.bind(this, "H15")}></div>
                        <div id="H16" style={squareStyle} onClick={this.sendPixel.bind(this, "H16")}></div>
                      </div>
                      <div style={lineStyle}>
                        <div id="I1" style={squareStyle} onClick={this.sendPixel.bind(this, "I1")}></div>
                        <div id="I2" style={squareStyle} onClick={this.sendPixel.bind(this, "I2")}></div>
                        <div id="I3" style={squareStyle} onClick={this.sendPixel.bind(this, "I3")}></div>
                        <div id="I4" style={squareStyle} onClick={this.sendPixel.bind(this, "I4")}></div>
                        <div id="I5" style={squareStyle} onClick={this.sendPixel.bind(this, "I5")}></div>
                        <div id="I6" style={squareStyle} onClick={this.sendPixel.bind(this, "I6")}></div>
                        <div id="I7" style={squareStyle} onClick={this.sendPixel.bind(this, "I7")}></div>
                        <div id="I8" style={squareStyle} onClick={this.sendPixel.bind(this, "I8")}></div>
                        <div id="I9" style={squareStyle} onClick={this.sendPixel.bind(this, "I9")}></div>
                        <div id="I10" style={squareStyle} onClick={this.sendPixel.bind(this, "I10")}></div>
                        <div id="I11" style={squareStyle} onClick={this.sendPixel.bind(this, "I11")}></div>
                        <div id="I12" style={squareStyle} onClick={this.sendPixel.bind(this, "I12")}></div>
                        <div id="I13" style={squareStyle} onClick={this.sendPixel.bind(this, "I13")}></div>
                        <div id="I14" style={squareStyle} onClick={this.sendPixel.bind(this, "I14")}></div>
                        <div id="I15" style={squareStyle} onClick={this.sendPixel.bind(this, "I15")}></div>
                        <div id="I16" style={squareStyle} onClick={this.sendPixel.bind(this, "I16")}></div>
                      </div>
                      <div style={lineStyle}>
                        <div id="J1" style={squareStyle} onClick={this.sendPixel.bind(this, "J1")}></div>
                        <div id="J2" style={squareStyle} onClick={this.sendPixel.bind(this, "J2")}></div>
                        <div id="J3" style={squareStyle} onClick={this.sendPixel.bind(this, "J3")}></div>
                        <div id="J4" style={squareStyle} onClick={this.sendPixel.bind(this, "J4")}></div>
                        <div id="J5" style={squareStyle} onClick={this.sendPixel.bind(this, "J5")}></div>
                        <div id="J6" style={squareStyle} onClick={this.sendPixel.bind(this, "J6")}></div>
                        <div id="J7" style={squareStyle} onClick={this.sendPixel.bind(this, "J7")}></div>
                        <div id="J8" style={squareStyle} onClick={this.sendPixel.bind(this, "J8")}></div>
                        <div id="J9" style={squareStyle} onClick={this.sendPixel.bind(this, "J9")}></div>
                        <div id="J10" style={squareStyle} onClick={this.sendPixel.bind(this, "J10")}></div>
                        <div id="J11" style={squareStyle} onClick={this.sendPixel.bind(this, "J11")}></div>
                        <div id="J12" style={squareStyle} onClick={this.sendPixel.bind(this, "J12")}></div>
                        <div id="J13" style={squareStyle} onClick={this.sendPixel.bind(this, "J13")}></div>
                        <div id="J14" style={squareStyle} onClick={this.sendPixel.bind(this, "J14")}></div>
                        <div id="J15" style={squareStyle} onClick={this.sendPixel.bind(this, "J15")}></div>
                        <div id="J16" style={squareStyle} onClick={this.sendPixel.bind(this, "J16")}></div>
                      </div>
                      <div style={lineStyle}>
                        <div id="K1" style={squareStyle} onClick={this.sendPixel.bind(this, "K1")}></div>
                        <div id="K2" style={squareStyle} onClick={this.sendPixel.bind(this, "K2")}></div>
                        <div id="K3" style={squareStyle} onClick={this.sendPixel.bind(this, "K3")}></div>
                        <div id="K4" style={squareStyle} onClick={this.sendPixel.bind(this, "K4")}></div>
                        <div id="K5" style={squareStyle} onClick={this.sendPixel.bind(this, "K5")}></div>
                        <div id="K6" style={squareStyle} onClick={this.sendPixel.bind(this, "K6")}></div>
                        <div id="K7" style={squareStyle} onClick={this.sendPixel.bind(this, "K7")}></div>
                        <div id="K8" style={squareStyle} onClick={this.sendPixel.bind(this, "K8")}></div>
                        <div id="K9" style={squareStyle} onClick={this.sendPixel.bind(this, "K9")}></div>
                        <div id="K10" style={squareStyle} onClick={this.sendPixel.bind(this, "K10")}></div>
                        <div id="K11" style={squareStyle} onClick={this.sendPixel.bind(this, "K11")}></div>
                        <div id="K12" style={squareStyle} onClick={this.sendPixel.bind(this, "K12")}></div>
                        <div id="K13" style={squareStyle} onClick={this.sendPixel.bind(this, "K13")}></div>
                        <div id="K14" style={squareStyle} onClick={this.sendPixel.bind(this, "K14")}></div>
                        <div id="K15" style={squareStyle} onClick={this.sendPixel.bind(this, "K15")}></div>
                        <div id="K16" style={squareStyle} onClick={this.sendPixel.bind(this, "K16")}></div>
                      </div>
                      <div style={lineStyle}>
                        <div id="L1" style={squareStyle} onClick={this.sendPixel.bind(this, "L1")}></div>
                        <div id="L2" style={squareStyle} onClick={this.sendPixel.bind(this, "L2")}></div>
                        <div id="L3" style={squareStyle} onClick={this.sendPixel.bind(this, "L3")}></div>
                        <div id="L4" style={squareStyle} onClick={this.sendPixel.bind(this, "L4")}></div>
                        <div id="L5" style={squareStyle} onClick={this.sendPixel.bind(this, "L5")}></div>
                        <div id="L6" style={squareStyle} onClick={this.sendPixel.bind(this, "L6")}></div>
                        <div id="L7" style={squareStyle} onClick={this.sendPixel.bind(this, "L7")}></div>
                        <div id="L8" style={squareStyle} onClick={this.sendPixel.bind(this, "L8")}></div>
                        <div id="L9" style={squareStyle} onClick={this.sendPixel.bind(this, "L9")}></div>
                        <div id="L10" style={squareStyle} onClick={this.sendPixel.bind(this, "L10")}></div>
                        <div id="L11" style={squareStyle} onClick={this.sendPixel.bind(this, "L11")}></div>
                        <div id="L12" style={squareStyle} onClick={this.sendPixel.bind(this, "L12")}></div>
                        <div id="L13" style={squareStyle} onClick={this.sendPixel.bind(this, "L13")}></div>
                        <div id="L14" style={squareStyle} onClick={this.sendPixel.bind(this, "L14")}></div>
                        <div id="L15" style={squareStyle} onClick={this.sendPixel.bind(this, "L15")}></div>
                        <div id="L16" style={squareStyle} onClick={this.sendPixel.bind(this, "L16")}></div>
                      </div>
                      <div style={lineStyle}>
                        <div id="L1" style={squareStyle} onClick={this.sendPixel.bind(this, "L1")}></div>
                        <div id="L2" style={squareStyle} onClick={this.sendPixel.bind(this, "L2")}></div>
                        <div id="L3" style={squareStyle} onClick={this.sendPixel.bind(this, "L3")}></div>
                        <div id="L4" style={squareStyle} onClick={this.sendPixel.bind(this, "L4")}></div>
                        <div id="L5" style={squareStyle} onClick={this.sendPixel.bind(this, "L5")}></div>
                        <div id="L6" style={squareStyle} onClick={this.sendPixel.bind(this, "L6")}></div>
                        <div id="L7" style={squareStyle} onClick={this.sendPixel.bind(this, "L7")}></div>
                        <div id="L8" style={squareStyle} onClick={this.sendPixel.bind(this, "L8")}></div>
                        <div id="L9" style={squareStyle} onClick={this.sendPixel.bind(this, "L9")}></div>
                        <div id="L10" style={squareStyle} onClick={this.sendPixel.bind(this, "L10")}></div>
                        <div id="L11" style={squareStyle} onClick={this.sendPixel.bind(this, "L11")}></div>
                        <div id="L12" style={squareStyle} onClick={this.sendPixel.bind(this, "L12")}></div>
                        <div id="L13" style={squareStyle} onClick={this.sendPixel.bind(this, "L13")}></div>
                        <div id="L14" style={squareStyle} onClick={this.sendPixel.bind(this, "L14")}></div>
                        <div id="L15" style={squareStyle} onClick={this.sendPixel.bind(this, "L15")}></div>
                        <div id="L16" style={squareStyle} onClick={this.sendPixel.bind(this, "L16")}></div>
                      </div>
                      <div style={lineStyle}>
                        <div id="M1" style={squareStyle} onClick={this.sendPixel.bind(this, "M1")}></div>
                        <div id="M2" style={squareStyle} onClick={this.sendPixel.bind(this, "M2")}></div>
                        <div id="M3" style={squareStyle} onClick={this.sendPixel.bind(this, "M3")}></div>
                        <div id="M4" style={squareStyle} onClick={this.sendPixel.bind(this, "M4")}></div>
                        <div id="M5" style={squareStyle} onClick={this.sendPixel.bind(this, "M5")}></div>
                        <div id="M6" style={squareStyle} onClick={this.sendPixel.bind(this, "M6")}></div>
                        <div id="M7" style={squareStyle} onClick={this.sendPixel.bind(this, "M7")}></div>
                        <div id="M8" style={squareStyle} onClick={this.sendPixel.bind(this, "M8")}></div>
                        <div id="M9" style={squareStyle} onClick={this.sendPixel.bind(this, "M9")}></div>
                        <div id="M10" style={squareStyle} onClick={this.sendPixel.bind(this, "M10")}></div>
                        <div id="M11" style={squareStyle} onClick={this.sendPixel.bind(this, "M11")}></div>
                        <div id="M12" style={squareStyle} onClick={this.sendPixel.bind(this, "M12")}></div>
                        <div id="M13" style={squareStyle} onClick={this.sendPixel.bind(this, "M13")}></div>
                        <div id="M14" style={squareStyle} onClick={this.sendPixel.bind(this, "M14")}></div>
                        <div id="M15" style={squareStyle} onClick={this.sendPixel.bind(this, "M15")}></div>
                        <div id="M16" style={squareStyle} onClick={this.sendPixel.bind(this, "M16")}></div>
                      </div>
                      <div style={lineStyle}>
                        <div id="N1" style={squareStyle} onClick={this.sendPixel.bind(this, "N1")}></div>
                        <div id="N2" style={squareStyle} onClick={this.sendPixel.bind(this, "N2")}></div>
                        <div id="N3" style={squareStyle} onClick={this.sendPixel.bind(this, "N3")}></div>
                        <div id="N4" style={squareStyle} onClick={this.sendPixel.bind(this, "N4")}></div>
                        <div id="N5" style={squareStyle} onClick={this.sendPixel.bind(this, "N5")}></div>
                        <div id="N6" style={squareStyle} onClick={this.sendPixel.bind(this, "N6")}></div>
                        <div id="N7" style={squareStyle} onClick={this.sendPixel.bind(this, "N7")}></div>
                        <div id="N8" style={squareStyle} onClick={this.sendPixel.bind(this, "N8")}></div>
                        <div id="N9" style={squareStyle} onClick={this.sendPixel.bind(this, "N9")}></div>
                        <div id="N10" style={squareStyle} onClick={this.sendPixel.bind(this, "N10")}></div>
                        <div id="N11" style={squareStyle} onClick={this.sendPixel.bind(this, "N11")}></div>
                        <div id="N12" style={squareStyle} onClick={this.sendPixel.bind(this, "N12")}></div>
                        <div id="N13" style={squareStyle} onClick={this.sendPixel.bind(this, "N13")}></div>
                        <div id="N14" style={squareStyle} onClick={this.sendPixel.bind(this, "N14")}></div>
                        <div id="N15" style={squareStyle} onClick={this.sendPixel.bind(this, "N15")}></div>
                        <div id="N16" style={squareStyle} onClick={this.sendPixel.bind(this, "N16")}></div>
                      </div>
                      <div style={lineStyle}>
                        <div id="O1" style={squareStyle} onClick={this.sendPixel.bind(this, "O1")}></div>
                        <div id="O2" style={squareStyle} onClick={this.sendPixel.bind(this, "O2")}></div>
                        <div id="O3" style={squareStyle} onClick={this.sendPixel.bind(this, "O3")}></div>
                        <div id="O4" style={squareStyle} onClick={this.sendPixel.bind(this, "O4")}></div>
                        <div id="O5" style={squareStyle} onClick={this.sendPixel.bind(this, "O5")}></div>
                        <div id="O6" style={squareStyle} onClick={this.sendPixel.bind(this, "O6")}></div>
                        <div id="O7" style={squareStyle} onClick={this.sendPixel.bind(this, "O7")}></div>
                        <div id="O8" style={squareStyle} onClick={this.sendPixel.bind(this, "O8")}></div>
                        <div id="O9" style={squareStyle} onClick={this.sendPixel.bind(this, "O9")}></div>
                        <div id="O10" style={squareStyle} onClick={this.sendPixel.bind(this, "O10")}></div>
                        <div id="O11" style={squareStyle} onClick={this.sendPixel.bind(this, "O11")}></div>
                        <div id="O12" style={squareStyle} onClick={this.sendPixel.bind(this, "O12")}></div>
                        <div id="O13" style={squareStyle} onClick={this.sendPixel.bind(this, "O13")}></div>
                        <div id="O14" style={squareStyle} onClick={this.sendPixel.bind(this, "O14")}></div>
                        <div id="O15" style={squareStyle} onClick={this.sendPixel.bind(this, "O15")}></div>
                        <div id="O16" style={squareStyle} onClick={this.sendPixel.bind(this, "O16")}></div>
                      </div>
                    </div>
                </div>
        );
    }
}

export default Picture16