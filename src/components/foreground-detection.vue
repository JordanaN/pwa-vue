<template>
    <section>
        <h1>Verifica ação de primeiro plano</h1>

        <p>Contagem regressica {{counter}}</p>

        <p v-for="state in log">
            A janela esta em: 
            <span v-if="!state">Visivel</span>
            <span v-if="state">Oculta</span>
        </p>
    </section>
</template>

<script>
    export default{
        data(){
            return{
                log: [],
                counter: 10
            }
        },
        methods: {
            visibility(){
                //identifica se esta em primeiro plano ou não
                this.log.push(document.hidden)
            },
            time(){
                if (document.hidden){
                    return;
                }
                if (this.counter > 0) {
                    this.counter --;
                }else{
                    this.counter = 'done'
                }
            }
        },
        mounted(){
            document.addEventListener('visibilitychange', this.visibility)
            setInterval( () => this.time(), 1000)
        }
    }
</script>