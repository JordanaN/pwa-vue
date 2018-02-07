<template>
    <section>
        <h1>Tirando fotos</h1>
        <div class="grid">
            <div>
                <video src="" controls autoplay></video>
                <a href="" @click.prevent="getVideo()">iniciar</a>
            </div>
            <div>
                <img class="photo">
                <a href="" @click.prevent="getPhoto()">tirar foto</a>
            </div>
        </div>
    </section>
</template>

<style>
    .grid{
        display: grid;
        grid-template-columns: 50% 50%
    }
</style>

<script>
    export default{ 
        data() {
            return {
                stream: null
            }
        },    
        methods:{
            getUserMedia(config, element){
                let successCallback = (stream) =>{
                this.stream = stream;
                    element.src = window.URL.createObjectURL(stream);
                }

                let errorCallback = (err) => {
                    console.log(err)
                }
                navigator.getUserMedia(config, successCallback, errorCallback)
            },
            getVideo(){
                 let config = {
                    video: true,
                    audio: false
                }
                let element = document.querySelector('video')
                this.getUserMedia(config, element)
            },
            getPhoto(){
                let photo = new ImageCapture(this.stream.getTracks()[0])
                //tira a foto
                photo.takePhoto()
                    //blob representa um objeto, do tipo arquivo, com  dados brutos imutáveis
                    .then((blob) => {
                        let element = document.querySelector('img.photo')
                        element.src = window.URL.createObjectURL(blob)

                        /** Enviado a foto para o servidor
                        let form = new FormData();
                        form.append('image', blob);
                        form.append('id', 1);
                        form.append('title', 'foto teste')
                        window.axios.post('/url/para/receber', form.then());
                        **/

                    })
            }            
        }
    }
</script>
