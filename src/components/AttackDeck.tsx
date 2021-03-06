import React, { useState } from 'react';
import { Card as MuiCard, IconButton, CardMedia, Typography, CardContent, makeStyles } from '@material-ui/core';
import * as deckData from '../data/attackCards.json';
import { drawFromDeck, reshuffleDeck } from '../utils/Dealer';
import { Card } from '../models/Cards.js';
import SyncRoundedIcon from '@material-ui/icons/SyncRounded';
import TrendingFlatRoundedIcon from '@material-ui/icons/TrendingFlatRounded';

const AttackDeck = () => {
    const classes = useStyles();

    const [attackDeck, setAttackDeck] = useState({
        cards: deckData.baseAttackDeck.cards,
        drawnCard: deckData.placeHolderCard,
        discard: new Array<Card>(),
    });

    const onAttackClick = () => {
        const newDeck = drawFromDeck(attackDeck);
        setAttackDeck({
            ...newDeck
        });
    }

    const onReshuffleClick = () => {
        const newDeck = reshuffleDeck(attackDeck);
        setAttackDeck({
            ...newDeck
        });
    }

    return (
        <div>
            <MuiCard className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        Attack Deck
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Cards in deck: {attackDeck.cards.length}
                    </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                        <IconButton onClick={onReshuffleClick} aria-label="shuffle">
                            <SyncRoundedIcon/>
                        </IconButton>
                        <IconButton onClick={onAttackClick} aria-label="attack">
                            <TrendingFlatRoundedIcon/>
                        </IconButton>
                    </div>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={require(`../assets/` + attackDeck.drawnCard.imgSrc)}
                    title="Drawn Card"
                />
            </MuiCard>
        </div>
    );
}

export default AttackDeck;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      padding: theme.spacing(1),
      width: 390,
      margin: 15
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 219,
      borderRadius: 10
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
}));