const { readFile, writeFile } = require('fs');

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err) {
        console.log(err);
        return;
    }
    const first  = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err) {
            console.log(err);
            return;
        }
        const second  = result;
        writeFile('./content/result-async.txt','This is async text file',(err,result)=>{
            if(err){
                return;
            }
            console.log(result);
        });
    });
})