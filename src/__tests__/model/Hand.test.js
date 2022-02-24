import { Hand } from '../../model/Hand';

it('creates a new instance of Hand', () => {
    const handString = 'AH TH JH QH KH';
    const handInstance = new Hand(handString);
    expect(handInstance.cards).toHaveLength(5);
});

it('returns acesHigh = true when there is a King in the hand', () => {
    const handString = 'AH TH JH QH KH';
    const handInstance = new Hand(handString);
    expect(handInstance.acesHigh()).toBeTruthy();
});

it('returns acesHigh = false when there is not a King in the hand', () => {
    const handString = 'AH TH JH QH 5H';
    const handInstance = new Hand(handString);
    expect(handInstance.acesHigh()).toBeFalsy();
});

it('returns checkForFlush = true when all cards have the same suit', () => {
    const handString = 'AH TH JH QH 5H';
    const handInstance = new Hand(handString);
    expect(handInstance.checkForFlush()).toBeTruthy();
});

it('returns checkForFlush = false when there are multiple suits in the hand', () => {
    const handString = 'AH TH JH QH 5D';
    const handInstance = new Hand(handString);
    expect(handInstance.checkForFlush()).toBeFalsy();
});

it('returns an array of objects containing card names and the number of occurences for each', () => {
    const handString = 'AH AS AD 3C 6H';
    const handInstance = new Hand(handString);
    const nameOccurences = handInstance.checkNameOccurences();

    expect(nameOccurences).toHaveLength(3);
    const firstName = nameOccurences[0];
    expect(firstName.name).toBe('A');
    expect(firstName.count).toEqual(3);

    const secondName = nameOccurences[1];
    expect(secondName.name).toBe('3');
    expect(secondName.count).toEqual(1);

    const thirdName = nameOccurences[2];
    expect(thirdName.name).toBe('6');
    expect(thirdName.count).toEqual(1);
});

it('sorts the cards in the hand by name (aces high)', () => {
    const unsortedHandString = '5S 1H 8D KC 8H';
    const sortedHandString = '1H 5S 8D 8H KC';

    const testHandInstance = new Hand(unsortedHandString);
    const sortedHandInstance = new Hand(sortedHandString);

    testHandInstance.sortLowToHigh();

    for (let i = 0; i < 5; i++) {
        expect(testHandInstance.cards[i].name).toBe(sortedHandInstance.cards[i].name);
        expect(testHandInstance.cards[i].suit).toBe(sortedHandInstance.cards[i].suit);
    }
    
});

it('sorts the cards in the hand by name (aces low)', () => {
    const unsortedHandString = '5S 1H 8D QC JD';
    const sortedHandString = '1H 5S 8D JD QC';

    const testHandInstance = new Hand(unsortedHandString);
    const sortedHandInstance = new Hand(sortedHandString);

    testHandInstance.sortLowToHigh();

    for (let i = 0; i < 5; i++) {
        expect(testHandInstance.cards[i].name).toBe(sortedHandInstance.cards[i].name);
        expect(testHandInstance.cards[i].suit).toBe(sortedHandInstance.cards[i].suit);
    }
});

it('returns an array of card names', () => {
    const testHandString = 'AD 5D 8H TC KS';
    const expectedNames = ['A', '5', '8', 'T', 'K'];

    const testHandInstance = new Hand(testHandString);

    expect(testHandInstance.getCardNames()).toStrictEqual(expectedNames);
});

it('returns true if the hand contains a straight', () => {
    const testHandString = '5D 6H 9C 7S 8D';
    const testHandInstance = new Hand(testHandString);

    expect(testHandInstance.checkForStraight()).toBeTruthy();
});

it('returns false if the hand does not contain a straight', () => {
    const testHandString = '5D 6H 9C 7S KD';
    const testHandInstance = new Hand(testHandString);

    expect(testHandInstance.checkForStraight()).toBeFalsy();
});

it('returns true if the hand contains a straight (checkForStraightV2)', () => {
    const testHandString = '5D 6H 9C 7S 8D';
    const testHandInstance = new Hand(testHandString);

    expect(testHandInstance.checkForStraightV2()).toBeTruthy();
});

it('returns false if the hand does not contain a straight (checkForStraightV2)', () => {
    const testHandString = '5D 6H 9C 7S KD';
    const testHandInstance = new Hand(testHandString);

    expect(testHandInstance.checkForStraightV2()).toBeFalsy();
});