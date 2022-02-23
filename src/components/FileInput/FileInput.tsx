import { FC } from "react";

interface FileInputProps {
    onUpload: (selectedFile: File) => void;
}

export const FileInput: FC<FileInputProps> = ({ onUpload }) => {
    const handleFileSelect = function (e: React.ChangeEvent<HTMLInputElement>) {
        const fileList = e.target.files;
    
        if (!fileList) return;
        
        onUpload(fileList[0]);
    };

    return (
        <div>
            Please select your poker hands file
            <input type="file" onChange={handleFileSelect}/>
        </div>
    )
}

