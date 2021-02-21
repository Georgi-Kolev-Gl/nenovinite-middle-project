(function(){
    let createNewsBtn = document.getElementById("addNewsButton");
    let validateLabel = document.getElementById("validateLabel");
    
    let validateInput = document.getElementById("validateNotRobot");
    function randomNumSumGenerator() {
        let a = Math.floor((Math.random() * 10) + 1);
        let b = Math.floor((Math.random() * 10) + 1);
        validateLabel.innerHTML = `${a} + ${b} =`;
        let result = a + b;
        return result;
    }
    let answer = randomNumSumGenerator();
    
    function validateAnswer(num){
    if(num === Number(validateInput.value)){
        console.log(true);
        return true
    }
    return false
    }
    
    createNewsBtn.addEventListener('click', function(ev){
    ev.preventDefault();
    if(!validateAnswer(answer)){
       answer = randomNumSumGenerator();
       validateInput.value = '';
       alert('Wrong Answer! Try Again');
    
    }else{
        console.log('success!');
        alert('success!')
    }
    })
})();

