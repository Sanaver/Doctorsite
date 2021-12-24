import * as Yup from 'yup';

const getDoczoAppSchema = Yup.object().shape({
  phone: Yup.string()
    .length(10)
    .matches(/^[0-9]+$/, 'Must be only digits')
    .required('Your number is required'),
});

export { getDoczoAppSchema };
