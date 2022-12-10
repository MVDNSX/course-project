import './style.scss'
import {Formik} from 'formik'
import { Link } from 'react-router-dom'

const Login = () => {
	return (
		<div className="registerContainer">
			<div className="registerWallpapper">
				<span className='registerChatName'>MVDNXS Chat</span>
				<span>Register</span>
				<Formik
					initialValues={{
						email: '',
						password: '',
					}}
						validate={values => {
							const errors = {};
							if(!values.email){
								errors.email = 'Required';
							}else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
								errors.email = 'Invalid email address';
							}
							if(!values.password){
								errors.password = 'Required';
							}
							return errors
						}}
						onSubmit={(values, {setSubmitting}) => {
							setTimeout(() => {
								alert(JSON.stringify(values, null, 2));
								setSubmitting(false);
							}, 400);
						}}>
							{({
								values,
								errors,
								touched,
								handleChange,
								handleBlur,
								handleSubmit,
								isSubmitting}) => (
									<form onSubmit={handleSubmit} className='registerForm'>
										<input name='email' type="email" placeholder='Email' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
										{errors.email && touched.email && errors.email}
										<input name='password' type="password" placeholder='Password' value={values.password} onChange={handleChange} onBlur={handleBlur}/>
										{errors.password && touched.password && errors.password}
										<button type="submit" disabled={isSubmitting}>Sign in</button>
									</form>)
							}
				</Formik>
				<span>You do have account? <Link className='link' to='/register'>Register</Link></span>
			</div>
		</div>
	)
}

export default Login