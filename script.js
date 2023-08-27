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
    
        retornarMusica: function(index){
            return this.musicas[index];
        },
        
        
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
    
        renderMusicaInfo: function (nomeMusicaPagina,nomeMusicaModel,
            nomeArtistaPagina, nomeArtistiaModel,
            duracaoMusicaPagina,duracaoMusicaModel,
            imagemPagina,imagemMusicaModel){
    
                nomeMusicaPagina.textContent = 'Nome da Música: ' + nomeMusicaModel;
                nomeArtistaPagina.textContent = 'Artista: '+ nomeArtistiaModel;
                duracaoMusicaPagina.textContent = duracaoMusicaModel;
                imagemPagina.src = imagemMusicaModel;
    
        },

        renderMusicaSrc: function (musicaPagina, musicaModelSrc){
            musicaPagina.setAttribute('src', musicaModelSrc);
        },
    
        renderTempoDecorrido: function(tempoDecorridoPagina,novoTempoDecorridoPagina){
            tempoDecorridoPagina.textContent = novoTempoDecorridoPagina;
        },

        renderBarraPercent: function (barra, percent){
            barra.style.width = percent;
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
            musicaPagina = document.querySelector('audio');
            musicaModel = model.retornarMusica(index);
            
            view.renderMusicaSrc(musicaPagina,musicaModel.srcMusica);
            
            musicaPagina.addEventListener('loadeddata', () => {
    
                duracaoMusicaPagina = document.querySelector('.classFim');
                imagemPagina = document.querySelector('img');
                nomeMusicaPagina = document.querySelector('.classNomeMusicaENomeArtista h2');
                nomeArtistaPagina = document.querySelector('.classNomeMusicaENomeArtista h3');
    
                view.renderMusicaInfo(nomeMusicaPagina, musicaModel.nomeMusica,
                    nomeArtistaPagina,musicaModel.nomeArtista,
                    duracaoMusicaPagina,this.transformarSegundosParaMinutos(Math.floor(musicaPagina.duration)),
                    imagemPagina,musicaModel.imgMusica);
            });
    
            musicaPagina.addEventListener('timeupdate', () =>{
                let barra = document.querySelector('progress');
                let percent =Math.floor((musicaPagina.currentTime / musicaPagina.duration) * 100) + '%';
                view.renderBarraPercent(barra,percent)
                let tempoDecorrido = document.querySelector('.classInicio');
                view.renderTempoDecorrido(tempoDecorrido,this.transformarSegundosParaMinutos(Math.floor(musicaPagina.currentTime)));
    
                if(percent == '100%'){
                    view.pauseMusica();
                }
    
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