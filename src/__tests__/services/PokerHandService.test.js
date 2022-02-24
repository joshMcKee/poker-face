import * as PokerHandService from '../../services/PokerHandService';
import { Hand } from '../../model/Hand';

it('takes poker hands input string and returns an array of Hands', () => {
    const handInput = 'AS 2D 5H 6C 6D\nAC 3D 6H 4C 4D\nKC KD KS KH AC';
    const hand1 = new Hand('AS 2D 5H 6C 6D');
    const hand2 = new Hand('AC 3D 6H 4C 4D');
    const hand3 = new Hand('KC KD KS KH AC');

    const parsedHands = PokerHandService.parseHandsFromString(handInput);

    expect(parsedHands).toHaveLength(3);
    expect(parsedHands[0]).toStrictEqual(hand1);
    expect(parsedHands[1]).toStrictEqual(hand2);
    expect(parsedHands[2]).toStrictEqual(hand3);
});

it('returns Royal Flush when passed a hand that contains a royal flush', () => {
    const testHandString = 'AS TS JS QS KS';
    const testHandInstance = new Hand(testHandString);

    expect(PokerHandService.getHandName(testHandInstance)).toBe('Royal Flush');
});

it('returns Straight Flush when passed a hand that contains a straight flush', () => {
    const testHandString = '2S 5S 3S 4S 6S';
    const testHandInstance = new Hand(testHandString);

    expect(PokerHandService.getHandName(testHandInstance)).toBe('Straight Flush');
});

it('returns Flush when passed a hand that contains a flush', () => {
    const testHandString = '2S 8S 3S 9S 6S';
    const testHandInstance = new Hand(testHandString);

    expect(PokerHandService.getHandName(testHandInstance)).toBe('Flush');
});

it('returns Straight when passed a hand that contains a straight', () => {
    const testHandString = '2D 5S 3C 4S 6H';
    const testHandInstance = new Hand(testHandString);

    expect(PokerHandService.getHandName(testHandInstance)).toBe('Straight');
});

it('returns High Card when passed a hand where all card names are unique and there is no flush or straight', () => {
    const testHandString = '2D 7S 3C KS 6H';
    const testHandInstance = new Hand(testHandString);

    expect(PokerHandService.getHandName(testHandInstance)).toBe('High Card');
});

it('returns Four of a kind when passed a hand that contains four cards with the same name', () => {
    const testHandString = '2D 2S 2C 4S 2H';
    const testHandInstance = new Hand(testHandString);

    expect(PokerHandService.getHandName(testHandInstance)).toBe('Four of a kind');
});

it('returns Full house when passed a hand that contains a three of a kind and a pair', () => {
    const testHandString = '2D 2S 2C 4S 4H';
    const testHandInstance = new Hand(testHandString);

    expect(PokerHandService.getHandName(testHandInstance)).toBe('Full house');
});

it('returns Three of a kind when passed a hand that contains three cards with the same name', () => {
    const testHandString = '2D 2S 2C 4S 5H';
    const testHandInstance = new Hand(testHandString);

    expect(PokerHandService.getHandName(testHandInstance)).toBe('Three of a kind');
});

it('returns Two pair when passed a hand that contains two pairs', () => {
    const testHandString = '2D 2S 3C 4S 4H';
    const testHandInstance = new Hand(testHandString);

    expect(PokerHandService.getHandName(testHandInstance)).toBe('Two pair');
});

it('returns One pair when passed a hand that contains two cards with the same name', () => {
    const testHandString = '2D 2S 3C 4S 5H';
    const testHandInstance = new Hand(testHandString);

    expect(PokerHandService.getHandName(testHandInstance)).toBe('One pair');
});