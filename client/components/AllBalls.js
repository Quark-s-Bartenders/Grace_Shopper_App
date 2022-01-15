// import React from "react";
// import axios from "axios";

// // import {allBalls} from

// const AllBalls = () => {
//   return <div>Hello All Balls</div>;
//   //   const fetchProducts = async () => {
//   //               const response = await axios
//   //               .get("https://fakestoreapi.com/products")
//   //               .catch((err) => {}
// };

// export default AllBalls;

// // import { useEffect } from 'react';

// // const Translator = () => {
// //     const [languages, setLanguages] = useState([]);
// //     useEffect(() => {
// //       getLanguages().then(data => {
// //          setLanguages(data.languages)
// //       });

// //       console.log(languages);
// //     }, []);

// //   return (
// //     <header className="translator__header">
// //         {
// //           languages.length > 0 && (
// //             languages.map( lang => <h1>{lang.language}</h1>)
// //           )
// //         }
// //     </header>
// //   );
// // };
import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";
import { setPokeballs, fetchPokeballs } from "../store/action-creator/allBalls";

export default function AllBalls() {
  const pokeBalls = useSelector((state) => state.pokeballs);
  const dispatch = useDispatch();
  const { setPokeballs } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    dispatch(fetchPokeballs());
  }, []);

  console.log(pokeBalls);

  return (
    <main>
      <table className="table">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Image</th>
          </tr>

          {pokeBalls.map((pokeBall) => {
            return (
              <main>
                <td key={pokeBall.id}>
                  <td className="ball-image">
                    <img src={pokeBall.image} width="300" height="300" />
                  </td>
                  <tr>
                    <td>Name: {pokeBall.name}</td>
                    <td>Price: {pokeBall.price}</td>
                  </tr>
                </td>
                <button>View ball</button>
              </main>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}

// <div>
//   {allBalls.map((ball) => {
//     return (
//       <div className="ball" key={ball.id}>
//         <div className="ball-image">
//           <img src={ball.image} />
//         </div>
//         <div className="ball-info">
//           <p> Name: {ball.name}</p>
//           <p> Price: {ball.price}</p>
//           <p> Quantity: {ball.quantity}</p>
//           <p> Description: {ball.description}</p>
//           <p>
//             <Link to={`/pokeballs/${ball.id}`}>View</Link>
//           </p>
//         </div>
//       </div>
//     );
//   })}
// </div>;
