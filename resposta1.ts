// Como podemos rodar isso em um arquivo .ts sem causar erros? 

//let employee = {};
//employee.code = 10;
//employee.name = "John";

interface IEmployee {
    code: number;
    name: string;
}

let employee = {} as IEmployee;
employee.code = 10;
employee.name = "John";

let employee2 : IEmployee = {
    code: 22,
    name: 'Brun',
}

let employee3 = {
    code: 12,
    name: 'Pedro',    
}

let employee4 : {code: number, name: string} = {
    code: 12,
    name: 'Az'
}