import { FC } from 'react';
import { handleFileSelect } from '../../services/FileService';

interface FileInputProps {
    onUpload: (selectedFile: File) => void;
}

export const FileInput: FC<FileInputProps> = ({ onUpload }) => (
    <div>
        Please select your poker hands file
        <input type="file" onChange={(e) => handleFileSelect(e, onUpload)} data-testid="file-input" />
    </div>
);
