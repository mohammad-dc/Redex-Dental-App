import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  phone: yup.string().required(),
  password: yup.string().min(5).required(),
});

export const registerSchema = yup.object().shape({
  name: yup.string().min(3).required(),
  phone: yup.string().required(),
  password: yup.string().min(5).required(),
  city: yup.string().required(),
  address: yup.string().required(),
});

export const verificationCodeSchema = yup.object().shape({
  box1: yup.string().min(1).max(1).required(),
  box2: yup.string().min(1).max(1).required(),
  box3: yup.string().min(1).max(1).required(),
  box4: yup.string().min(1).max(1).required(),
  box5: yup.string().min(1).max(1).required(),
  box6: yup.string().min(1).max(1).required(),
});

export const newPasswordSchema = yup.object().shape({
  new_password: yup.string().min(5).required(),
  confirm_password: yup.string().oneOf([yup.ref('new_password')]),
});
