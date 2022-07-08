import {useState, useEffect, useMemo} from 'react';
import './app.css';
import Trivia from './components/Trivia';
import Timer from './components/Timer';
import Start from './components/Start';

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const [name, setName] = useState(null);
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];
  const moneyPyramid = useMemo(() =>
    [
      {id:1, amount: "$ 100"},
      {id:2, amount: "$ 200"},
      {id:3, amount: "$ 300"},
    ].reverse(),
   []); 
  useEffect(()=>{
    questionNumber > 1 && setEarned(moneyPyramid.find(m=>m.id === questionNumber - 1).amount)
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="app">
      {name ? (
        <>
        <div className="main">
        {stop ? (
          <h1 className="endText"> you earned: {earned}</h1> 
        ) : (
        <>
        <div className="top">
          <div className="timer">
            <Timer setStop={setStop}
            questionNumber={questionNumber}
            />
          </div>
        </div>
        <div className="bottom">
          <Trivia 
          data={data} 
          setStop={setStop} 
          setQuestionNumber={setQuestionNumber} 
          questionNumber={questionNumber}/>
        </div>
      </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map(m=>(
          <li className={questionNumber === m.id ? "moneyLIstItem active" : "moneyListItem"}>
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
          </li>
          ))}
        </ul>
      </div>
        </>
      ) : <Start setName={setName}/> }
      
    </div>
  );
}

export default App;
