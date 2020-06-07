import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';



const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  function dateFormatter(cell) {
    const moment = require('moment-timezone');
    moment.locale('pt-br');
    if (!cell) {
      return "0"
    }
    return moment(cell).tz('America/Sao_Paulo', true).format("DD/MM/YYYY");
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infectados
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
            </Typography>

            <Typography variant="body2" component="p">
              Número de casos encontrados de COVID-19.
            </Typography>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recuperados
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
            </Typography>

            <Typography variant="body2" component="p">
              Número de casos recuperados da COVID-19.
            </Typography>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Mortes
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
            </Typography>
            <Typography variant="body2" component="p">
              Número de mortes causadas pelo COVID-19.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      <p>
        <Typography color="textSecondary" variant="body2" component="p" >
          Informações atualizadas em: {dateFormatter(new Date(lastUpdate))}
        </Typography>
      </p>

    </div>
  );
};
export default Info;
