import { FC } from 'react';
import { Hand } from '../../model/Hand';
import { getHandName } from '../../services/PokerHandService';

interface PokerHandProps {
    hand: Hand;
}

// Component to map each card in the hand to a td and display the name of the hand
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

