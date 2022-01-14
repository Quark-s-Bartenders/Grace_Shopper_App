import React from 'react';
import { Grid } from '@material-ui/core';
import TestIndividual from './TestIndividual';

// test product seed
const products = [
  {
    id: 1,
    name: 'Fast Ball',
    price: '$2.99',
    image: './public/images/fastBall.png',
    description:
      'A Poké Ball that makes it easier to catch Pokémon that are usually very quick to run away.'
  },
  {
    id: 2,
    name: 'Great Ball',
    price: '$5.99',
    image: './public/images/greatBall.png',
    description:
      'A good, high-performance Poké Ball that provides a higher Pokémon catch rate than a standard Poké Ball can.'
  }
];

const TestProductHome = () => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {products.map(product => {
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <TestIndividual product={product} />
          </Grid>;
        })}
      </Grid>
    </main>
  );
};

export default TestProductHome;
