import ReactDOM from 'react-dom';
import { PokerHand } from '../../components/PokerHandsContainer/PokerHand';
import { Hand } from '../../model/Hand';

it('renders the PokerHand component', () => {
    const testHand = new Hand('AH AD AS AC 2D');

    const tr = document.createElement('tr');
    ReactDOM.render(<PokerHand hand={testHand}/>, tr);
});