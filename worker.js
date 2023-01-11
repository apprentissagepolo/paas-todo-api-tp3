require("dotenv").config()
const Queue = require("bull")
const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(process.env.DATABASE_URL)

const REDIS_URL = process.env.REDIS_URL

let workQueue = new Queue("queueEcheanceTodos", REDIS_URL)

workQueue.process(async (job) => {
  console.log(
    `Exécution du job de mise à jour du statut du ToDo ${job.data.idTodo} qui arrive à écheance le ${job.data.dateEcheance}`
  )
  try {
    // Mise à jour du statut des ToDos reçus dans le JOB
    await sequelize.query(
      `UPDATE todos SET statut = 'eN_RETARD' WHERE id = ?`,
      {
        replacements: [job.data.idTodo]
      }
    )
  } catch (error) {
    console.error(error)
  }
})
