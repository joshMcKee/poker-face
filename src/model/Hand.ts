import { Card } from './Card';

export class Hand {
    cards: Card[];

    constructor(hand: string) {
        const cardsInput = hand.split(' ');
        const newCards: Card[] = [];
        cardsInput.forEach(card => {
            newCards.push(new Card(card));
        });
        this.cards = newCards;
    }

    public acesHigh(): boolean {
        let acesHigh = false;
        this.cards.forEach(card => {
            if (card.name === 'K') {
                acesHigh = true;
            }
        });

        return acesHigh;
    }

    public checkForFlush(): boolean {
        const suits: string[] = [];
        this.cards.forEach(card => {
            if (suits.indexOf(card.suit) === -1) {
                suits.push(card.suit);
            }
        });

        if (suits.length === 1) {
            return true;
        }
        return false;
    }

    public checkNameOccurences() {
        const nameOccurences: { name: string, count: number; }[] = [];
        this.cards.forEach(card => {
            let cardIsInArray = false;
            for (let i = 0; i < nameOccurences.length; i++) {
                if (nameOccurences[i].name === card.name) {
                    nameOccurences[i].count += 1;
                    cardIsInArray = true;
                }
            }

            if (!cardIsInArray) {
                nameOccurences.push({
                    name: card.name,
                    count: 1
                });
            }
        });

        return nameOccurences;
    }

    public sortLowToHigh() {
        const acesHigh = this.acesHigh();
        this.cards = this.cards.sort((a, b) => {
            let firstCard = a.getNumericValue(acesHigh);
            let secondCard = b.getNumericValue(acesHigh);

            if (firstCard < secondCard) {
                return -1;
            }
            if (firstCard > secondCard) {
                return 1;
            }
            return 0;
        });
    }

    public getCardNames() {
        const cardNames: string[] = [];
        this.cards.forEach(card => {
            cardNames.push(card.name);
        });

        return cardNames;
    }

    public checkForStraight() {
        const potentialStraightString = 'A23456789TJQKA';
        this.sortLowToHigh();

        const cardNames = this.getCardNames();
        const cardNamesString = cardNames.join('');
        if (potentialStraightString.indexOf(cardNamesString) > -1) {
            return true;
        }

        return false;
    }

    public checkForStraightV2() {
        this.sortLowToHigh();
        const acesHigh = this.acesHigh();
        const numericCardValues: number[] = [];

        this.cards.forEach(card => {
            numericCardValues.push(card.getNumericValue(acesHigh));
        });

        const penultimateIndex = (numericCardValues.length - 1);
        for (let i = 0; i < penultimateIndex; i++) {
            const currentCardValue = numericCardValues[i];
            const nextCardValue = numericCardValues[i + 1];

            if (nextCardValue - currentCardValue === 1) {
                continue;
            }

            return false;
        }

        return true;
    }
}