import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const getStatusMap = (status?: string | undefined | null) => {
	switch (status) {
		case 'Pending':
			return { theme: 'blue', label: 'Pending' };

		case 'Inprogress':
			return { theme: 'yellow', label: 'Inprogress' };

		case 'Completed':
			return { theme: 'success', label: 'Completed' };

		default:
			return { theme: 'default', label: 'Unknown' };
	}
};
