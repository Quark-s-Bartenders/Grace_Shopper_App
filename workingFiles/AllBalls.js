import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store';
import { setPokeballs, fetchPokeballs } from '../store/action-creator/allBalls';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

export default function AllBalls() {
  const pokeBalls = useSelector((state) => state.pokeballs);
  const dispatch = useDispatch();
  const { setPokeballs } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    dispatch(fetchPokeballs());
  }, []);

  console.log(pokeBalls);

  return (
    <Box>
      <Grid container spacing={5} direction='row-reverse' justifyContent='space-evenly'>
        {pokeBalls.map((pokeBall) => {
          return (
            <Grid item xs={4} sm={3} key={pokeBall.id}>
              <Item>
                <div>
                  <div className='ball-image'>
                    <img src={pokeBall.image} width='250' height='250' />
                  </div>
                  <Typography variant='h5' color='inherit' fontWeight='bold'>
                    <div>{pokeBall.name}</div>
                    <div>{'$' + pokeBall.price}</div>
                  </Typography>
                </div>
                <Button
                  color='inherit'
                  // onClick={handleOpen}
                  style={{
                    padding: '1em'
                  }}>
                  View Details
                </Button>
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

// Need to add state to work with buttons@@@

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
