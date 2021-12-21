import * as yup from 'yup';

const classSchema = yup.object().shape({
    className: yup.string().required('Enter Name for Class'),
    classType: yup.string().required('Select Type of Class').oneOf(['Zumba','Pilates','CrossFit','Boxing']),
    classDate: yup.string().required('Enter Day'), 
    classTime: yup.string().required('Enter Time'),
    classDuration: yup.string().required('Duration of Class'), 
    classIntensity: yup.string().required().oneOf(['Beginner','Average','Extreme','Professional']), 
    classLocation: yup.string(), 
    classAttendee: yup.string().required('Max class size'),
})

export default classSchema;