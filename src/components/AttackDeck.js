import React, { useState} from 'react';
import { Button } from '@material-ui/core';
import * as deckData from '../data'


const AttackDeck = () => {
    const [attackDeck, setAttackDeck] = useState(deckData)

    return (
        <div>
            <Button>Attack</Button>
            <Button>Shuffle</Button>
        </div>
    );
}

export default AttackDeck;