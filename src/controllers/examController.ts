import { Request, Response } from 'express'

import api from '../services/api'

class ExamController {
  // Mostra todos os usuários cadastrados
  public async index (req: Request, res: Response): Promise<Response> {
    try {
      const response = await api.get('/5d681ede33000054e7e65c3f')
      const result = response.data
      const lista = result.exams.map(({ id, name }) => { id, name })
      return res.send(lista)
    } catch (error) {
      console.error(error)
    }
  }
}
export default new ExamController()
