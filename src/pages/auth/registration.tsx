import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { yupResolver } from '@hookform/resolvers/yup';
import {
	createFileRoute,
	Link,
	redirect,
	useNavigate,
} from '@tanstack/react-router';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { authApi } from './~module/api/auth.api';

export const Route = createFileRoute('/auth/registration')({
	async beforeLoad(ctx) {
		if (ctx.context.auth.isFetched && ctx.context.auth.isAuthenticated) {
			throw redirect({
				to: '/',
			});
		}
		return ctx;
	},
	component: RouteComponent,
});

function RouteComponent() {
	// handle redirect
	const navigate = useNavigate();

	const handleRedirect = () => {
		navigate({ to: '/auth/login' }); // Replace '/settings' with any route path
	};

	const { registrationMutation } = authApi(() => handleRedirect());

	// Define your form.
	const form = useForm<RegistrationFormStateType>({
		resolver: yupResolver(Registration_Form_Schema),
	});

	// Define a submit handler.
	function onSubmit(values: RegistrationFormStateType) {
		registrationMutation.mutate(values);
	}

	return (
		<div className='flex h-screen items-center justify-center bg-white dark:bg-slate-900'>
			<div className='lg:w-5/12 w-full bg-neutral-50 dark:bg-slate-800 px-5 py-6 rounded-sm'>
				<h2 className='text-2xl font-semibold my-5'>Get Started</h2>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
						<FormField
							control={form.control}
							name='name'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input placeholder='Enter your username' {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input placeholder='Enter your email' {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='password'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input type='password' placeholder='********' {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='confirmPassword'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Confirm Password</FormLabel>
									<FormControl>
										<Input type='password' placeholder='********' {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type='submit' variant={'default'}>
							{registrationMutation?.isPending && (
								<Loader2 className='animate-spin' />
							)}{' '}
							Get Started
						</Button>
					</form>{' '}
					<p className='text-red-500 mt-5'>
						Already registered ?
						<Button variant={'link'}>
							<Link to='/auth/login'>Login</Link>
						</Button>
					</p>
				</Form>
			</div>
		</div>
	);
}

const Registration_Form_Schema = Yup.object({
	name: Yup.string().required().label('Username'),
	email: Yup.string().email().required().label('Email'),
	password: Yup.string()
		.required('Password is required')
		.min(8, 'Password must be at least 8 characters'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password')], 'Passwords must match')
		.required('Confirm Password is required'),
});

export type RegistrationFormStateType = Yup.InferType<
	typeof Registration_Form_Schema
>;
