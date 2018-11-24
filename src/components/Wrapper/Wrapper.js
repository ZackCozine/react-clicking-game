import React from 'react';
import './Wrapper.css';
// import teamsList from '../../teams.json';
// import TeamCard from '../TeamCard';

// class Wrapper extends React.Component {
//     state = {
//         teams: teamsList
//     };
//     // deleteFriend = id => {
//     //     const newFriends = this.state.friends.filter(
//     //         friend => (friend.id !== id)
//     //     )
//     //     this.setState({ friends: newFriends })
//     // }

//     render() {
//         return (
//             <div className="wrapper">
//                 {
//                     this.state.teams.map(
//                         team => <TeamCard
//                             id={team.id}
//                             name={team.name}
//                             image={team.image}
//                             location={team.location} />
//                     )
//                 }
//             </div>
//         )
//     }
// }

const Wrapper = props => <div className="wrapper">{props.children}</div>;

export default Wrapper;
