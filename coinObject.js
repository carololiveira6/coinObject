const coin = {
    state: 0,
    flip: function() {
        // 1. Um ponto: Randomicamente configura a propriedade “estado” do 
        // seu objeto moeda para ser um dos seguintes valores:
        // 0 ou 1: use "this.state" para acessar a propriedade "state" neste objeto.

        // gerar numero aleatorio (0,1): Math.floor(Math.random() * 1 + 1);
        // Se sair 0, o resto da divisão por 2 dá 0, cai no IF e setamos o lado da moeda como 'Cara'.
        // Se der 1, o resto da divisão por 2 dá 1, cai no ELSE e setamos o lado da moeda como 'Coroa'.

        let move = Math.round(Math.random());
            this.state = move;
    },

    toString: function() {
        // 2. Um ponto: Retorna a string "Heads" ou "Tails", dependendo de como
        //  "this.state" está como 0 ou 1.

        if (this.state === 0) {
            return "Cara";
        } else {
            return "Coroa";
        }
    },

    toHTML: function() {
        const image = document.createElement('img');
        // 3. Um ponto: Configura as propriedades do elemento imagem 
        // para mostrar a face voltada para cima ou para baixo dependendo
        // do valor de this.state está 0 ou 1.
        if (this.state === 0){
            image.src = './img/cara.png'
        } else {
            image.src = './img/coroa.png'
        }
        let body = document.querySelector('body');
        // body.innerHTML = ''
        body.appendChild(image);
        return image;
    }
 };
 
 function display20Flips() {
    const results = [];
    // 4. Um ponto: Use um loop para arremessar a moeda 20 vezes, cada vez 
    // mostrando o resultado como uma string na página.
    

    for (let i = 0; i < 20; i++) {
        coin.flip();
        results.push(coin.toString());
        let string = document.createElement('h2');
        string.innerHTML = coin.toString();
        let body = document.querySelector('body');
        // image = coin.toHTML()
        body.appendChild(string);
    }
    console.log(results)
    return results;
    // Depois de que seu loop terminar, retorne um array com o 
    // resultado de cada arremesso.
 }
 display20Flips()
 
 function display20Images() {
    const results = [];
    let image
    // 5. Um ponto: Use um loop para arremessar a moeda 20 vezes, cada vez 
    // mostrando o resultado como uma imagem na página.
    for (let i = 0; i < 20; i++) {
        coin.flip();
        results.push(coin.toString());
        image = coin.toHTML()
    }
    // Depois de que seu loop terminar, retorne um array com o 
    // resultado de cada arremesso.
    return results
 }
display20Images()
