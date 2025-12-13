import { INodeProperties } from 'n8n-workflow';

export const storageOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['storage'],
			},
		},
		options: [
			{
				name: 'Get Media',
				value: 'getMedia',
				description: 'Retrieve media from storage',
				action: 'Get media',
			},
			{
				name: 'Get Media URL',
				value: 'getMediaUrl',
				description: 'Retrieve media URL from storage',
				action: 'Get media url',
			},
		],
		default: 'getMedia',
	},
];

export const storageFields: INodeProperties[] = [
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
				resource: ['storage'],
			},
		},
		description:
			'Name of the instance. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},

	/* -------------------------------------------------------------------------- */
	/*                                storage:getMedia                            */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['storage'],
				operation: ['getMedia'],
			},
		},
		description: 'ID of the message containing the media',
	},
	{
		displayName: 'Media ID',
		name: 'id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['storage'],
				operation: ['getMedia', 'getMediaUrl'],
			},
		},
		description: 'ID of the media file',
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['storage'],
				operation: ['getMedia'],
			},
		},
		description: 'MIME type or category of the media',
	},
];
