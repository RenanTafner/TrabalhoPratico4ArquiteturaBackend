# Trabalho Prático 4 Arquitetura Backend

# Player de Música Utilizando a Arquitetura MVC com SPA

Neste trabalho, contruimos um player de música utilizando a arquitetura MVC (Model-View-Controller) com SPA(Single-Page-Application) com a linguagem javascript.

Como utilizamos apenas html e javascript puro, não existe a necessidade de subir nenhum servidor para testar a aplicação, basta baixar o projeto na sua máquina e abrir a página index.html.

Toda a estrutura MVC de lógica e funcionalidades da aplicação esta armazenada em um único arquivo script.js e a aplicação é representada por uma única página index.html.

A camada de Model é responsável por armazenar a estrutura e os objetos que representam as músicas.

A camada de View é responsável por executar as funcionalidades da aplicação referentes a página única da aplicação em si, como manipular os elementos visuais da tela que representam o player de música e seus devidos comportamentos.

A camda de Controller faz a linkagens dos elementos visuais da View com os comportamentos que dependem da camada Model.

Foram utilizados linhas de código que fazem uso do comando "document.querySelector" para buscar os elementos html da página com base em suas classes css e o tipo de tag correspondente do elemento em questão.

Foram utilizados fontes da google api e estilos css da api font awesome.

A página index.html já deixa a primeira música "Iron Maiden - Journeyman" já pré carragada como música inicial para facilitar a implementação da lógica.

O player exibe uma imagem da música corrente, possui uma barra de progresso com o tempo corrente/tempo total da música, controles tocar/pausar a música , avançar para a música posterior ou voltar para a música anterior.
