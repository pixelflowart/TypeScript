// Como podemos melhorar o esse código usando TS? 
enum Profissoes {
    Atriz,
    Padeiro,
}

interface IPessoa {
    nome: string,
    idade: number,
    profissao: Profissoes
}

let pessoa1 = {} as IPessoa;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissoes.Atriz;

let pessoa2 = {} as IPessoa;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profissoes.Padeiro;

let pessoa3 : IPessoa = {
    nome: "laura",
    idade: 32,
    profissao: Profissoes.Atriz
}

let pessoa4 : IPessoa = {
    nome : "carlos",
    idade : 19,
    profissao : Profissoes.Padeiro
}