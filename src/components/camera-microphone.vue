<template>
    <section>
        <h1>Áudio e Vídeo</h1>
        <div class="grid">
            <div>
                <video src="" controls autoplay></video>
                <a href="" @click.prevent="getVideo()">iniciar</a>
            </div>
            <div>
                <audio src="" controls autoplay></audio>
                <a href="" @click.prevent="getAudio()">iniciar</a>
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
        methods:{
            getUserMedia(config, element){
                let successCallback = (stream) =>{
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
            getAudio(){
                let config = {
                    video: false,
                    audio: true
                }
                let element = document.querySelector('audio')
                this.getUserMedia(config, element)
            }            
        }
    }
</script>
