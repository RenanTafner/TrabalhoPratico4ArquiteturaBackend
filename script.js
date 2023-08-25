const model ={

musicas :  [
    {titulo:'Guitar solo', artista:'João Tinti', src:'musicas/We Ride! - Reed Mathis.mp3', img:'imagens/rock.jpg'},
    {titulo:'Samba raiz', artista:'Bossa Nova Brasil', src:'musicas/Ella Vater - The Mini Vandals.mp3', img:'imagens/samba.jpg'},
    {titulo:'Música piano', artista:'John Green', src:'musicas/A Brand New Start - TrackTribe (1).mp3', img:'imagens/piano.jpg'}
    ],
};





const view ={

    indexMusica : 0,

    renderizarMusica: function(index){
        musica = document.querySelector('audio');
        musica.setAttribute('src', model.musicas[index].src);
        
        musica.addEventListener('loadeddata', () => {

            duracaoMusica = document.querySelector('.fim');
            imagem = document.querySelector('img');
            nomeMusica = document.querySelector('.descricao h2');
            nomeArtista = document.querySelector('.descricao i');

            nomeMusica.textContent = model.musicas[index].titulo;
            nomeArtista.textContent = model.musicas[index].artista;
            imagem.src = model.musicas[index].img;
            duracaoMusica.textContent = this.segundosParaMinutos(Math.floor(musica.duration));
        });

        musica.addEventListener('timeupdate', () =>{
            let barra = document.querySelector('progress');
            barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
            let tempoDecorrido = document.querySelector('.inicio');
            tempoDecorrido.textContent = this.segundosParaMinutos(Math.floor(musica.currentTime));
        });
    },

    tocarMusica: function(){
        musica = document.querySelector('audio');
        musica.play();
        document.querySelector('.botao-pause').style.display = 'block';
        document.querySelector('.botao-play').style.display = 'none';
    },
    
    pausarMusica: function (){
        musica = document.querySelector('audio');
        musica.pause();
        document.querySelector('.botao-pause').style.display = 'none';
        document.querySelector('.botao-play').style.display = 'block';
    },
    
    segundosParaMinutos: function (segundos){
        let campoMinutos = Math.floor(segundos / 60);
        let campoSegundos = segundos % 60;
        if (campoSegundos < 10){
            campoSegundos = '0' + campoSegundos;
        }
    
        return campoMinutos+':'+campoSegundos;
    },

};


const controller ={
    init: function(){

        view.renderizarMusica(view.indexMusica);

        document.querySelector('.botao-play').addEventListener('click', view.tocarMusica);

        document.querySelector('.botao-pause').addEventListener('click', view.pausarMusica);

        musica = document.querySelector('audio');

        document.querySelector('.anterior').addEventListener('click', () => {
            view.indexMusica--;
            if (view.indexMusica < 0) {
                view.indexMusica = 2;
            }
            view.renderizarMusica(view.indexMusica);
            view.pausarMusica();
        });
        
        document.querySelector('.proxima').addEventListener('click', () => {
            view.indexMusica++;
            if (view.indexMusica > 2){
                view.indexMusica = 0;
            }
            view.renderizarMusica(view.indexMusica);
            view.pausarMusica();
        });


    },

};

controller.init();


