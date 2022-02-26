// Reads the contents of the provided file and calls the callback function with contents as the argument
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

// Checks the change event for a file list and passes the first file to the onUpload callback
export function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>, onUpload: Function) {
    const fileList = e.target.files;

    if (!fileList || fileList.length === 0) return;
    
    onUpload(fileList[0]);
};