import process from "process";

class HelloWorld
{
    constructor(public msg : string)
    {
    }

    greet()
    {
        return this.msg;
    }
}

console.log(`process.argv.length: ${process.argv.length}`);
for (var i = 0, iEnd = process.argv.length; i < iEnd; i++)
{
    console.log(`argv[${i}]: ${process.argv[i]}`);
}

const hello = new HelloWorld("Hello, world!");
console.log(hello.greet());
//console.log("Hello, world!");
