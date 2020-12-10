var id15 = process.argv[2];
var id18;

const sfdc15to18 = (id15) => {
    let reverseString = (str) => {
        return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
      };
    
    const suffixChars = "ABCDEFGHIJKLMNOPQRSTUWXYZ012345";

    var block1 = id15.slice(0, 5);
    // let block2 = x.slice(5, 10);
    // let block3 = x.slice(10, 15);


    var block1a = reverseString(block1)
    var block1b = block1a.replace(/[a-z0-9]/g, "0");
    var block1c = block1b.replace(/[A-Z]/g, "1")
    var block1d = parseInt(block1c, 2)
    var block1e = suffixChars.charAt(block1d);

    console.log(block1, block1a, block1b, block1c, block1d, block1e);
}

sfdc15to18(id15);


// (function(){
//     var input=process.argv[2];
//     var output;
//         if(input.length == 15){
//             var addon="";
//             for(var block=0;block<3; block++)
//             {
//                 var loop=0;
//                 for(var position=0;position<5;position++){
//                     var current=input.charAt(block*5+position);
//                     if(current>="A" && current<="Z")
//                         loop+=1<<position;
//                 }
//                 addon+="ABCDEFGHIJKLMNOPQRSTUVWXYZ012345".charAt(loop);
//             }
//             output=(input+addon);
//         }
//         else{
//             console.log("Error : "+input+" isn't 15 characters ("+input.length+")");
//             return;
//         }
//     console.log('18-character ID:',output);
//     })();