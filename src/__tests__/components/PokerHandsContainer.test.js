import ReactDOM from 'react-dom';
import { PokerHandsContainer } from '../../components/PokerHandsContainer/PokerHandsContainer';
import { Hand } from '../../model/Hand';

it('renders the PokerHandsContainer component', () => {
    const testHand = new Hand('AH AD AS AC 2D');

    const div = document.createElement('div');
    ReactDOM.render(<PokerHandsContainer hands={[testHand]}/>, div);
});