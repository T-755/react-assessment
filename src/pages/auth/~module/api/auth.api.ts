import { gqlRequest } from '@/lib/api-client';
import { User } from '@/types/userType';
import { useMutation, useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { LoginFormStateType } from '../../login';
import { RegistrationFormStateType } from '../../registration';

import { User_Role } from '@/gql/graphql';
import {
	Login_User_Details_Query,
	Magic_Login_User_Mutation,
	Registration_User_Mutation,
} from '../gql-query/query.gql';

export const authApi = (onRedirect?: CallableFunction) => {
	const registrationMutation = useMutation({
		mutationFn: (payload: RegistrationFormStateType) =>
			gqlRequest({
				query: Registration_User_Mutation,
				variables: {
					input: {
						name: payload?.name,
						email: payload?.email,
						password: payload?.password,
						role: User_Role.Admin,
					},
				},
			}),
		onSuccess: (res: any) => {
			localStorage.setItem('token', res?.signUp?.accessToken);
			onRedirect?.();
			toast.success('Registration success. Please login');
		},
		onError: () => toast.error('Failed to register account'),
	});

	const loginMutation = useMutation({
		mutationFn: (payload: LoginFormStateType) =>
			gqlRequest({
				query: Magic_Login_User_Mutation,
				variables: { input: payload },
			}),
		onSuccess: (res: any) => {
			localStorage.setItem('token', res?.signIn?.accessToken);
			onRedirect?.();
			toast.success('Login link has been sent to your mail.');
		},
		onError: () => toast.error('Failed to login'),
	});

	const triggerLogout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('orgUID');
	};

	const loggedInUserDetails = useQuery({
		queryKey: ['logged-in-user'],
		queryFn: async () => {
			const res = await gqlRequest<{
				user: User | null;
			}>({
				query: Login_User_Details_Query,
			});
			return res?.user;
		},
	});
	return {
		registrationMutation,
		loginMutation,
		loggedInUserDetails,
		triggerLogout,
	};
};
