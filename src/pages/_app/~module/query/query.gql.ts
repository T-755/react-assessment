import { gql } from '@/lib/api-client';

export const Projects_Query = gql`
	query Projects {
		projects {
			_id
			title
			description
			avatar
			createdAt
			updatedAt
		}
	}
`;

export const Project_Details_Query = gql`
	query Project($projectId: String!) {
		project(id: $projectId) {
			_id
			title
			description
			avatar
			createdAt
			updatedAt
		}
	}
`;

export const Task_Project_Query = gql`
	query TasksByProjects($projectId: String!) {
		tasksByProjects(projectId: $projectId) {
			_id
			title
			description
			status
			project {
				_id
				title
				description
				avatar
				createdAt
				updatedAt
			}
			createdAt
			updatedAt
		}
	}
`;

export const Create_Task_Mutation = gql`
	mutation AddTask($payload: CreateProjectTaskInput!) {
		addTask(payload: $payload) {
			_id
		}
	}
`;
export const Create_Project_Mutation = gql`
	mutation CreateProject($payload: CreateProjectInput!) {
		createProject(payload: $payload) {
			_id
		}
	}
`;
export const Update_Task_Mutation = gql`
	mutation UpdateProjectTask($payload: UpdateProjectTaskInput!) {
		updateProjectTask(payload: $payload) {
			_id
		}
	}
`;
export const Remove_Task_Mutation = gql`
	mutation RemoveProject($removeProjectId: String!) {
		removeProject(id: $removeProjectId) {
			_id
		}
	}
`;
