import { INodeProperties } from 'n8n-workflow';

export const metricsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['metrics'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'getMetrics',
				description: 'Get metrics data',
				action: 'Get metrics',
			},
		],
		default: 'getMetrics',
	},
];

export const metricsFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                 Common Fields                              */
	/* -------------------------------------------------------------------------- */
	// No fields required for this endpoint
];
