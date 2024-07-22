import entradaDados from 'readline-sync';

console.log("Escolha uma das alternativas: \n");
console.log("1- Listar os sálarios minimos de 2010 à 2020");
console.log("2- Listar o índice IPCA de 2010 à 2020");
console.log("3- Comparação entre o percentual de aumento salarial e O IPCA");
let escolha = entradaDados.question('Digite o número da sua escolha: ');


let salario_m = [
    {Ano: 2010, Salario: 510},
    {Ano: 2011, Salario: 545},
    {Ano: 2012, Salario: 622},
]


let inflacao = [
    {Ano: 2010, Ipca: 5.91},
    {Ano: 2011, Ipca: 6.50},
    {Ano: 2012, Ipca: 6.85},  
]

let ano1 = salario_m[0].Ano;
let ano2 = salario_m[1].Ano;
let ano3 = salario_m[2].Ano;

let sa1 = salario_m[0].Salario;
let sa2 = salario_m[1].Salario;
let sa3 = salario_m[2].Salario;

let ipca1 = inflacao[0].Ipca;
let ipca2 = inflacao[1].Ipca;
let ipca3 = inflacao[2].Ipca;

let escolha1 = Number(escolha);

switch (escolha1) {
    case 1:
        console.log("\n\nAno: ".padEnd(30,'.')+ano1);
        console.log("Salário Minimo: ".padEnd(26,'.')+"R$"+sa1+",00\n");
        console.log("Ano: ".padEnd(30,'.')+ano2);
        console.log("Salário Minimo: ".padEnd(26,'.')+"R$"+sa2+",00\n");
        console.log("Ano: ".padEnd(30,'.')+ano3);
        console.log("Salário Minimo: ".padEnd(26,'.')+"R$"+sa3+",00\n");        
        
        break;
    case 2:
        console.log("\n\nAno: ".padEnd(30,'.')+ano1);
        console.log("Inflação IPCA: ".padEnd(30,'.')+ipca1+"%");
        console.log("Ano: ".padEnd(30,'.')+ano2);
        console.log("Inflação IPCA: ".padEnd(30,'.')+ipca2+"%");
        console.log("Ano: ".padEnd(30,'.')+ano3);
        console.log("Inflação IPCA: ".padEnd(30,'.')+ipca3+"%");
        
        break;
    case 3:
        salario_m[0].ipca= inflacao[0].Ipca;
        salario_m[1].ipca= inflacao[1].Ipca;
        salario_m[2].ipca= inflacao[2].Ipca;
        for  (let cont of salario_m) {
            let dif1 = sa2-sa1;
            let dif2 = sa3-sa1;
            let percentual_1 = (dif1/ano1)*100;
            let percentual_2 = (dif2/ano2)*100;
            let percentual1 = percentual_1.toFixed(2);
            let percentual2 = percentual_2.toFixed(2);
            salario_m[1].crescimento = percentual1;
            salario_m[2].crescimento = percentual2;
            console.log("Ano:".padEnd(30,'.')+cont.Ano);
            console.log("Salario Minimo: ".padEnd(26,'.')+"R$"+cont.Salario+",00");
            console.log("Crescimento salarial: ".padEnd(30,'.')+cont.crescimento+"%");
            console.log("Inflação Ipca: ".padEnd(30,'.')+cont.ipca+"%\n\n");

            }
        break;

    default:
        console.log("Opção Incorreta.");
        break;




        
}
        


       
        

    
        





//let diferenca = salario_ano - salario_anterior //dentro da opção 3
//let percentual_de_crescimento = (diferenca/salario_anterior)*100; //dentro da opcao 3
