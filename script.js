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
async function getdata() {//async - sycronization function
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();//.json makes the respose of the api into js readable format
    console.log(data);//prints value of data in console of the website
    
}
getdata();//calling the function getdata()
async function askAI() {
    const question = document.getElementById("question").value;
    const response = await fetch("http://localhost:3000/api/ask" ,{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({question:question})
    });
    const data = await response.json();
    console.log(data);
}
askAI();