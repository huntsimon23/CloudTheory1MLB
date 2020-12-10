var id = process.argv[2];

const sfdc15to18 = (id15) => {
    const reverseString = (str) => {
        return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
      };
    
    const suffixChars = "ABCDEFGHIJKLMNOPQRSTUWXYZ012345";

    const blockConvert = (block) => {
        var blockA = reverseString(block)
        var blockB = blockA.replace(/[a-z0-9]/g, "0");
        var blockC = blockB.replace(/[A-Z]/g, "1")
        var blockD = parseInt(blockC, 2)
        var blockE = suffixChars.charAt(blockD);
        return blockE
    }

    if (id15.length === 15) {
        var block1 = id15.slice(0, 5);
        var block2 = id15.slice(5, 10);
        var block3 = id15.slice(10, 15);
        
        let x = blockConvert(block1)
        let y = blockConvert(block2)
        let z = blockConvert(block3)

        console.log(x, y, z);

        let id18 = id15 + x + y + z;
        return console.log("Input id15: " + id15 + "n\ Output id18: " + id18);

    } else {
        return error("This is not a valid Salesforce 15 character ID")      
    }
}

const sfdc18to15 = (id18) => {
    if (id18.length === 18) {
        var id15 = id18.substr(0, 15)
        return console.log(id15)
    } else {
        return error("This is not a valid Salesforce 18 character ID") 
    }
};

const sfdcIsValidId = (id) => {
    return (id.length === 15 || id.length === 18) ? console.log(true):console.log(false);
}
// sfdc15to18(id15);
// sfdc18to15(id18);
sfdcIsValidId(id);