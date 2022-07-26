// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { Todo } from '../../../server/models/todoModel'
import mongoConnect from '../../../server/utils/mongoConnect'

mongoConnect()

export default async function todosHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const todos = await Todo.find()
        return res.status(200).json(todos)
      } catch (err: any) {
        console.error(err)
        res.status(400).json({ error: err.message })
      }
      break

    case 'POST':
      try {
        const todo = await Todo.create(req.body)
        return res.status(201).json(todo)
      } catch (err: any) {
        console.error(err)
        res.status(400).json({ error: err.message })
      }
      break

    default:
      res.status(404).json({ error: 'Not found' })
  }
}
