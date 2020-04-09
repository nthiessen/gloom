import { Deck } from "../models/Cards";

export function drawFromDeck(deck: Deck): Deck {
    if (!deck.cards.length) {
        reshuffleDeck(deck);
    }

    const randomIndex = Math.floor(Math.random() * deck.cards.length);
    
    deck.drawnCard = deck.cards[randomIndex];
    deck.discard.push(deck.cards[randomIndex])
    deck.cards.splice(randomIndex, 1);

    return deck;
}

export function reshuffleDeck(deck: Deck): Deck {
    let cards = deck.cards.concat(deck.discard);

    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    deck.cards = cards;
    deck.discard = [];

    return deck;
}