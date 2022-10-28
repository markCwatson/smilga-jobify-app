const errorHandler = (err, req, res, next) => {
    let error = { ...err }
    error.message = err.message

    res.status(error.status || 500).json({
        success: false,
        message: error.message || 'Server Error'
      })
}

export default errorHandler