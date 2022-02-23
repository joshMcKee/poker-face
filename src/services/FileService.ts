export function getFileContents(file: File, callback: Function) {
    const reader = new FileReader();
    let fileContents = '';

    reader.addEventListener('load', (event) => {
        if (event.target!.result) {
            fileContents = event.target!.result as string;
            console.log('fileContents', fileContents);
            return callback(fileContents);
        }
    });
    
    reader.readAsText(file);
}