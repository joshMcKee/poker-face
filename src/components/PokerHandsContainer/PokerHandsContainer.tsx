import { FC } from 'react';
import { Hand } from '../../model/Hand';
import { PokerHand } from './PokerHand';
import './PokerHandsContainer.css';

interface PokerHandsContainerProps {
    hands: Hand[];
}

export const PokerHandsContainer: FC<PokerHandsContainerProps> = ({ hands }) => {
    console.log('hands', hands);
    return (
        <div>
            <table className="poker-hand-container">
                { hands.map((hand, index) =>
                    <tr key={index}><PokerHand hand={hand}/></tr>
                )}
            </table>
        </div>
    )
}

