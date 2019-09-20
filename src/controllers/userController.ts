import { Request, Response } from 'express'

import users from '../models/Users.json'

class ClientController {
  // Mostra todos os usuários cadastrados
  public async index (req: Request, res: Response): Promise<Response> {
    const list = users.map(el => el)
    return res.status(200).json(list)
  }

  // Cadastra novo usuário no sistema
  public async store (req: Request, res: Response): Promise<Response> {
    const { cpf } = req.body

    const filtroUsuarioCadastrado = users.filter(user => user.cpf === cpf)

    if (filtroUsuarioCadastrado.length) return res.status(409).send('User exists')

    users.push(req.body)
    return res.status(201).send('Usuário cadastrado')
  }

  public async update (req: Request, res: Response): Promise<Response> {
    // const cpf = req.param

    const filtroUsuarioCadastrado = users.find(user => user.cpf)
    return res.send(filtroUsuarioCadastrado)
  }
}

export default new ClientController()
