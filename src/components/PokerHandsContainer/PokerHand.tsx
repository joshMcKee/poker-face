import { FC } from 'react';
import { Hand } from '../../model/Hand';
import { getHandName } from '../../services/PokerHandService';

interface PokerHandProps {
    hand: Hand;
}

export const PokerHand: FC<PokerHandProps> = ({ hand }) => {
    return (
        <>
            { hand.cards.map((card, index) =>
                <td key={index} className="poker-card">{card.name}{card.suit}</td>
            )}
            <td>- {getHandName(hand)}</td>
        </>
    )
}

