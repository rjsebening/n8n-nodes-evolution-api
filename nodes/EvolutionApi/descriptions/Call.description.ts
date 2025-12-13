import { INodeProperties } from 'n8n-workflow';

export const callOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['call'],
			},
		},
		options: [
			{
				name: 'Offer Call',
				value: 'offerCall',
				description: 'Offer a fake call',
				action: 'Offer a call',
			},
		],
		default: 'offerCall',
	},
];

export const callFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                 Common Fields                              */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Instance Name or ID',
		name: 'instanceName',
		type: 'options',
		required: true,
		default: '',
		typeOptions: {
			loadOptionsMethod: 'getInstances',
		},
		displayOptions: {
			show: {
				resource: ['call'],
			},
		},
		description:
			'Name of the instance. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},

	/* -------------------------------------------------------------------------- */
	/*                                call:offer                                  */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Number',
		name: 'number',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['call'],
				operation: ['offerCall'],
			},
		},
		description: 'Phone number to receive the fake call',
	},
	{
		displayName: 'Is Video',
		name: 'isVideo',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['call'],
				operation: ['offerCall'],
			},
		},
		description: 'Whether the fake call should be a video call',
	},
	{
		displayName: 'Call Duration (Ms)',
		name: 'callDuration',
		type: 'number',
		default: 10000,
		displayOptions: {
			show: {
				resource: ['call'],
				operation: ['offerCall'],
			},
		},
		description: 'Duration of the fake call in milliseconds',
	},
];
