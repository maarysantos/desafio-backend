import { Request, Response } from 'express'

import api from '../services/api'
import exams from '../models/Exams.json'

class ExamController {
  // Lista todos os exames 
  public async index (req: Request, res: Response): Promise<Response> {
    try {
      const response = await api.get('/5d681ede33000054e7e65c3f')
      const listExams = response.data.exams.map(exam => { return {
        id:exam.id,
        name: exam.name
      }})
      
      exams.push(response.data)
      return res.status(200).send(listExams)

    } catch (error) {
      console.error(error)
    }
  }
}

  

export default new ExamController()
