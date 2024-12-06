import { contarVisitas, LerDados } from "../utilitarios/arquivos"

export default class ObterLink {
        controlador(arg0: string, controlador: any) {
            throw new Error('Method not implemented.')
        }
        async asynccontrolador(req: any, res: any) {
            const { identificador } = req.params

            const bancoDeDados = await LerDados()

            const existeLink = bancoDeDados.find(link => {
                link.identificador === identificador
            })

            if (!existeLink) {
                return res.status(404).json({ erro: 'Link não existente '})
            }

            await contarVisitas(existeLink.identificador)

            return res.json({
                url: existeLink.url
            })
    }
}