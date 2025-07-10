import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Skeleton } from '@/components/ui/skeleton';
import { Project } from '@/gql/graphql';
import { gqlRequest } from '@/lib/api-client';
import { useQuery } from '@tanstack/react-query';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { EllipsisVertical, Trash } from 'lucide-react';
import { projectApi } from './~module/api/projectApi';
import ProjectForm from './~module/components/ProjectForm';
import { Projects_Query } from './~module/query/query.gql';

export const Route = createFileRoute('/_app/')({
	component: RouteComponent,
});

function RouteComponent() {
	const navigate = useNavigate();

	const { data, isLoading, refetch } = useQuery({
		queryKey: ['all-projects'],
		queryFn: () =>
			gqlRequest<{
				projects: Project[];
			}>({ query: Projects_Query }),
	});

	const { removeProjectMutation } = projectApi(() => refetch());

	return (
		<div>
			<div className='flex justify-between items-center'>
				<h1 className='text-3xl font-medium'>
					<h1 className='text-3xl font-medium'>All Projects</h1>
				</h1>

				<ProjectForm onRefetch={refetch} />
			</div>

			<br />
			<div className='grid grid-cols-3 gap-5'>
				{isLoading ? (
					<>
						{new Array(9).fill(9).map((_, idx) => (
							<Skeleton key={idx} className='h-[100px] rounded-md' />
						))}
					</>
				) : (
					<>
						{data?.projects?.map((project, idx) => (
							<div
								key={idx}
								className='relative border px-5 py-3 rounded-md cursor-pointer dark:hover:bg-gray-900 hover:bg-gray-100 hover:duration-300'
							>
								<DropdownMenu>
									<DropdownMenuTrigger className='absolute right-1'>
										<Button size={'sm'} variant='ghost'>
											<EllipsisVertical />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent>
										<DropdownMenuItem
											onClick={() =>
												removeProjectMutation.mutate(project?._id!)
											}
										>
											<Trash color='red' /> Remove
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
								<div
									className='flex gap-5 items-center'
									onClick={() =>
										navigate({
											to: '/$projectId',
											params: { projectId: project?._id! },
										})
									}
								>
									<img
										src={project?.avatar}
										alt='avatar'
										className='w-[80px] h-[80px] rounded-full'
									/>
									<div>
										<p className='text-xl font-medium'>{project?.title}</p>
										<p className='text-md text-gray-500'>
											{project?.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</>
				)}
			</div>
		</div>
	);
}
