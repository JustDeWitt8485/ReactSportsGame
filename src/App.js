import React from 'react';
// import logo from './logo.svg';
import './App.css';

class Team extends React.Component {

  state = {
      ShotAtt: 0,
      ShotsM: 0,
      Score: 0,
  };

  shotHandler = () => {
      let shots = Math.floor(Math.random() * 3) + 1;
      console.log(shots);
      let cheerAudio = new Audio("./Cheer.wav");
      let missAudio = new Audio("./Miss.wav");
      switch (shots) {
          case 1:
              console.log("case 1")
              cheerAudio.play();
              this.setState((state) => ({
                  Score: state.Score + 2,
                  ShotsM: state.ShotsM + 1,
              }));
              break;
          case 2:
              console.log("case 2")
              cheerAudio.play();
              this.setState((state) => ({
                  Score: state.Score + 3,
                  ShotsM: state.ShotsM + 1
              }));
              break;
          case 3:
              console.log("case 3")
              missAudio.play();
              break;
              default:
                break;
              

      };
      
          this.setState((state) => ({
              ShotAtt: state.ShotAtt + 1

          }));
      
  };

  render() {

      return (
          <div id="stats">
              {<h1 id="visitorT">{this.props.visitor}</h1>}
              {<h1 id="homeT">{this.props.home}</h1>}
              {<h1 id="tName">{this.props.name}</h1>}
              {<p className="scoreSize">{JSON.stringify(this.state.Score)}</p>}
              <img alt="logo"src={"./" + this.props.img + ".jpg"} />
              <button onClick={this.shotHandler}><h3>ShotAtt:{JSON.stringify(this.state.ShotAtt)}</h3>
                  <h3>ShotsM:{JSON.stringify(this.state.ShotsM)}</h3>
                  <h3>{(this.state.ShotsM) / (this.state.ShotAtt) ?
                      Number((this.state.ShotsM * 100) / (this.state.ShotAtt)).toFixed() : 0}%</h3>
                  <h2>Shoot!</h2>
              </button>
          </div>
      );
  };
};

class Game1 extends React.Component {


  render() {
      return (
          <React.Fragment>
              <h1 id="G1">Welcome to {this.props.venue}</h1>,
              <div className="Team1"><Team
                  home="HOME"
                  name={this.props.homeT.name}
                  img={this.props.homeT.img} />
              </div>,

              <div className="Team2"><Team
                  visitor="VISITOR"
                  name={this.props.visitT.name}
                  img={this.props.visitT.img} />
              </div>,
          </React.Fragment>
      );
  };

};

class Game2 extends React.Component {


  render() {
      return (
          <React.Fragment>
              <h1 id="G1">Welcome to {this.props.venue}</h1>,
              <div className="Team3"><Team
                  home="HOME"
                  name={this.props.homeT.name}
                  img={this.props.homeT.img} />
              </div>,

              <div className="Team4"><Team
                  visitor="VISITOR"
                  name={this.props.visitT.name}
                  img={this.props.visitT.img} />
              </div>,
          </React.Fragment>
      );
  };

};

const surge = {
  name: "Surge",
  img: "Surge"
}

const reapers = {
  name: "Reapers",
  img: "Reapers"
}

const eagles = {
  name: "Eagles",
  img: "Eagles"
}

const blue = {
  name: "Blue",
  img: "Blue"
}


class App extends React.Component {

  render() {
      return (
          <div>
              <Game1 venue="9 And 3 Quarters Arena"
                  homeT={surge}
                  visitT={reapers}
              />,
              <div id="G2"><Game2 venue="The Millennium Falcon Arena"
                  homeT={eagles}
                  visitT={blue} /></div>,
          </div>
      )


  };


};


export default App;
