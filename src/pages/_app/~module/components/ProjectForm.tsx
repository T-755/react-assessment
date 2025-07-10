import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { projectApi } from '@/pages/_app/~module/api/projectApi';
import { yupResolver } from '@hookform/resolvers/yup';
import { Loader2, Plus } from 'lucide-react';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const ProjectForm: FC<{ onRefetch: CallableFunction }> = ({ onRefetch }) => {
	const [isOpen, setOpen] = useState(false);

	// Define your form.
	const form = useForm<ProjectFormStateType>({
		resolver: yupResolver(Project_Form_Schema),
	});

	const { createProjectMutation } = projectApi(() => {
		onRefetch();
		setOpen(false);
		form.reset({});
	});

	// Define a submit handler.
	function onSubmit(values: ProjectFormStateType) {
		createProjectMutation.mutate({ ...values });
	}

	return (
		<Dialog open={isOpen} onOpenChange={setOpen}>
			<Button variant={'outline'} onClick={() => setOpen(true)}>
				<Plus /> Add new
			</Button>
			<DialogContent className='sm:max-w-[700px]'>
				<DialogHeader>
					<DialogTitle>Add Task</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
						<FormField
							control={form.control}
							name='title'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Title</FormLabel>
									<FormControl>
										<Input placeholder='Enter title' {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>{' '}
						<FormField
							control={form.control}
							name='avatar'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Avatar</FormLabel>
									<FormControl>
										<Input placeholder='Enter avatar url' {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>{' '}
						<FormField
							control={form.control}
							name='description'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Description</FormLabel>
									<FormControl>
										<Input placeholder='Enter description' {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type='submit' variant={'default'}>
							{createProjectMutation?.isPending && (
								<Loader2 className='animate-spin' />
							)}
							Save
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};

export default ProjectForm;

const Project_Form_Schema = Yup.object({
	title: Yup.string().required().label('Title'),
	avatar: Yup.string().url().required().label('Avatar'),
	description: Yup.string().required().label('Description'),
});

export type ProjectFormStateType = Yup.InferType<typeof Project_Form_Schema>;
