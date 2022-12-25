const {StatusCodes}=require('http-status-codes');

const { ValidationError,AppError } = require('../utils/errors/index');;
const {Booking}=require('../models/index');

class Bookingrepository{
   async create(data){
      try {
        const booking=await Booking.create(data);
        return booking;
      } catch (error) {
        if(error.name  == 'SequelizeValidationerror'){
            throw new ValidationError(error);
        }
        throw new AppError(
            'RepositoryError',
            'Cannot create Booking',
            'THere was some issue creating the booking,please try again later',
            StatusCodes.INTERNAL_SERVER_ERROR
            );
      }
   }  
}

module.exports=Bookingrepository;