import React, { useState } from "react";

const questionList = [{ question: "where is capital of Iran?", a: "Tehran", b: "Gorgan", c: "Yazd", answer: "a", checking: "false", choice: "" },
    { question: "where is the TakhteJamshid?", a: "Tehran", b: "Mashhad", c: "Shiraz", answer: "c", checking: "false", choice: "" },
    { question: "what is the answer of 2*2?", a: "2", b: "3", c: "4", answer: "c", checking: "false", choice: "" },
    { question: "what is the answer of 1+1?", a: "1", b: "2", c: "3", answer: "b", checking: "false", choice: "" },
    { question: "where is the zayandeRod?", a: "Yazd", b: "Gorgan", c: "Isfahan", answer: "c", checking: "false", choice: "" },
]
const formStyle = {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    flexDirection: "column",
    backgroundColor: "blue",
    borderRadius: "10%",
    color: "aliceblue",
    padding: 30,
    fontSize: 20
}

const divStyle = {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    alignItem: "center",
    alignContent: "center",
    fontSize: 20
}
const buttonStyle = {
    margin: 10,
    width: "40%",
    backgroundColor: "yellow",
    color: "blue"
}

function QuizApp() {
    const [questionNumber, setQuestionNUmber] = useState(1);
    const [score, setScore] = useState(0);

    const getSelected = () => {
        var rates = document.querySelectorAll(".answer");
        let rate_value;
        for (let i = 0; i < rates.length; i++) {
            if (rates[i].checked) {
                rate_value = rates[i].value;
            }
        }
        return rate_value;
    }
    const checkAnswer = () => {
        let result = getSelected();
        let correctAnswer = questionList[questionNumber - 1].answer;
        if (result) {
            if (result == correctAnswer) {
                setScore(previous => previous + 1)
            }
        }
    }
    const next = (event) => {
        event.preventDefault();
        setQuestionNUmber(preState => preState + 1);
        checkAnswer();
        let select = getSelected();
        if (select) {
            document.getElementById(select).checked = false;
        }
    }
    const finishAttempt = (event) => {
        event.preventDefault();
        checkAnswer();
        document.getElementById('questionDiv').classList.add('displayNon')
        document.getElementById('resultDiv').classList.remove('displayNon')
    }
    const startAgain = () => {
        document.getElementById('questionDiv').classList.remove('displayNon')
        document.getElementById('resultDiv').classList.add('displayNon')
        setQuestionNUmber(1);
        setScore(0);
    }
    return ( < div > < div id = "questionDiv" > < form style = { formStyle } >
            <
            label > Your score is: { score }
            /{questionList.length}</label >
            <
            label > question number { questionNumber }
            /{questionList.length}</label >
            <
            label > { questionList[questionNumber - 1].question } < /label> <
            div style = { divStyle } > < input type = 'radio'
            id = "a"
            value = "a"
            className = "answer" / > < label > { questionList[questionNumber - 1].a } < /label></div >
            <
            div style = { divStyle } > < input type = 'radio'
            id = "b"
            value = "b"
            className = "answer" / > < label > { questionList[questionNumber - 1].b } < /label></div >
            <
            div style = { divStyle } > < input type = 'radio'
            id = "c"
            value = "c"
            className = "answer" / > < label > { questionList[questionNumber - 1].c } < /label></div >
            <
            div style = { divStyle } > {
                (questionNumber < 5 ? < button style = { buttonStyle }
                    onClick = { next } > next < /button>:"")} {
                    (questionNumber == 5 ? < button style = { buttonStyle }
                        onClick = { finishAttempt } > Finish Attempt < /button>:"")} < /
                        div > <
                        /form>  < /
                        div > <
                        div className = "displayNon"
                        id = "resultDiv" >
                        <
                        div style = { formStyle } >
                        <
                        h1 > the result of your quiz is { score } < /h1> <
                        button style = { buttonStyle }
                        onClick = { startAgain } > Start Again! < /button> < /
                        div > <
                        /div> < /
                        div >
                    )
                }
                export default QuizApp;