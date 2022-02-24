import { Card } from '../../model/Card';

it('creates a new instance of Card', () => {
    const cardString = 'AH';
    const cardInstance = new Card(cardString);
    expect(cardInstance.name).toEqual('A');
    expect(cardInstance.suit).toEqual('H');
});

it('returns the correct numeric value for all cards when ace is high', () => {
    const cards = ['2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', 'TH', 'JH', 'QH', 'KH', 'AH'];
    const numericValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    let acesHigh = true;

    for (let i = 0; i < cards.length; i++) {
        const cardInstance = new Card(cards[i]);
        expect(cardInstance.getNumericValue(acesHigh)).toEqual(numericValues[i]);
    }
});

it('returns the correct numeric value for all cards when ace is low', () => {
    const cards = ['AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', 'TH', 'JH', 'QH', 'KH'];
    const numericValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    let acesHigh = false;

    for (let i = 0; i < cards.length; i++) {
        const cardInstance = new Card(cards[i]);
        expect(cardInstance.getNumericValue(acesHigh)).toEqual(numericValues[i]);
    }
});