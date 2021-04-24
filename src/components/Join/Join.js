// import React, { useState } from 'react';
// import { Link } from "react-router-dom";

import './Join.css';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Box, Grid, Fade, Button, CircularProgress, TextField as Input, InputBase, ButtonBase } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { fade } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 20),
  },
  centerContainer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5, 0, 5),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  meetingText: {
    fontWeight: 'bold',
    marginTop: theme.spacing(4),
  },
  inputStyle: {
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  buttonStyle: {
    display: 'flex',
    alignItems: 'center',
    height: theme.spacing(7),
    width: theme.spacing(15),
    marginLeft: theme.spacing(48),
    marginTop: theme.spacing(5),
    paddingTop: theme.spacing(1),
    borderRadius: 50,
    '&:hover': {
      backgroundColor: '#dcd6ff',
    },
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
  grow: {
    flexGrow: 1,
  },
  navStyle: {
    backgroundColor: theme.palette.background.paper,
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    outline: 'none',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 10, 8, 10), // top,right,bottom,left
  },
  mainComponent: {
    outline: 'none',
    backgroundColor: theme.palette.background.paper,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  bottomText: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(4),
  },
  buttonIcons: {
    width: 18,
    marginRight: theme.spacing(1),
  },
  descriptionText: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(1),
  },
  logout: {
    flexDirection: 'row',
  },
}));

export const Join = () => {
  const classes = useStyles();

  const [name, setName] = React.useState('');
  const [room, setRoom] = React.useState('');

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom style={{ fontWeight: 'bold' }}>
              Chat Application
            </Typography>
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom className={classes.meetingText}>
              Sign up here with name and room
            </Typography>
            <Grid item container justify={'center'} className={classes.centerContainer}>
              <Grid xs={12} sm={7} md={8} container style={{ height: '20%' }} className={'input-container'}>
                <InputBase
                  inputProps={{ 'aria-label': 'naked' }}
                  className={classes.inputStyle}
                  id="name"
                  fullWidth
                  placeholder="Enter your name here..."
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid item container justify={'center'}>
              <Grid xs={12} sm={7} md={8} container className={'input-container'}>
                <InputBase
                  inputProps={{ 'aria-label': 'naked' }}
                  className={classes.inputStyle}
                  id="room"
                  fullWidth
                  placeholder="Enter your room name here..."
                  type="text"
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container justify={'center'} className={[classes.buttonStyle, 'arrow-button']}>
              <Link onClick={(e) => (!name || !room ? e.preventDefault() : null)} to={`/chat?name=${name}&room=${room}`}>
                <ArrowForwardIcon size={24} color="primary" />
              </Link>
            </Grid>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
};
