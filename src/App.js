import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of Turkey?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Ankara', isCorrect: true },
				{ answerText: 'Paris', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Amazon?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: true },
				{ answerText: 'Elon Musk', isCorrect: false },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The Windows OS was created by which company?',
			answerOptions: [ 
				{ answerText: 'Apple', isCorrect: false },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: true },
			],
		},
		{
			questionText: 'How many LOTR books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '3', isCorrect: true },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: false },
			],
		},
	];
	const[currentQuestion, setCurrentQuestion] = useState(0);

	const[showScore,setShowScore] = useState(false);

	const[score,setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if(isCorrect=== true){
			setScore(score + 1);
		}
		
		const nextQuestion = currentQuestion + 1;
		if(nextQuestion < questions.length){
			setCurrentQuestion(nextQuestion);
		}else{
			setShowScore(true);
		}
		
	}
	return (
		<div className='app'>
		
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOptions)=> (
						<button onClick = {() => handleAnswerOptionClick(answerOptions.isCorrect)}>{answerOptions.answerText}
						</button>))}
					</div>
				</>
			)}
		</div>
	);
}
