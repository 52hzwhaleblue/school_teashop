/* $('#multi3').mdbRange({
    width: '100%',
    single: {
        active: true,
        multi: {
            active: true,
            rangeLength: 2
        },
    }
}); */

// slider
var counter = 1; 
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3){
        counter = 1;
    }
},5000);