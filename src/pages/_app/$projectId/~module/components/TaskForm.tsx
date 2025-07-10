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

const TaskForm: FC<{ onRefetch: CallableFunction; projectId: string }> = ({
	projectId,
	onRefetch,
}) => {
	const [isOpen, setOpen] = useState(false);

	// Define your form.
	const form = useForm<TaskFormStateType>({
		resolver: yupResolver(Task_Form_Schema),
	});

	const { createTaskMutation } = projectApi(() => {
		onRefetch();
		setOpen(false);
		form.reset({});
	});

	// Define a submit handler.
	function onSubmit(values: TaskFormStateType) {
		createTaskMutation.mutate({ ...values, project: projectId });
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
										<Input placeholder='Enter task title' {...field} />
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
										<Input placeholder='Enter task description' {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type='submit' variant={'default'}>
							{createTaskMutation?.isPending && (
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

export default TaskForm;

const Task_Form_Schema = Yup.object({
	title: Yup.string().required().label('Title'),
	description: Yup.string().required().label('Description'),
});

export type TaskFormStateType = Yup.InferType<typeof Task_Form_Schema>;
