import * as yup from 'yup';

export const accountSchema = yup.object().shape({
  name: yup.string().min(3).required(),
  phone: yup.string().required(),
  city: yup.string().required(),
  address: yup.string().required(),
});
