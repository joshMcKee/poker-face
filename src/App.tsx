import { useState } from 'react';
import { Hand } from './model/Hand';
import { FileInput } from './components/FileInput/FileInput';
import { PokerHandsContainer } from './components/PokerHandsContainer/PokerHandsContainer';
import { getFileContents } from './services/FileService';
import { parseHandsFromString } from './services/PokerHandService';
import './App.css';

function App() {
  const [hands, setHands] = useState<Hand[]>([]);

  const processFileContents = (fileContents: string) => {
    const pokerHandsParsed = parseHandsFromString(fileContents);
    setHands(pokerHandsParsed);
  }

  const uploadFile = (file: File) => {
    getFileContents(file, processFileContents);
  };

  return (
    <div className="App">
      {"<PokerHands />"}
      <FileInput onUpload={uploadFile}/>
      <PokerHandsContainer hands={hands} />
    </div>
  );
}

export default App;
