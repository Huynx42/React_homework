import {Formik, Form, Field} from "formik";
import * as Yup from 'yup';

const YupValidationForm = () => {
    const formSchema = Yup.object().shape({
        username : Yup.string().min(2, "Too short").max(10, "Too long").required("Please enter username"),
        email : Yup.string().email("Invalid email").required("Please enter username"),
    })
    return (
        <Formik
            initiaValues={
                {username:"",email:""}
            }
            onSubmit={values => {console.log(values)}}
            validationSchema={formSchema}    
        >
            {(errors, touched) => (
                <Form>
                    <Field name='username'></Field>
                    {errors.username && touched.username ? <div>{errors.username}</div> : null}
                    <Field type='email' name='email'></Field>
                    
                    <button type='submit'>Submit</button>
                </Form>
            )}
        </Formik>
    )
}
export default YupValidationForm;