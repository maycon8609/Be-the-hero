const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  createOng: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(11),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
    })
  }),

  listIncidents: celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    })
  }),

  createIncidentBody: celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      value: Joi.number().required(),
    })
  }),

  createIncidentAuth: celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),

  deleteIncidentParams: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    })
  }),

  deleteIncidentHeaders: celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),

  listProfile: celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),

  createSession: celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required(),
    })
  }),
};
