/* Crie uma classe onde pega dados das pessoas e imprima mostrando os dados coletados.
*/

class Pessoa {
   nome ;
   idade;
   endereço;

   descrever() {
       console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} e meu endereço é ${this.endereço}`);
   }
}

const vitor = new Pessoa();
vitor.nome = 'Carlos Eduardo Rodrigues de Freitas';
vitor.idade = 25;
vitor.endereço = 'rua mae luzia';

const edu = new Pessoa();
edu.nome = 'Carlos Eduardo De Freitas';
edu.idade = 35;
edu.endereço = ' rua das lajes';

edu.descrever();
vitor.descrever();
   

