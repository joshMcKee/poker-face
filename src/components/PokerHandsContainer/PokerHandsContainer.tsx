import { FC } from 'react';
import { Hand } from '../../model/Hand';
import { PokerHand } from './PokerHand';
import './PokerHandsContainer.css';

interface PokerHandsContainerProps {
    hands: Hand[];
}

export const PokerHandsContainer: FC<PokerHandsContainerProps> = ({ hands }) => (
    <div>
        <table className="poker-hand-container">
            <tbody>
                { hands.map((hand, index) =>
                    <tr key={index} className="poker-hand-row"><PokerHand hand={hand}/></tr>
                )}
            </tbody>
        </table>
    </div>
)

