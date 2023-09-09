import express from 'express'
const router = express.Router()
const items = [{id: 1, task: "buy groceries"}, {id:2, task: "clean room"}]

// router.get('/', (req, res) => {
//     return res.json(items)
// })

// router.post('/', (req, res) => {
//     items.push(req.body)
//     return res.status(201).json(req.body)
// })

router.get('/:id', (req, res) => {
    return res.send(`You just requested item that should be with id ${req.params.id}`) // we are using the send function here because we are not returning an object but only a string
})

export default router