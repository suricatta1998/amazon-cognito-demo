import "./tailwind.css";
import Alpine from "alpinejs";
import { Auth } from "@aws-amplify/auth";
import Amplify from "@aws-amplify/core";

// Amazon Cognito
const USER_POOL_ID = "";
const APP_CLIENT_ID = "";
const IDENTITY_POOL_ID = "";
const REGION = "";

Amplify.configure({
	Auth: {
		userPoolId: USER_POOL_ID,
		userPoolWebClientId: APP_CLIENT_ID,
		identityPoolId: IDENTITY_POOL_ID,
		region: REGION,
	}
})

window.utilities = () => ({
	togglePasswordStatus: (_input) => {
		let { type } = _input;
		_input.type = type === 'password' ? 'text' : 'password';
	},

	login: ({ email, password }) => Auth.signIn(email, password),

	logout: () => Auth.signOut({ global: true }),

	getUserinfo: () => Auth.currentUserInfo(),
	
  register: ({ email, password, nickname }) => {
		return Auth.signUp({
			username: email,
			password,
			attributes: {
				nickname
			}
		})
	},

	confirmRegister: ({ email, code }) => Auth.confirmSignUp(email, code),

	resendCode: (email) => Auth.resendSignUp(email)
});

const EMAIL_RE = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
const PASSWORD_RE = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{8,}/;

window.validates = () => ({
	checkEmail: (_email) => _email === '' || EMAIL_RE.test(_email),
	checkPassword: (_password) => _password === '' || PASSWORD_RE.test(_password),
	checkErrors: (_errors) => {
		let flag = false;
		Object.values(_errors).forEach(item => flag = item !== '')
		return flag;
	}
})

window.Alpine = Alpine;
Alpine.start();
