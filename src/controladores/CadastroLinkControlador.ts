import { Request, Response } from "express";
import Link from "../modelos/link";
import { LerDados, adicionarDados } from "../utilitarios/arquivos";

export default class CadastraLink {
    async controlador(req: any, res: any) {
        const { url, identificador } = req.body
        if (!url || !identificador) {
            return res.status(400).json({ erro: 'Url e identificador são obrigatórios' })
        }
        
        const bancoDeDados = await LerDados()
        const existeLink = bancoDeDados.find(link => {
            link.identificador === identificador})

        if (existeLink) {
            return res.status(400).json({erro: 'Ja existe um link com esse identificador'})
        }

        const novoLink = new Link(identificador, url)

        await adicionarDados(novoLink)

        return res.status(201).json(novoLink)
    }
}