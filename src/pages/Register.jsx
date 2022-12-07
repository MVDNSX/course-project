import './style.scss'
import {AiFillFileImage} from 'react-icons/ai'
import {Formik} from 'formik'
import { Link } from 'react-router-dom'

const Register = () => {
	return (
		<div className="registerContainer">
			<div className="registerWallpapper">
				<span className='registerChatName'>MVDNXS Chat</span>
				<span>Register</span>
				<Formik
					initialValues={{
						name: '',
						email: '',
						password: '',
						avatar: '',
					}}
						validate={values => {
							const errors = {};
							if(!values.name){
								errors.name = 'Required';
							};
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
										<input name='name' type="text" placeholder='Name' value={values.name} onChange={handleChange} onBlur={handleBlur}/>
										<input name='email' type="email" placeholder='Email' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
										{errors.email && touched.email && errors.email}
										<input name='password' type="password" placeholder='Password' value={values.password} onChange={handleChange} onBlur={handleBlur}/>
										<label className='avatarLabel' htmlFor="avatar" onChange={handleChange} onBlur={handleBlur}>
											<AiFillFileImage size='20px' color='#664de5'/>
											<span>{values.avatar ? values.avatar: 'Load file'}</span>
											<input name='avatar' value={values.avatar} onChange={handleChange} onBlur={handleBlur} className='avatar' type="file" id="avatar"/>
										</label>
										<button type="submit" disabled={isSubmitting}>Sign up</button>
									</form>)
							}
				</Formik>
				<span>You do have account? <Link className='link' to='/login'>Login</Link></span>
			</div>
		</div>
	)
}

export default Register