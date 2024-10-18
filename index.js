console.log('This is my first program in javascript')
let user = { 
    name:'Hailemeskel Getaneh', 
    email:'hailegetaneh1221@gmail.com',
    greeting: function (){
        console.log(`Hello every one , My name is ${this.name} `)
    }

}

console.log(user.greeting())