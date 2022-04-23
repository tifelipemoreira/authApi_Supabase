// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://tmdchumipyjkmoihteyt.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtZGNodW1pcHlqa21vaWh0ZXl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA3MTU5NDcsImV4cCI6MTk2NjI5MTk0N30.iUhzFMOtp9NZW5MoXWZjvWabMn8E6Q336U6DXXsEnt0"

//const supabase = createClient(process.env.SUPABASE_URL,process.env.SUPABASE_KEY)
import pool from '../../config/dbPostgress'

export async function handler(req, res) {

  try {
    pool.query('SELECT * FROM USERS', (e, result) => {
      
      //retorna objeto com resultado da query
      //result.rows[0]
      console.log(result.rows[0])
    })

    //console.log(res)
    res.status(200).json({ res })

  } catch (e) {
    res.status(400).json({ e })
  }

}


export default handler;
