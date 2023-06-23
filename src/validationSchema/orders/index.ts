import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  status: yup.string().required(),
  delivery_person_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
