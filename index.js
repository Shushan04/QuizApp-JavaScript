const questions = [

    {
        question:"How do you write 'Hello World' in an alert box?",
        answers:[
            {text: "alert('Hello Word');", correct:true},
            {text: "msgBox('Hello Word');", correct:false},
            {text: "alertBox('Hello Word');", correct:false},
            {text: "msg('Hello Word');", correct:false},
        ]
    },
    {
        question:"How do you create a function in JavaScript?",
        answers:[
            {text: "function myFunction()", correct:true},
            {text: "function:myFunction()", correct:false},
            {text: "function = myFunction()", correct:false},
            {text: "function+myFunction()", correct:false},
        ]
    },
    {
        question:"How to write an if statement in JavaScript?",
        answers:[
            {text: "if i = 5", correct:false},
            {text: "if i = 5 then", correct:false},
            {text: "if i == 5 then", correct:false},
            {text: "if(i == 5)", correct:true},
        ]
    },
    {
        question:"How to write an if statement for executing some code if 'i' is Not equal to 5?",
        answers:[
            {text: "if(i <> 5)", correct:false},
            {text: "if(i != 5)", correct:true},
            {text: "if i <> 5", correct:false},
            {text: "if i =! 5 then", correct:false},
        ]
    },
    {
        question:"How does a for loop start?",
        answers:[
            {text: "for(i = 0; i <= 5; i++)", correct:true},
            {text: "for i = 1 to 5", correct:false},
            {text: "for(i <= 5; i++)", correct:false},
            {text: "for(i = 0; i <= 5)", correct:false},
        ]
    },
    {
        question:"What is the correct way to write a JavaScript array?",
        answers:[
            {text: "var colors = (1:'red',2:'green',3:'blue')", correct:false},
            {text: "var colors = ['red','green','blue']", correct:true},
            {text: "var colors = 'red', 'green','blue'", correct:false},
            {text: "var colors = 1 = ('red'),2 = ('green'),3 = ('blue')", correct:false},
        ]
    },
    {
        question:"How do you find the number with the highest value of x and y?",
        answers:[
            {text: "Math.ceil(x,y)", correct:false},
            {text: "top(x,y)", correct:false},
            {text: "Math.max(x,y)", correct:true},
            {text: "ceil(x,y)", correct:false},
        ]
    },
];
