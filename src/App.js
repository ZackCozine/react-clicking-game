import React, { Component } from 'react';
import TeamCard from './components/TeamCard';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import teams from './teams.json';
import './App.css';

// const mainBg = {
//   backgroundImage: 'url("./images/soccer_field.jpg")',
//   backgroundRepeat: 'no-repeat',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
// }

class App extends Component {
  state = {
    teams,
    // not sure if i need this part
    score: 0,
    highScore: 0,
  };

  // componentDidMount() {
  //   document.body.style = { mainBg };
  // }
// tried a million different ways to change the background and just could not get it for the life of me
  gameOver = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score }, function () {
        console.log(this.state.highScore);
      });
    }
    this.state.teams.forEach(team => {
      team.count = 0;
    });
    alert(`Game Over! score: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  }

  clickCount = id => {
    this.state.teams.find((team, i) => {
      if (team.id === id) {
        if (teams[i].count === 0) {
          teams[i].count = teams[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function () {
            // console.log(this.state.score);
          });
          this.state.teams.sort(() => Math.random() - 0.5)
          // entirely dont understand what is happening in this small piece of code but i think it is randomizing all of the team cards
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highScore={this.state.highScore}>
        React Click Game!
        Featuring your favorite soccer (futbol) teams!
        </Header>
        {this.state.teams.map(team => (
          <TeamCard
            clickCount={this.clickCount}
            id={team.id}
            // key={team.id}
            image={team.image}
            location={team.location}
            name={team.name}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
