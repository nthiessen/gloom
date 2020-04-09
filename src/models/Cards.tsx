export type Deck = {
    cards: Card[];
    drawnCard: Card;
    discard: Card[];
}

export type Card = {
    name: string;
    description: string;
    imgSrc: string;
}