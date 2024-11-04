let data=[];

let fName=document.querySelector('.FirstName');
let lName=document.querySelector('.LastName');
let ctry=document.querySelector('.country');
let score=document.querySelector('.Scores');
let btn=document.querySelector('.add');
let mainBox=document.querySelector('#main-container');


function functionalBtn(){
    document.querySelectorAll('.playersDetails').forEach((item,idx) =>{
        item.addEventListener('click',(e) =>{
            if(e.target.classList.contains("incre") && data[idx].Score > 0){
                let score=parseInt(data[idx].Score);
                score+=5;
                data[idx].Score=score;
                
            }

            else if(e.target.classList.contains("decre") && data[idx].Score > 0){
                let score=parseInt(data[idx].Score);
                score-=5;
                data[idx].Score=score;
               
            }

            else{
                data.splice(idx, 1); // Remove the item at the current index
               
            }
            updateDateOnBoard();
        })
    })
}



function updateDateOnBoard(){

    
    mainBox.innerHTML = '';

    if (data.length === 0) {
        const para = document.createElement('p');
        para.innerHTML = "No Player is Added";
        mainBox.appendChild(para);
    }


    else{
        data.sort((p1,p2) =>{
            return p2.Score - p1.Score;
        });
    
        let display="";
        data.forEach((player) =>{
            display+=
            `<div class="playersDetails">
              <div class ="name">
                <span>${player.FName}</span>
                <span>${player.LName}</span>
              </div>
              <span>${player.Country}</span>
              <span>${player.Score}</span>
              <div class="button">
                <button class="incre">+5</button>
                <button class="del">X</button>
                <button class="decre">-5</button>
              </div>
            </div>`
    
    
           
        })  
        mainBox.innerHTML=display;
        functionalBtn();
    }

    
}


btn.addEventListener('click',function(e){
    e.preventDefault();
    if(fName.value === '' || lName.value === '' || ctry.value === '' || score.value === ''){
        alert('Please add required Information before adding');
        return;
    }
    else{

        //making object that contains every data of the player which needed to be added
        let players={
            FName:fName.value,
            LName:lName.value,
            Country :ctry.value,
            Score:score.value

        };

        // later object will be added inside the data array
        data.push(players);
        updateDateOnBoard(); //function which help in updating the content on UI

        // re-setting the data in the form after button is pressed
        fName.value='';
        lName.value='';
        ctry.value='';
        score.value='';

    }
})