import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  status: yup.string().required(),
  ritual_id: yup.string().nullable().required(),
  purohit_id: yup.string().nullable().required(),
  customer_id: yup.string().nullable().required(),
});
