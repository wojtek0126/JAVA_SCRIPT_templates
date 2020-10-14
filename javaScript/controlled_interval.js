const runInterval = (n= 8) => {
    var timesRun = 0;
    var interval = setInterval(function(){
        timesRun += 1;
        if(timesRun === n){
            clearInterval(interval);
            console.log('ended');
        }
        console.log("Hello");
    }, 500);
}