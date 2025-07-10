import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const badgeVariants = cva(
	'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
	{
		variants: {
			variant: {
				default:
					'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
				success:
					'border-transparent bg-green-500/10 text-green-500 hover:bg-secondary/80',
				warning:
					'border-transparent bg-yellow-500/10 text-yellow-500 hover:bg-secondary/80',
				destructive:
					'border-transparent bg-destructive text-white shadow hover:bg-destructive/80',
				blue: 'border-transparent bg-blue-500/20 text-blue-500 shadow',
				outline: 'text-foreground',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	}
);

interface AppBadgeProps extends VariantProps<typeof badgeVariants> {
	label: string;
}

const AppBadge: React.FC<AppBadgeProps> = ({ label, variant }) => {
	return <div className={cn(badgeVariants({ variant }))}>{label}</div>;
};

export default AppBadge;
