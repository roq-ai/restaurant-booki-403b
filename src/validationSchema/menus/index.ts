import * as yup from 'yup';

export const menuValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  price: yup.number().integer().required(),
  status: yup.string().required(),
  restaurant_id: yup.string().nullable().required(),
});
