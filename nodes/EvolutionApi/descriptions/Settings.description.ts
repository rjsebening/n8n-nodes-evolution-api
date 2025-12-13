import { INodeProperties } from 'n8n-workflow';

export const settingsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['settings'],
			},
		},
		options: [
			{
				name: 'Find Settings',
				value: 'findSettings',
				description: 'Find settings for an instance',
				action: 'Find settings',
			},
			{
				name: 'Set Settings',
				value: 'setSettings',
				description: 'Set settings for an instance',
				action: 'Set settings',
			},
		],
		default: 'findSettings',
	},
];

export const settingsFields: INodeProperties[] = [
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
				resource: ['settings'],
			},
		},
		description:
			'Name of the instance. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},

	/* -------------------------------------------------------------------------- */
	/*                                settings:set                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Reject Call',
		name: 'rejectCall',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['settings'],
				operation: ['setSettings'],
			},
		},
		description: 'Whether to automatically reject incoming calls',
	},
	{
		displayName: 'Message Call',
		name: 'msgCall',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['settings'],
				operation: ['setSettings'],
				rejectCall: [true],
			},
		},
		description: 'Text message to send automatically when a call is rejected',
	},
	{
		displayName: 'Groups Ignore',
		name: 'groupsIgnore',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['settings'],
				operation: ['setSettings'],
			},
		},
		description: 'Whether to ignore all messages from groups',
	},
	{
		displayName: 'Always Online',
		name: 'alwaysOnline',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['settings'],
				operation: ['setSettings'],
			},
		},
		description: 'Whether to keep the instance status as always online',
	},
	{
		displayName: 'Read Messages',
		name: 'readMessages',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['settings'],
				operation: ['setSettings'],
			},
		},
		description: 'Whether to automatically mark received messages as read',
	},
	{
		displayName: 'Read Status',
		name: 'readStatus',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['settings'],
				operation: ['setSettings'],
			},
		},
		description: 'Whether to automatically mark status updates as viewed',
	},
	{
		displayName: 'Sync Full History',
		name: 'syncFullHistory',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['settings'],
				operation: ['setSettings'],
			},
		},
		description: 'Whether to synchronize the full message history',
	},
];
