// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {createClient} from '@supabase/supabase-js'

const SUPABASE_URL = "https://tmdchumipyjkmoihteyt.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtZGNodW1pcHlqa21vaWh0ZXl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA3MTU5NDcsImV4cCI6MTk2NjI5MTk0N30.iUhzFMOtp9NZW5MoXWZjvWabMn8E6Q336U6DXXsEnt0"

const supabase = createClient(process.env.SUPABASE_URL,process.env.SUPABASE_KEY)



export async function handler (req, res) {

  const { data, error } = await supabase
  .from('users')
  .select()
  try{
    console.log(data)
    res.status(200).json({ data })

  }catch (erro){
    res.status(200).json({ error })
  }
  
}


export default handler;
