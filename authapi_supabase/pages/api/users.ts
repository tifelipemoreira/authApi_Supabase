import pool from '../../config/dbPostgress'

export async function handler(req: any, res: any) {
  const httpMehod: string = req.method
  var field: string
  var id: string
  switch (httpMehod) {
    case 'GET':
      //Get serve para buscar por id, erp_user_cod e email
      if (req.query.id) {
        field = "id"
        id = req.query.id
      } else if (req.query.erp_user_code) {
        field = "erp_user_code"
        id = req.query.erp_user_code
      } else if (req.query.email) {
        field = "email"
        id = req.query.email
      } else {
        return res.status(400).json({ res: "Bad Request" })
      }
      pool.query(`SELECT id,erp_user_code,email FROM USERS WHERE ${field} = '${id}' `, (error: any, result: any) => {
        //retorna objeto com resultado da query
        if (typeof error != 'undefined') {
          //console.log("erro")
          return res.status(400).json({ error })
        }
        //console.log("funcionou")
        return res.status(200).json(result.rows)
      })
      //impede de continuar
      break
    case 'POST':
      const body = JSON.stringify(req.body)
      console.log(`${typeof(body)} e ${body}`)
      if (typeof(body)=="string"){
       
      }
      pool.query(`SELECT * FROM USERS WHERE id =1 `, (error: any, result: any) => {
        //retorna objeto com resultado da query
        if (typeof error != 'undefined') {
          //console.log("erro")
          return res.status(400).json({ error })
        }
        //console.log("funcionou")
        return res.status(200).json(req)
      })
      break
  }
}


export default handler;
