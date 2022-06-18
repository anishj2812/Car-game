let arr=[[0,0,0],[0,0,0],[0,0,0],[0,1,0]];
let over=0;
let mySound= new Audio('mixkit_car_ignition_1535.mp3');
let gameOverSound= new Audio('gameOver.wav');
let clr;
let sound;
let again=document.getElementById("again");
let score=0;
let changeHighscore=document.getElementById("highscore");
changeHighscore.innerHTML="Highscore : "+localStorage.getItem("highscore");
function st(){
    let flag=0;
    for(let i=0;i<3;i++)
    {
        console.log(arr[3]+" "+arr[2]);
        if(arr[3][i]==1 && arr[2][i]==2)
        {
            gameOver();
            clearInterval(sound);
            clearInterval(clr);
            return;
        }
    }
    let x=(Math.floor(Math.random()*3));
    for(let i=3;i>0;i--)
    {
        if(arr[i][0]!=1)
        arr[i][0]=arr[i-1][0];
        if(arr[i][1]!=1)
        arr[i][1]=arr[i-1][1];
        if(arr[i][2]!=1)
        arr[i][2]=arr[i-1][2];
    }
    arr[0][0]=0;
    arr[0][1]=0;
    arr[0][2]=0;
    arr[0][x]=2;
    //console.log(x); 
    for(let i=0;i<=3;i++)
    {
        if(arr[i][0]==2)
        {
            let s=(i+1).toString()+'1';
            let pos=document.getElementById(s);
            pos.innerHTML="&#128664";
            pos.style.color="red";
        }
        else
        {
            let s=(i+1).toString()+'1';
            let pos=document.getElementById(s);
            pos.innerHTML="";
        }
        if(arr[i][1]==2)
        {
            let s=(i+1).toString()+'2';
            let pos=document.getElementById(s);
            pos.innerHTML="&#128650";
            pos.style.color="green";
            // pos.style.color="white";
        }
        else
        {
            let s=(i+1).toString()+'2';
            let pos=document.getElementById(s);
            pos.innerHTML="";
        }
        if(arr[i][2]==2)
        {
            let s=(i+1).toString()+'3';
            let pos=document.getElementById(s);
            pos.innerHTML="&#128660";
            pos.style.color="blue";
            // pos.style.color="white";
        }
        else
        {
            let s=(i+1).toString()+'3';
            let pos=document.getElementById(s);
            pos.innerHTML="";
        }
    }
    //console.log(arr[3]);

}
again.addEventListener('click',()=>{
    for(let i=0;i<=3;i++)
    {
        arr[i][0]=0;
        arr[i][1]=0;
        arr[i][2]=0;
    }
    arr[3][1]=1;
    let contain=document.getElementById("contain");
    contain.innerHTML="";
    clearInterval(clr);
    clearInterval(sound);
    mySound.pause();
    score=0;
    st();
    changeScore.innerHTML="Score : "+0;
    over=0;
})

// document.addEventListener('click',()=>{
    
// })
document.addEventListener('keydown',(event)=>{
    // console.log(event.key);
    // console.log(event.key);
    if(event.key=='a')
    {
        for(let i=1;i<3;i++)
        {
            if(arr[3][i]==1)
            {
                //console.log(i+" ");
                arr[3][i-1]=1;
                arr[3][i]=0;
                break;
            }
        }
    }
    if(event.key=='d')
    {
        for(let i=0;i<2;i++)
        {
            if(arr[3][i]==1)
            {
                console.log(i+" ");
                arr[3][i+1]=1;
                arr[3][i]=0;
                break;
            }
        }
    }
})
function gameOver(){
    let contain=document.getElementById("contain");
    contain.innerHTML="Game Over";
    contain.style.color="red";
    clearInterval(sound);
    gameOverSound.play();
    mySound.pause();
    let highscore=localStorage.getItem("highscore");
    if(score>highscore)
    {
        changeHighscore.style.color="green";
    }
    else
    {
        changeHighscore.style.color="white";
    }
    highscore=Math.max(highscore,score);
    localStorage.setItem("highscore",highscore);
    changeHighscore.innerHTML="Highscore : "+localStorage.getItem("highscore");
    console.log(highscore);
    over++;
}
let start=document.getElementById("button");
let changeScore=document.getElementById("score");
start.addEventListener('click',()=>{
    if(over!=0)
    return;
    mySound.play();
    sound=setInterval(()=>{
        score++;
        changeScore.innerHTML="Score : "+score;
        mySound.play();
    },10)
    clr=setInterval(st,1000);
})
// let check=document.getElementById("body");
setInterval(()=>{
    for(let i=0;i<3;i++)
    {
        if(arr[3][i]==1)
        {
            let s="4";
            s=s+(i+1).toString();
            let pos=document.getElementById(s);
            //console.log(s+" ");
            pos.innerHTML="&#128662";
            pos.style.color="white";
        }
        else
        {
            let s="4";
            s=s+(i+1).toString();
            let pos=document.getElementById(s);
            pos.innerHTML="";
        }
    }
},1)
let stop=document.getElementById("stop");
stop.addEventListener('click',()=>{
    clearInterval(clr);
    clearInterval(sound);
    mySound.pause();
})