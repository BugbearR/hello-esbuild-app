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

const hello = new HelloWorld("Hello, world!");
console.log(hello.greet());
//console.log("Hello, world!");
