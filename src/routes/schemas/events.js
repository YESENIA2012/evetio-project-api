const Joi = require("joi");

const eventSchema = Joi.object({
  userId: Joi.number().required().label("User Id"),
  title: Joi.string().required().label("Title"),
  description: Joi.string().required().label("Description"),
  event_date: Joi.string().required().label("Date"),
  event_time: Joi.string().required().label("Time"),
  capacity: Joi.number().required().label("Capacity"),
});

const eventEditSchema = Joi.object({
  userId: Joi.number().required().label("User Id"),
  title: Joi.string().optional().label("Title"),
  description: Joi.string().optional().label("Description"),
  event_date: Joi.string().optional().label("Date"),
  event_time: Joi.string().optional().label("Time"),
  capacity: Joi.number().optional().label("Capacity"),
});

const joinAndLeaveEventSchema = Joi.object({
  userId: Joi.number().required().label("User Id"),
  eventId: Joi.number().required().label("Event Id"),
});

const getAllEventsByUserSchema = Joi.object({
  userId: Joi.number().required().label("User Id"),
  pageNumber: Joi.number().required().label("Page Number"),
  itemsPerPage: Joi.number().required().label("Item Per Page")
})

const getAllEventsSchema = Joi.object({
  pageNumber: Joi.number().required().label("Page Number"),
  itemsPerPage: Joi.number().required().label("Item Per Page")
})

module.exports={
  eventEditSchema,
  eventSchema,
  joinAndLeaveEventSchema,
  getAllEventsByUserSchema,
  getAllEventsSchema
}