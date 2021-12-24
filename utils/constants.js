// TODO: Move this to env variable
export const API_HOSTNAME = `http://95.217.130.140:2900/v1.1`;

const apiPaths = {
  locations: 'locations',
  specialities: 'specialities',
  doctors: 'doctors',
  search: 'search',
  contact: 'contact',
  hospitals: 'hospitals',
  hospital: 'hospital',
};

const LocationConstants = [
  {
    label: 'Thiruvananthapuram',
    subLabel: 'Kerala',
    slug: 'thiruvananthapuram',
  },
  {
    label: 'Ernakulam',
    subLabel: 'Kerala',
    slug: 'ernakulam',
  },
  {
    label: 'Kozhikode',
    subLabel: 'Kerala',
    slug: 'kozhikode',
  },
  {
    label: 'Chennai',
    subLabel: 'Tamil Nadu',
    slug: 'chennai',
  },
];

const Specifications = [
  {
    label: 'Dentist',
    subLabel: 'Speciality',
    slug: 'dentist',
  },
  {
    label: 'Dermatologist',
    subLabel: 'Speciality',
    slug: 'dermatologist',
  },
  {
    label: 'Pediatrician',
    subLabel: 'Speciality',
    slug: 'pediatrician',
  },
  {
    label: 'Gynaecologist',
    subLabel: 'Speciality',
    slug: 'gynaecologist',
  },
  {
    label: 'General Physician',
    subLabel: 'Speciality',
    slug: 'general-physician',
  },
  {
    label: 'Ent',
    subLabel: 'Speciality',
    slug: 'ent-specialist',
  },
  {
    label: 'Psychiatrist',
    subLabel: 'Speciality',
    slug: 'psychiatrist',
  },
  {
    label: 'Neurologist',
    subLabel: 'Speciality',
    slug: 'neurologist',
  },
  {
    label: 'Gastroenterologist',
    subLabel: 'Speciality',
    slug: 'gastroenterologist',
  },
  {
    label: 'Orthopedic',
    subLabel: 'Speciality',
    slug: 'orthopedic',
  },
  {
    label: 'Urologist',
    subLabel: 'Speciality',
    slug: 'urologist',
  },
  {
    label: 'Sexologist',
    subLabel: 'Speciality',
    slug: 'sexologist',
  },
  {
    label: 'Ophthalmologist',
    subLabel: 'Speciality',
    slug: 'ophthalmologist',
  },
  {
    label: 'Pulmonologist',
    subLabel: 'Speciality',
    slug: 'pulmonologist',
  },
  {
    label: 'Cardiologist',
    subLabel: 'Speciality',
    slug: 'cardiologist',
  },
  {
    label: 'Chiropractor',
    subLabel: 'Speciality',
    slug: 'chiropractor',
  },
  {
    label: 'Endocrinologist',
    subLabel: 'Speciality',
    slug: 'endocrinologist',
  },
  {
    label: 'Dietician',
    subLabel: 'Speciality',
    slug: 'dietician',
  },
  {
    label: 'Rheumatologist',
    subLabel: 'Speciality',
    slug: 'rheumatologist',
  },
  {
    label: 'Nephrologist',
    subLabel: 'Speciality',
    slug: 'nephrologist',
  },
];

const TopSpecialities = {
  default: [
    {
      imageSrc: 'primaryCare',
      title: 'General Physician',
      route: 'general-physician',
    },
    {
      imageSrc: 'gynecologist',
      title: 'Gynaecologist',
      route: 'gynaecologist',
    },
    {
      imageSrc: 'dentist',
      title: 'Dentist',
      route: 'dentist',
    },
    {
      imageSrc: 'dermatologist',
      title: 'Dermatologist',
      route: 'dermatologist',
    },
    {
      imageSrc: 'psychiatrist',
      title: 'Psychiatrist',
      route: 'psychiatrist',
    },
    {
      imageSrc: 'eyeDoctor',
      title: 'Eye Doctor',
      route: 'ophthalmologist',
    },
    {
      imageSrc: 'ent',
      title: 'ENT',
      route: 'ent-specialist',
    },
    {
      imageSrc: 'gastroenterologist',
      title: 'Gastroenterologist',
      route: 'gastroenterologist',
    },
    {
      imageSrc: 'pediatrician',
      title: 'Pediatrician',
      route: 'pediatrician',
    },
    {
      imageSrc: 'neurologist',
      title: 'Neurologist',
      route: 'neurologist',
    },
  ],
  showMore: [
    {
      imageSrc: 'fracture',
      title: 'Orthopedic',
      route: 'orthopedic',
    },
    {
      imageSrc: 'urologist',
      title: 'Urologist',
      route: 'urologist',
    },
    {
      imageSrc: 'sexologist',
      title: 'Sexologist',
      route: 'sexologist',
    },
    {
      imageSrc: 'pulmonologist',
      title: 'Pulmonologist',
      route: 'pulmonologist',
    },
    {
      imageSrc: 'cardiologist',
      title: 'Cardiologist',
      route: 'cardiologist',
    },
    {
      imageSrc: 'chiropractor',
      title: 'Chiropractor',
      route: 'chiropractor',
    },
    {
      imageSrc: 'endocrinologist',
      title: 'Endocrinologist',
      route: 'endocrinologist',
    },
    {
      imageSrc: 'dietrician',
      title: 'Dietician',
      route: 'dietician',
    },
    {
      imageSrc: 'rheumatologist',
      title: 'Rheumatologist',
      route: 'rheumatologist',
    },
    {
      imageSrc: 'nephrologist',
      title: 'Nephrologist',
      route: 'nephrologist',
    },
  ],
};

const FindDoctorByCity = [
  {
    label: 'Thiruvananthapuram',
    subLabel: 'Kerala',
    slug: 'thiruvananthapuram',
  },
  {
    label: 'Ernakulam',
    subLabel: 'Kerala',
    slug: 'ernakulam',
  },
  {
    label: 'Kozhikode',
    subLabel: 'Kerala',
    slug: 'kozhikode',
  },
  {
    label: 'Chennai',
    subLabel: 'Tamil Nadu',
    slug: 'chennai',
  },
];

export default {
  LocationConstants,
  Specifications,
  apiPaths,
  TopSpecialities,
  FindDoctorByCity,
};
