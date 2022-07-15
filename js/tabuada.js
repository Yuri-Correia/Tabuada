 /* comentário em js */

 //Declaração de uma função
 function calculaTabuada(){

    //Obtendo do DOM o tbody da tabela
    let tabuada = document.querySelector("#tabuada tbody")
    //Obtendo o valorA do campo input number e convertendo em inteiro
    let valorA = parseInt(document.querySelector("#valorA").value);
    //Limpando o conteudo do tbody
    tabuada.innerHTML = '';
    //Criando um laço de repetição de 0 a 10
    for (let valorB = 0; valorB <= 10; valorB++) {

        //Calculando o resultado da linha atual
        let resultado = valorA * valorB;
        //Criando o template das colunas da linha atual
        let tempalte = `
                <td>${valorA}</td>
                <td>x</td>
                <td>${valorB}</td>
                <td>=</td>
                <td>${resultado}</td>                    
            `;
        //Criando o elemento tr
        let tr = document.createElement('tr');
        //Inserindo as colunas nas linhas
        tr.innerHTML = tempalte;
        //Inserindo a linha na tabela
        tabuada.append(tr);
    }//fechando o for

}//fechando a função

//Chamando a nossa função pela primeira vez
calculaTabuada();

//Adicionando o evento de alteração ao campo número
document.querySelector("#valorA").addEventListener('change', calculaTabuada);