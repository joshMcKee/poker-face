export function getFileContents(file: File, callback: Function) {
    const reader = new FileReader();
    let fileContents = '';

    reader.onload = (event) => {
        if (event.target!.result) {
            fileContents = event.target!.result as string;
            return callback(fileContents);
        }
    };
    
    reader.readAsText(file);
}

export function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>, onUpload: Function) {
    const fileList = e.target.files;

    if (!fileList || fileList.length === 0) return;
    
    onUpload(fileList[0]);
};