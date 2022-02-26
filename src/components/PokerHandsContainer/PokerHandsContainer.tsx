import { FC } from 'react';
import { Hand } from '../../model/Hand';
import { PokerHand } from './PokerHand';
import './PokerHandsContainer.css';

interface PokerHandsContainerProps {
    hands: Hand[];
}

// Container that maps provided poker hands to rows
export const PokerHandsContainer: FC<PokerHandsContainerProps> = ({ hands }) => (
    <div>
        <table className="poker-hand-container">
            <tbody>
                { hands && hands.map((hand, index) =>
                    <tr key={index} className="poker-hand-row" data-testid="poker-hand-row">
                        <PokerHand hand={hand}/>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
)

