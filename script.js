alert("JS is connected!");
function answerquestion()
{
     let question = document.getElementById("question").value;
    // document.getElementById("answer").innerText = "you asked: " + question;
    if(question == 'hello'){
        document.getElementById("answer").innerText = "Hello! I'm your AI Study Buddy.";
    }
    else if(question == 'who are you')
    {
        document.getElementById("answer").innerText = "I'm your AI Study Buddy!";
    }
    else document.getElementById("answer").innerText = "your question: " + question;
}