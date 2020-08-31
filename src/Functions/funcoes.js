import * as dateFns from 'date-fns'

export function generatePoints(padrao) {
    const dado = [padrao]
    for (let i = 1; i < 288; i++) {
        dado.push(dado[i - 1] + Math.round(Math.random() * 10 - 5)) //Criando um gráfico maneiro
    }
    return dado
}

export function generateTime() {
    const dado = []
    const date = new Date()
    const coff = 1000 * 60 * 5
    const agora = Math.round(date.getTime() / coff) * coff
    for (let i = 0; i < 288; i++) {
        if ((i + 32) % 32 == 0 || i == 287) {
            let hora = dateFns.addHours(agora, -(288 - i) / 288 * 24)
            dado[i] = dateFns.format(hora, 'HH:mm')
        }
    }
    return dado
}