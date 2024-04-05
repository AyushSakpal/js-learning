
let show = function(){
    console.log(`function expression...`);
}
setTimeout( show, 3000);
setTimeout( function(){
     console.log(`function expression....`);
 }, 3000);

setTimeout(function(){
    console.log('Hello');
    setTimeout(function(){
        console.log('Good Morning');
        
    }, timeout);
}, timeout);