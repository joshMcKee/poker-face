import { Hand } from '../model/Hand';

// Takes a string of poker hands and converts it into an array of Hand objects
export function parseHandsFromString(handsString: string) {
    const handsSplit = handsString.split('\n');
    const numberOfHands = handsSplit.length;

    const parsedHands: Hand[] = [];

    for (let i = 0; i < numberOfHands; i++) {
        const newHand = new Hand(handsSplit[i]);

        parsedHands.push(newHand);
    }

    return parsedHands;
}

// Takes a Hand argument and uses its methods to determine the type of hand
export function getHandName(hand: Hand): string {
    const isFlush = hand.checkForFlush();
    const isStraight = hand.checkForStraight();

    // Check for different types of flush
    if (isFlush) {
        if (isStraight) {
            const cardNames = hand.getCardNames();
            if (cardNames.indexOf('K') > -1 && cardNames.indexOf('A') > -1) {
                return 'Royal Flush';
            }
            return 'Straight Flush';
        }
        return 'Flush';
    }

    // If the hand is a straight and not a flush
    if (isStraight) {
        return 'Straight';
    }

    const nameOccurences = hand.checkNameOccurences();

    // If all cards are unique
    if (nameOccurences.length === 5)  {
        return 'High Card';
    }

    // Types of hand when all cards are not unique
    let pairs = 0;
    let threeOfAKind = false;
    let fourOfAKind = false;

    nameOccurences.forEach(cardName => {
        const { count } = cardName;
        if (count === 4) {
            fourOfAKind = true;
        }
        if (count === 3) {
            threeOfAKind = true;
        }
        if (count === 2) {
            pairs += 1;
        }
    });

    // Five cards so if fourOfAKind = true it can only be that
    if (fourOfAKind) {
        return 'Four of a kind';
    }

    // Two possibilities for three of a kind. three + pair = Full house, just three = Three of a kind
    if (threeOfAKind) {
        if (pairs > 0) {
            return 'Full house';
        }
        return 'Three of a kind';
    }

    // Two possibilities for pairs. two pair or one pair
    if (pairs === 2) {
        return 'Two pair';
    }
    return 'One pair';
}