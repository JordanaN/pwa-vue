<template>
    <section>
        <h1>Notificações Locais</h1>
        <p> Permissão: {{permission}}
            <a href="" @click.prevent="request()" v-if="permission !== 'granted'">Solicitar</a>
        </p>

        <a href="" @click.prevent="fire(msg, body)">notificação</a>

    </section>
</template>

<script>
    export default {
        data(){
            return {
                permission: null,
                msg: 'Foi um click',
                body: 'esse click foi disparado a partir de um link no qual clicamos',
            }
        },
        methods: {
            fire(msg, body){
                let options = {
                    body: this.body,
                    icon: 'https://material.io/icons/static/images/icons-180x180.png'
                }
                new Notification(this.msg, options)
            },
            firePersistent(msg, body){
                let options = {
                    body: this.body,
                    icon: 'http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png'
                }
                navigator.serviceWorker.getRegistration()
                    .then(reg => req.showNotification(msg, options))
                    .catch(err => console.error(err))
            },
            request() {
                Notification.requestPermission(() => {
                this.permission = Notification.permission                    
                })
            }
        },
        mounted(){
            //permissão no navegador
            this.permission = Notification.permission
           // this.fire('foi no mountd')
        }
    }
</script>