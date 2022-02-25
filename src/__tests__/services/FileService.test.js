import * as FileService from '../../services/FileService';

let callback;
let file;

beforeAll(() => {
    callback = jest.fn();
    file = new File(['KS QD JC TH 9S'], 'test-hand.txt', { type: 'text/plain' });
})

describe('getFileContents', () => {
    let reader;

    beforeAll(() => {
        jest.spyOn(global, 'FileReader').mockImplementation(function () {
            this.readAsText = jest.fn();
        });

        FileService.getFileContents(file, callback);

        reader = FileReader.mock.instances[0];
    });

    it('calls the provided callback function with the file contents', () => {
        reader.onload({ target: { result: 'KS QD JC TH 9S' } });

        expect(callback).toBeCalledTimes(1);
        expect(callback).toBeCalledWith('KS QD JC TH 9S');
    });

    it('does not call the callback if the file fails to load', () => {
        reader.onload({ target: { result: false } });

        expect(callback).toBeCalledTimes(0);
    });
});

describe('handleFileSelect', () => {
    it('calls the provided callback function with the uploaded file', () => {
        FileService.handleFileSelect({ target: { files: [file] } }, callback);

        expect(callback).toBeCalledTimes(1);
        expect(callback).toBeCalledWith(file);
    });

    it('does not call the provided callback function if there is no file', () => {
        FileService.handleFileSelect({ target: { files: [] } }, callback);

        expect(callback).toBeCalledTimes(0);
    });
})