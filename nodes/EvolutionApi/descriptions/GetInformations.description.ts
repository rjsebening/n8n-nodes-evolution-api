import { INodeProperties } from 'n8n-workflow';

export const getInformationsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['getInformation'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'getInformation',
				description: 'Get API information',
				action: 'Get information',
			},
		],
		default: 'getInformation',
	},
];

export const getInformationsFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                 Common Fields                              */
	/* -------------------------------------------------------------------------- */
	// No fields required for this endpoint
];
