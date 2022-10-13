`${O que faz o JavaScript}`

Cliente x Server

Cliente <-> Navegador <-> Nuvem Internet <-> Servidor

- JavaScript funciona mais em client side. mas também pode ser utilizada em backend
- Tecnologias relacionadas
	* HTML		 : Responsável pelo contéudo
	* CSS		 : Responsável pelo design
	* JavaScript : Responsável pelas integrações/ interações

/*Q01
Sabe a diferença entre um cliente e um servidor para a Internet?
*/
/*Q02
Para que serve HTML, CSS, e JavaScript?
*/
/*Q03
Cite 4 sites que fazem uso do JavaScript?
*/	

------------------------------------------------------------------
`${Evolução do JavaScript}`

/*Q01
Sabe que empresa criou o JavaScript?
*/
/*Q02
Java e JavaScript possuem alguma relação?
*/
/*Q03
Oque ECMAScript tem a ver com JavaScript?
*/
/*Q04
Sabia que o programa WhatsApp desktop é criado em JavaScript ?
*/

------------------------------------------------------------------
`${Primeiros Passos JavaScript}`
Bibliografia
	- Livro: JavaScript o guia definitivo
	- Livro: Javascript guia do programador
	- Livro: Guia de referência da Mozilla developer.mozilla.org
	- Livro: guia de referência da Ecma ecma-international.org -> ECMA 262

Download Nodejs
https://nodejs.org/en/

------------------------------------------------------------------
`${Primeiros Scripts}`	

------------------------------------------------------------------
`${Tipos de dados e Variáveis}`

Existem 3 formas de demilitar string no javascript
"" Por aspas duplas
'' Por aspas simples
`` Por cráse

Identificadores
	- Podem começar com letra, $, _
	- não podem começar com númeres
	- É possível usar letras ou números
	- É possível usar acentos e símbolos
	- Não podem conter espaços
	- Não podem ser palavras reservadas

Dicas
	- Maísculas e minúsculas fazem diferença
	- Tenta escolher nomes coerentes para variáveis
	- Evite se tornar um `programador alfabeto`ou um `programador contador`

Tipo number
	5 18 -12 0.5 -15.9 3.14 8.0
		infinity
		Nan(Not a number)

Tipo string
	"Google" 'JavaScript' `Maria`

Tipo boolean
	true false	

Tipo NULL
Tipo undefined
Tipo object
	- Array
Tipo function

------------------------------------------------------------------
/*Q01
Oque é uma variável
*/
/*Q02
Como declarar uma variávle numérica inteira ou real usando JS?
*/
/*Q03
Quais são os tipos primitivos do JavaScript
*/
/*Q04
Oque significa colocar o valor null dentro de uma variável ?
*/
------------------------------------------------------------------

`${Manipulação de Dados}`

var ou let ou const para declaração de variáveis



        // number + number para adição
        // string + string para concatenação

        //Number.parseInt(n) -> converção para número inteiro
        //Number.parseFloat(n) -> converção para número real
        //Number(n) -> conversão para inteiro/ real, porém o JavaScript que decide

        //Converção de número para string
        //String(n)
        //n.toString()

        //${} -> usa template string
        //Utilizado para interporlar o placeholder, strings com variáveis

        //Formantando Strings
        //s.length  mostra o tamanho da string
        //s.toUppercase()  tudo para 'MAÍUSCULA'
        //s.toLowerCase()  tudo para 'mínuscula'


        //Formatar números
        n.toFixed(d) // Método interno de todos os number. Para quantidade de casas decimais
        replace('.',',')//replace para trocar 

        //Para mostrar o tipo de moeda
         n1.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
		'R$ 1.545,50'
		 n1.toLocaleString('pt-BR',{style: 'currency', currency: 'USD'})
		'US$ 1.545,50'
		 n1.toLocaleString('pt-BR',{style: 'currency', currency: 'EUR'})
		'€ 1.545,50'
