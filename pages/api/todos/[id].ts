import { NextApiRequest, NextApiResponse } from 'next'
import { Todo } from '../../../server/models/todoModel'
import mongoConnect from '../../../server/utils/mongoConnect'

mongoConnect()

export default async function todoHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req

  switch (method) {
    case 'GET':
      try {
        const todo = await Todo.findById(id)

        if (!todo) {
          return res.status(404).json({ error: 'Todo not found' })
        }

        res.status(200).json(todo)
      } catch (err: any) {
        console.error(err)
        res.status(400).json({ error: err.message })
      }
      break

    case 'PUT':
      try {
        const todo = await Todo.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })

        if (!todo) {
          return res.status(404).json({ error: 'Todo not found' })
        }

        return res.status(200).json(todo)
      } catch (err: any) {
        console.error(err)
        res.status(400).json({ error: err.message })
      }
      break

    case 'DELETE':
      try {
        const todo = await Todo.deleteOne({ _id: id })

        if (!todo) {
          return res.status(404).json({ error: 'Todo not found' })
        }

        return res.status(200).json(todo)
      } catch (err: any) {
        console.error(err)
        res.status(400).json({ error: err.message })
      }
      break
  }
}
