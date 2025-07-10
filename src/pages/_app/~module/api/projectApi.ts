import { gqlRequest } from '@/lib/api-client';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { CreateProjectInput, Project_Status } from '@/gql/graphql';
import { TaskFormStateType } from '../../$projectId/~module/components/TaskForm';
import {
	Create_Project_Mutation,
	Create_Task_Mutation,
	Remove_Task_Mutation,
	Update_Task_Mutation,
} from '../query/query.gql';

export const projectApi = (onRedirect?: CallableFunction) => {
	const createProjectMutation = useMutation({
		mutationFn: (payload: CreateProjectInput) =>
			gqlRequest({
				query: Create_Project_Mutation,
				variables: {
					payload,
				},
			}),
		onSuccess: () => {
			onRedirect?.();
			toast.success('Project created');
		},
		onError: () => toast.error('Failed to create project'),
	});
	const createTaskMutation = useMutation({
		mutationFn: (payload: CreateTaskType) =>
			gqlRequest({
				query: Create_Task_Mutation,
				variables: {
					payload,
				},
			}),
		onSuccess: () => {
			onRedirect?.();
			toast.success('Task created');
		},
		onError: () => toast.error('Failed to create task'),
	});
	const updateTaskMutation = useMutation({
		mutationFn: (payload: ProjectUpdateType) =>
			gqlRequest({
				query: Update_Task_Mutation,
				variables: {
					payload,
				},
			}),
		onSuccess: () => {
			onRedirect?.();
			toast.success('Task completed');
		},
		onError: () => toast.error('Failed to complete task'),
	});

	const removeTaskMutation = useMutation({
		mutationFn: (payload: string) =>
			gqlRequest({
				query: Remove_Task_Mutation,
				variables: {
					removeProjectTaskId: payload,
				},
			}),
		onSuccess: () => {
			onRedirect?.();
			toast.success('Task removed');
		},
		onError: () => toast.error('Failed to remove task'),
	});
	const removeProjectMutation = useMutation({
		mutationFn: (payload: string) =>
			gqlRequest({
				query: Remove_Task_Mutation,
				variables: {
					removeProjectId: payload,
				},
			}),
		onSuccess: () => {
			onRedirect?.();
			toast.success('Project removed');
		},
		onError: () => toast.error('Failed to remove project'),
	});

	return {
		createTaskMutation,
		updateTaskMutation,
		removeTaskMutation,
		removeProjectMutation,
		createProjectMutation,
	};
};

interface ProjectUpdateType {
	_id: string;
	status: Project_Status;
}
interface CreateTaskType extends TaskFormStateType {
	project: string;
}
