<em>13 - Entrega: Objeto Moeda</em>

<h1>Objeto Moeda</h1>

<h2>Instruções</h2>

Hoje você irá praticar o que leu sobre [objetos JavaScript](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript/Objetos/B%C3%A1sico) ao criar um objeto moeda. O objeto moeda irá representar se uma jogada de moeda cai do lado cara ou coroa. Você irá adicionar vários métodos (um método é uma função que é uma propriedade de um objeto) a ele para auxiliar na jogada da moeda e mostrar qual lado está sendo exibido.

Crie um diretório chamado 'coinObject', e um arquivo JS chamado coinObject.js. <strong>É importante seguir as instruções para os nomes, ou então as ferramentas de teste/avaliação não funcionarão.</strong>

Comece seguindo o template do código, e complete as partes faltantes ou incompletas do código indicadas nos comentários:

```

const coin = {
   state: 0,
   flip: function() {
       // 1. Um ponto: Randomicamente configura a propriedade “estado” do 
       // seu objeto moeda para ser um dos seguintes valores:
       // 0 ou 1: use "this.state" para acessar a propriedade "state" neste objeto.
   },
   toString: function() {
       // 2. Um ponto: Retorna a string "Heads" ou "Tails", dependendo de como
       //  "this.state" está como 0 ou 1.
   },
   toHTML: function() {
       const image = document.createElement('img');
       // 3. Um ponto: Configura as propriedades do elemento imagem 
       // para mostrar a face voltada para cima ou para baixo dependendo
       // do valor de this.state está 0 ou 1.
       return image;
   }
};

function display20Flips() {
   const results = [];
   // 4. Um ponto: Use um loop para arremessar a moeda 20 vezes, cada vez 
   // mostrando o resultado como uma string na página. 
   // Depois de que seu loop terminar, retorne um array com o 
   // resultado de cada arremesso.

}

function display20Images() {
   const results = [];
   // 5. Um ponto: Use um loop para arremessar a moeda 20 vezes, cada vez 
   // mostrando o resultado como uma imagem na página. 
   // Depois de que seu loop terminar, retorne um array com o 
   // resultado de cada arremesso.

}

```

Observe que você precisará fazer o download ou criar as imagens para exibir os lados da moeda para o método toHTML. Crie uma pasta chamada images em seu repositório para armazená-las.

Observe também que, por convenção, o método toString() de um objeto deve sempre retornar uma string que representa o objeto. Este valor de retorno pode então ser usado em qualquer output de depuração de erros que você possa precisar fazer. Mais para frente, isso será uma convenção útil para se seguir. Entretanto, um método toString() não deve produzir diretamente qualquer output visual por si só; ou seja, ele não deve realizar um console.log() por conta própria, por exemplo: ele deve apenas retornar a string.

Teste e demonstre que seu objeto moeda está completo fazendo o seguinte:

<ul>

<li>
<em>Um ponto:</em> Escreva uma função chamada display20Flips que usa um loop para jogar a moeda 20 vezes. Cada vez que a moeda for jogada, exiba o resultado em forma de string na página (use o método toString()) e também envie o resultado para o array 'results'. Depois que seu loop estiver completo, retorne o array results.
</li>
<li>
<em>Um ponto:</em> Escreva uma função chamada display20Images, novamente usando um loop para jogar a moeda 20 vezes, mas desta vez, em vez de exibir o resultado como uma string, exiba-o como um elemento HTML IMG na página (use o método toHTML()). Também envie cada resultado para o array 'results' e retorne-o depois de completar o loop.
</li>
</ul>

<strong>Seu arquivo HTML não deve ter mais nada no corpo, exceto sua tag script. Em vez de fazer o hardcode dos elementos HTML, crie-os dinamicamente com Javascript e faça o append deles em seu HTML.</strong>

<h3>Envio</h3>

Faça o push do código para seu repositório no GitLab e use a função do GitLab Pages que permite que o site seja visualizado diretamente. no GitLab, por favor, adicione ka-br-correcoes como membro do seu projeto com a permissão "Reporter", e <strong>envie a url de seu gitlab pages (Ex: https://nomedeusuário.gitlab.io/coinObject) E a url de seu repositório gitlab (Ex: https://gitlab.com/nomedeusuário/coinObject). Você pode enviar a url de seu repo como comentário do seu envio principal no Canvas.</strong>
