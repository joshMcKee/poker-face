export class Card {
    name: string;
    suit: string;

    constructor(description: string) {
        this.name = description[0];
        this.suit = description[1];
    }

    // Converts the card name to a numeric value. For face cards this is based on where they come in a straight. Ace depends on the acesHigh arguments 
    getNumericValue(acesHigh: boolean) {
        let numericValue;
        switch (this.name) {
            case 'A':
                numericValue = acesHigh ? 14 : 1;
                break;
            case 'T':
                numericValue = 10;
                break;
            case 'J':
                numericValue = 11;
                break;
            case 'Q':
                numericValue = 12;
                break;
            case 'K':
                numericValue = 13;
                break;
            default:
                numericValue = Number(this.name);
        }

        return numericValue;
    }
}