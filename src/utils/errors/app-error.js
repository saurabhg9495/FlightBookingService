class AppError extends Error{
    contructor(
        name,
        message,
        statusCode,
        explanation
    ){
        super();
        this.name=name;
        this.message=message;
        this.explanation=explanation;
        this.statusCode=statusCode;
    }
}

module.exports=AppError;