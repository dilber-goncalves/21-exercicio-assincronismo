import fs, { link } from 'fs'
import Link from '../modelos/link'

const caminhoBancodeDados = './src/bancodedados.json'

export async function LerDados(): Promise<Link[]>{
    const dados =  await fs.promises.readFile(caminhoBancodeDados, 'utf-8')
    const parse = JSON.parse(dados.toString())
    return parse
}

export async function adicionarDados(link: Link): Promise<void>{
    const dados =  await LerDados()
    dados.push(link)
    await fs.promises.writeFile(caminhoBancodeDados, JSON.stringify(dados, null, '\t'), {
        encoding: 'utf-8',
        flag: 'w'
    })
}

export async function contarVisitas(identificador: string): Promise<void> {
    const dados = await LerDados()

    const link = dados.find(link => {
        link.identificador === identificador
    })

    const contadorVisitas: Link = {
        identificador: link!.identificador,
        url: link!.url,
        visitas: link!.visitas + 1
    }

    const index = dados.findIndex(link => {
        return link.identificador === identificador
    })

    dados.splice(index, 1, contadorVisitas)

    await fs.promises.writeFile(caminhoBancodeDados, JSON.stringify(dados, null, '\t'), {
        encoding: 'utf-8',
        flag: 'w'
    })
}