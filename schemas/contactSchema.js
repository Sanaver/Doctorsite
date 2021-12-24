import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  name: Yup.string().required('Your name is required'),
  phone: Yup.string()
    .length(10)
    .matches(/^[0-9]+$/, 'Must be only digits')
    .required('Your number is required'),
  message: Yup.string(),
});

export { contactSchema };
