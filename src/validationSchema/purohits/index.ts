import * as yup from 'yup';

export const purohitValidationSchema = yup.object().shape({
  availability: yup.boolean().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
