import AppBadge from '@/components/AppBadge';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Project_Status, ProjectTask } from '@/gql/graphql';
import { getStatusMap } from '@/lib/utils';
import { projectApi } from '@/pages/_app/~module/api/projectApi';
import { CheckCircle2, EllipsisVertical, Trash } from 'lucide-react';
import { FC } from 'react';

interface TaskProps {
	task: ProjectTask;
	onRefetch: CallableFunction;
}
const TaskCard: FC<TaskProps> = ({ task, onRefetch }) => {
	const { updateTaskMutation, removeTaskMutation } = projectApi(() =>
		onRefetch()
	);

	return (
		<div className='relative border px-5 py-3 rounded-md cursor-pointer dark:hover:bg-gray-900 hover:bg-gray-100 hover:duration-300'>
			<div>
				{/* {updateTaskMutation?.isPending || removeTaskMutation?.isPending ? (
					<Loader2 className='animate-spin text-teal-500' size={30} />
				) : ( */}
				<DropdownMenu>
					<DropdownMenuTrigger className='absolute right-1'>
						<Button size={'sm'} variant='ghost'>
							<EllipsisVertical />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem
							disabled={task?.status === Project_Status?.Completed}
							onClick={() =>
								updateTaskMutation.mutate({
									_id: task?._id!,
									status: Project_Status.Completed,
								})
							}
						>
							<CheckCircle2 className='text-teal-500' /> Complete
						</DropdownMenuItem>
						<DropdownMenuItem
							onClick={() => removeTaskMutation.mutate(task?._id!)}
						>
							<Trash color='red' /> Remove
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
				{/* )} */}
				<p className='text-lg font-medium'>{task?.title}</p>
				<p className='text-sm text-gray-500'>
					{task?.description?.slice(0, 40) + '...'}
				</p>
				<AppBadge
					label={getStatusMap(task?.status)?.label}
					variant={getStatusMap(task?.status)?.theme as any}
				/>
			</div>
		</div>
	);
};

export default TaskCard;
