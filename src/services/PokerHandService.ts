import { Hand } from '../model/Hand';

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

export function getHandName(hand: Hand): string {
    const isFlush = hand.checkForFlush();
    const isStraight = hand.checkForStraight();
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
    if (isStraight) {
        return 'Straight';
    }

    const nameOccurences = hand.checkNameOccurences();
    if (nameOccurences.length === 5)  {
        return 'High Card';
    }
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

    if (fourOfAKind) {
        return 'Four of a kind';
    }
    if (threeOfAKind) {
        if (pairs > 0) {
            return 'Full house';
        }
        return 'Three of a kind';
    }
    if (pairs === 2) {
        return 'Two pair';
    }
    return 'One pair';
}