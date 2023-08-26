const model ={

musicas :  [
    {nomeMusica:'Journeyman',
     nomeArtista:'Iron Maiden', 
     srcMusica:'resources/musicas/Iron Maiden - Journeyman.mp3', 
     imgMusica:'resources/imagens/Iron Maiden - Journeyman.jpg'},

     {nomeMusica:'Bring Me To Life',
     nomeArtista:'Evanescence', 
     srcMusica:'resources/musicas/Evanescence - Bring Me To Life.mp3', 
     imgMusica:'resources/imagens/Evanescence - Bring Me To Life.jpg'},

     {nomeMusica:'Hurricane',
     nomeArtista:'Thirty Seconds to Mars', 
     srcMusica:'resources/musicas/Thirty Seconds to Mars - Hurricane.mp3', 
     imgMusica:'resources/imagens/Thirty Seconds to Mars - Hurricane.jpg'},

     {nomeMusica:'In The End',
     nomeArtista:'Linkin Park', 
     srcMusica:'resources/musicas/Linkin Park - In The End.mp3', 
     imgMusica:'resources/imagens/Linkin Park - In The End.jpg'},

     {nomeMusica:'Listen To Your Heart',
     nomeArtista:'Roxette', 
     srcMusica:'resources/musicas/Roxette - Listen To Your Heart.mp3', 
     imgMusica:'resources/imagens/Roxette - Listen To Your Heart.jpg'},
    ],

    
    
};


const view ={

    indexMusica : 0,

    init: function(){

        document.querySelector('.classBotaoPlay').addEventListener('click', this.playMusica);

        document.querySelector('.classBotaoPause').addEventListener('click', this.pauseMusica);

        document.querySelector('.classAnterior').addEventListener('click', () => {
            this.indexMusica--;
            if (this.indexMusica < 0) {
            }
            controller.carregarMusica(this.indexMusica);
            this.pauseMusica();
            let barra = document.querySelector('progress');
            barra.style.width = '0%';
        });
        
        document.querySelector('.classProxima').addEventListener('click', () => {
            this.indexMusica++;
            if (this.indexMusica > 4){
                this.indexMusica = 0;
            }
            controller.carregarMusica(view.indexMusica);
            this.pauseMusica();
            let barra = document.querySelector('progress');
            barra.style.width = '0%';
        });


    },

    playMusica: function(){
        musica = document.querySelector('audio');
        document.querySelector('.classBotaoPlay').style.display = 'none';
        document.querySelector('.classBotaoPause').style.display = 'block';
        musica.play();
    },
    
    pauseMusica: function (){
        musica = document.querySelector('audio');
        document.querySelector('.classBotaoPlay').style.display = 'block';
        document.querySelector('.classBotaoPause').style.display = 'none';
        musica.pause();
    },
    
    

};


const controller ={
    init: function(){

        view.init();

        this.carregarMusica(view.indexMusica);

    },

    carregarMusica: function(index){
        musica = document.querySelector('audio');
        musica.setAttribute('src', model.musicas[index].srcMusica);
        
        musica.addEventListener('loadeddata', () => {

            duracaoMusica = document.querySelector('.classFim');
            imagem = document.querySelector('img');
            nomeMusica = document.querySelector('.classNomeMusicaENomeArtista h2');
            nomeArtista = document.querySelector('.classNomeMusicaENomeArtista h3');

            nomeMusica.textContent =  'Nome da Música: ' + model.musicas[index].nomeMusica;
            nomeArtista.textContent = 'Artista: ' + model.musicas[index].nomeArtista;
            imagem.src = model.musicas[index].imgMusica;
            duracaoMusica.textContent = this.transformarSegundosParaMinutos(Math.floor(musica.duration));
        });

        musica.addEventListener('timeupdate', () =>{
            let barra = document.querySelector('progress');
            barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
            let tempoDecorrido = document.querySelector('.classInicio');
            tempoDecorrido.textContent = this.transformarSegundosParaMinutos(Math.floor(musica.currentTime));
        });
    },

    transformarSegundosParaMinutos: function (segundos){
        novoSegundos = segundos % 60;

        if (novoSegundos < 10){
            novoSegundos = '0' + novoSegundos;
        }

        novoMinutos = Math.floor(segundos / 60);
    
        return novoMinutos+':'+novoSegundos;
    },

};

controller.init();


