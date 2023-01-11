module.exports = {
  log(log) {
    console.log(
      JSON.stringify({
        level: "info",
        message: log
      })
    )
  },
  error(error) {
    console.error(
      JSON.stringify({
        level: "error",
        error,
        message: error.message,
        stack: error.stack
      })
    )
  }
}
