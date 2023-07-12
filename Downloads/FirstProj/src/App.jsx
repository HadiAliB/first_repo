import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
     
const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#f8f8f8');

  const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const tweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quote}" - ${author}`
    )}`;
    window.open(tweetUrl);
  };

  const handleNewQuote = () => {
    const randomColor = getRandomColor();
    setBackgroundColor(randomColor);
    fetchQuote();
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="wrapper" style={{ backgroundColor }}>
      <div id="quote-box">
        <div className="quote-text">
          <i className="fa fa-quote-left"></i>
          <span id="text">{quote}</span>
        </div>
        <div className="quote-author">- <span id="author">{author}</span></div>
        <div className="buttons">
          <button id="new-quote" onClick={handleNewQuote}>New Quote</button>
          <a id="tweet-quote" href="#!" onClick={tweetQuote}>
            <i className="fa fa-twitter"></i> Tweet Quote
          </a>
        </div>
      </div>
      <div className="footer">
      </div>
    </div>
  );
};

export default App;

