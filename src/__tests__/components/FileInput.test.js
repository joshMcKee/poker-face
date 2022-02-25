import ReactDOM from 'react-dom';
import {render, fireEvent, screen} from '@testing-library/react';
import { FileInput } from '../../components/FileInput/FileInput';

it('renders the FileInput component', () => {
    const onUpload = jest.fn();

    const div = document.createElement('div');
    ReactDOM.render(<FileInput onUpload={onUpload}/>, div);
});

it('calls the handleFileSelect in the FileService when a file is uploaded', async () => {
    const file = new File(['KS QD JC TH 9S'], 'test-hand.txt', { type: 'text/plain' });
    const onUpload = jest.fn();

    render(<FileInput onUpload={onUpload}/>);
    const input = screen.getByTestId('file-input');

    fireEvent.change(input, {
        target: { files: [file] }
    });

    expect(onUpload).toBeCalledTimes(1);
    expect(onUpload).toBeCalledWith(file);
});