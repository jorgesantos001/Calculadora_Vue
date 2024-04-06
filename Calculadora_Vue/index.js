const { createApp } = Vue;

createApp ({
    data() {
        return {
            display: "0",
            numeroAnterior: null,
            numeroAtual: null,
            operador: null
        }
    },
    methods: {
        lidarBotao(valor) {
            switch (valor)
            {
                case '*':
                case '/':
                case '-':
                case '+':
                    this.lidarOperador(valor);
                    break;

                case '.':
                    this.lidarDecimal();
                    break;

                case 'C':
                    this.lidarLimpar();
                    break;

                case '=':
                    this.lidarIgual();
                    break;

                default:
                    this.lidarNumero(valor);
            }
        },
        lidarOperador(valor) {
            console.log("O botão digitado foi: ",valor);
            if (this.numeroAtual === null) {
                this.numeroAnterior = parseFloat(this.display);
            } else {
                this.lidarIgual();
            }
            this.numeroAtual = parseFloat(this.display);
            this.display = '0';
            this.operador = valor;
        },
        lidarDecimal() {
            console.log("O botão de decimal foi pressionado");
            if (!this.display.includes('.')) {
                this.display += '.';
            }
        },        
        lidarLimpar() {
            this.display = '0';
            this.numeroAtual = null;
            this.numeroAnterior = null;
            this.operador = null;
        },
        lidarIgual() {
            console.log("Entrou no igual")
            if (this.operador && this.numeroAnterior !== null) {
                this.numeroAtual = parseFloat(this.display)
                switch (this.operador) {
                    case '+':
                        this.display = (this.numeroAnterior + this.numeroAtual).toString();
                        break;
                    case '-':
                        this.display = (this.numeroAnterior - this.numeroAtual).toString();
                        break;
                
                    case '*':
                        this.display = (this.numeroAnterior * this.numeroAtual).toString();
                        break;

                    case '/':
                        this.display = (this.numeroAnterior / this.numeroAtual).toString();
                        break;
                }
                this.numeroAnterior = null;
                this.numeroAtual = null;
                this.operador = null;
            }
        },
        lidarNumero(valor) {
            console.log("O botão digitado foi: ", valor);
            if (this.display === '0') {
                this.display = valor;
            } else {
                this.display += valor;
            }
        }
    }
}).mount("#app");