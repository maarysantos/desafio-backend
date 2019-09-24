import { Request, Response } from 'express'

import schedule from '../models/Schedule.json'

class ScheduleController {
    // Lista todos os exames 
    public async index (req: Request, res: Response): Promise<Response> {
        const exams = schedule.map(exam => exam)
        return res.status(200).json(exams)

    }
    
    public async store (req: Request, res: Response): Promise<Response> {
    //cpf vai vim do req.session 
        const { idExam, nameExam, cpf, date, time } = req.body

        if (!schedule.length){
            schedule.push(req.body)
        }

       // let filtroContagemPacientePorexame = schedule.find(idExame => idExame.id === idExam)
        //.find(shedule => schedule.count)


       return res.send('ola')
      }
    }
  
  
    
  
  export default new ScheduleController()