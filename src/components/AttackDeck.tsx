import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import * as deckData from '../data/attackCards.json';
import { drawFromDeck, reshuffleDeck } from '../utils/Dealer';
import { Card } from '../models/Cards.js';

const AttackDeck = () => {
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
            <div>Attack Modifier: {attackDeck.drawnCard.description}</div>
            <div>Cards in deck: {attackDeck.cards.length}</div>
            <Button variant="outlined" color="primary" onClick={onAttackClick}>Attack</Button>
            <Button variant="outlined" color="secondary" onClick={onReshuffleClick}>Reshuffle</Button>
        </div>
    );
}

export default AttackDeck;