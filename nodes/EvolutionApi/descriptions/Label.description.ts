import { INodeProperties } from 'n8n-workflow';

export const labelOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['label'],
			},
		},
		options: [
			{
				name: 'Find Labels',
				value: 'findLabels',
				description: 'Find all labels',
				action: 'Find labels',
			},
			{
				name: 'Handle Label',
				value: 'handleLabel',
				description: 'Add or remove a label from a chat',
				action: 'Handle label',
			},
		],
		default: 'findLabels',
	},
];

export const labelFields: INodeProperties[] = [
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
				resource: ['label'],
			},
		},
		description:
			'Name of the instance. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},

	/* -------------------------------------------------------------------------- */
	/*                                label:handleLabel                           */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Number',
		name: 'number',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['label'],
				operation: ['handleLabel'],
			},
		},
		description: 'Phone number or Chat ID to apply the label to',
	},
	{
		displayName: 'Label ID',
		name: 'labelId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['label'],
				operation: ['handleLabel'],
			},
		},
		description: 'ID of the label to manage',
	},
	{
		displayName: 'Action',
		name: 'action',
		type: 'options',
		options: [
			{ name: 'Add', value: 'add', action: 'Add a label' },
			{ name: 'Remove', value: 'remove', action: 'Remove a label' },
		],
		required: true,
		default: 'add',
		displayOptions: {
			show: {
				resource: ['label'],
				operation: ['handleLabel'],
			},
		},
		description: 'Whether to add or remove the label',
	},
];
