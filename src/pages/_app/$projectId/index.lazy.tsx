import { Skeleton } from '@/components/ui/skeleton';
import { Project, ProjectTask } from '@/gql/graphql';
import { gqlRequest } from '@/lib/api-client';
import { useQuery } from '@tanstack/react-query';
import { createLazyFileRoute } from '@tanstack/react-router';
import {
	Project_Details_Query,
	Task_Project_Query,
} from '../~module/query/query.gql';
import TaskCard from './~module/components/TaskCard';
import TaskForm from './~module/components/TaskForm';

export const Route = createLazyFileRoute('/_app/$projectId/')({
	component: RouteComponent,
});

function RouteComponent() {
	const { projectId } = Route.useParams();

	const { data, isLoading, refetch } = useQuery({
		queryKey: [`task-by-project-${projectId}`],
		queryFn: () =>
			gqlRequest<{
				tasksByProjects: ProjectTask[];
			}>({
				query: Task_Project_Query,
				variables: {
					projectId,
				},
			}),
	});

	const { data: project } = useQuery({
		queryKey: [`project-details`],
		queryFn: () =>
			gqlRequest<{
				project: Project;
			}>({
				query: Project_Details_Query,
				variables: {
					projectId,
				},
			}),
	});

	return (
		<div>
			<div className='flex justify-between items-center'>
				<h1 className='text-3xl font-medium'>
					Task of{' '}
					<span className='text-teal-500'>{project?.project?.title}</span>
				</h1>

				<TaskForm onRefetch={refetch} projectId={project?.project?._id!} />
			</div>
			<br />
			<div className='grid grid-cols-5 gap-5'>
				{isLoading ? (
					<>
						{new Array(15).fill(15).map((_, idx) => (
							<Skeleton key={idx} className='h-[100px] rounded-md' />
						))}
					</>
				) : (
					<>
						{data?.tasksByProjects?.map((task, idx) => (
							<TaskCard key={idx} onRefetch={refetch} task={task} />
						))}
					</>
				)}
			</div>
		</div>
	);
}
