import { FC } from 'react';
import { handleFileSelect } from '../../services/FileService';

interface FileInputProps {
    onUpload: (selectedFile: File) => void;
}

// Component to accept file upload
export const FileInput: FC<FileInputProps> = ({ onUpload }) => (
    <div>
        Please select your poker hands file <br />
        <input type="file" accept="text/plain" onChange={(e) => handleFileSelect(e, onUpload)} data-testid="file-input" />
    </div>
);
