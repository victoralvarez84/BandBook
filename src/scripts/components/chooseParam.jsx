// import React from 'react';
// import Parse from 'parse';
// import Backbone from 'backbone';
// import Icon from './Icon';
// import BandBook from '../bandBook';
//
// class chooseParam extends React.Component {
//
//   handleSubmit = (event) => {
//     event.preventDefault();
//     // We could validate the data
//     // ON ANOTHER DAY
//     // Tell parse to construct a new game with the data
//     if (document.getElementsByName('.form-control')[0], this.refs.title.value == '' || this.refs.minPlayers.value == '' || this.refs.maxPlayers.value == '' || this.refs.durationHours.value == '' || this.refs.durationMinutes.value == '') {
//       console.log('empty');
//       Backbone.history
//         .navigate(`/choose`, true);
//     } else {
//
//       let game = new bandBook();
//
//       let duration = Number(this.refs.durationHours.value * 60) + Number(this.refs.durationMinutes.value);
//
//       game.set('title', this.refs.title.value);
//       game.set('description', Text(this.refs.gameDescription.value));
//       game.set('shortSummary', Text(this.refs.shortSummary.value));
//       game.set('minPlayers', Number(this.refs.minPlayers.value));
//       game.set('maxPlayers', Number(this.refs.maxPlayers.value));
//       game.set('duration', duration);
//       game.set('difficulty', event.target.elements.difficulty.value);
//       game.set('rating', Number(this.state.rating));
//
//       game.set('images', []); // For NOW. TODO: use a text field, split on new lines.
//
//       console.log(bandBook.attributes);
//       // save it
//       game.save()
//         .then((bandBook) => {
//           // redirect to game detail page.
//           Backbone.history
//             .navigate(`/choose`, true);
//         });
//     }
//   }
//
//   render() {
//     return (
//       <div id="gameForm">
//         <div className="container new-game">
//           <div className="row row-centered">
//               <div className="col-xs-6 col-centered">
//                 <h2 className="text-center"></h2>
//               </div>
//             </div>
//             <h2 className="text-center"><a href="#"><img src="assets/BB_logo_blue.jpg"/></a></h2>
//             <form onSubmit={this.handleSubmit} role="form">
//
//               <br></br>
//               <br></br>
//
//               <p className="textWhat">What do you want to add?</p>
//               <select className="form-control" ref="difficulty">
//                   <option>Add!</option>
//                   <option>Promoters/Venues</option>
//                   <option>Bands</option>
//                   <option>Record Stores</option>
//                   <option>Merch</option>
//                   <option>Lodging</option>
//                   <option>Vans for Sale</option>
//                   <option>Tips</option>
//                 </select>
//
//               <br></br>
//               <br></br>
//               <p className="text-center">
//                 <a href="#/register"><button type="button" class="btn btn-secondary">Continue!</button></a>
//               </p>
//             </form>
//           </div>
//         </div>
//
//
//     )
//   };
// }
// export default chooseParam;
