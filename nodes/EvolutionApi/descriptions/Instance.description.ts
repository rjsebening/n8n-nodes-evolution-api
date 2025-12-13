import { INodeProperties } from 'n8n-workflow';

export const instanceOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['instance'],
			},
		},
		options: [
			{
				name: 'Connect',
				value: 'connect',
				description: 'Connect to an instance (Get QR Code)',
				action: 'Connect to an instance',
			},
			{
				name: 'Connection State',
				value: 'connectionState',
				description: 'Get connection status of an instance',
				action: 'Get connection state',
			},
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new instance',
				action: 'Create an instance',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an instance',
				action: 'Delete an instance',
			},
			{
				name: 'Fetch All',
				value: 'fetchInstances',
				description: 'Fetch all instances',
				action: 'Fetch all instances',
			},
			{
				name: 'Logout',
				value: 'logout',
				description: 'Logout from an instance',
				action: 'Logout from an instance',
			},
			{
				name: 'Restart',
				value: 'restart',
				description: 'Restart an instance',
				action: 'Restart an instance',
			},
			{
				name: 'Set Presence',
				value: 'setPresence',
				description: 'Set presence for an instance',
				action: 'Set presence',
			},
		],
		default: 'fetchInstances',
	},
];

export const instanceFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                 Common Fields                              */
	/* -------------------------------------------------------------------------- */
	// For Create (New Instance)
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['instance'],
				operation: ['create'],
			},
		},
		description: 'Name of the instance',
	},
	// For Operations on Existing Instances
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
				resource: ['instance'],
				operation: ['connect', 'restart', 'setPresence', 'connectionState', 'logout', 'delete'],
			},
		},
		description:
			'Name of the instance. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},

	/* -------------------------------------------------------------------------- */
	/*                                instance:create                             */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Token',
		name: 'token',
		type: 'string',
		typeOptions: {
			password: true,
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['instance'],
				operation: ['create'],
			},
		},
		description: 'Authentication token for the instance',
	},
	{
		displayName: 'Integration',
		name: 'integration',
		type: 'options',
		options: [
			{ name: 'WhatsApp Baileys', value: 'WHATSAPP-BAILEYS' },
			{ name: 'WhatsApp Business', value: 'WHATSAPP-BUSINESS' },
			{ name: 'Evolution', value: 'EVOLUTION' },
		],
		default: 'WHATSAPP-BAILEYS',
		displayOptions: {
			show: {
				resource: ['instance'],
				operation: ['create'],
			},
		},
		description: 'Select the integration type for this instance',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['instance'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Always Online',
				name: 'alwaysOnline',
				type: 'boolean',
				default: false,
				description: 'Whether to keep the instance always online',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Description of the instance for identification purposes',
			},
			{
				displayName: 'Read Messages',
				name: 'readMessages',
				type: 'boolean',
				default: false,
				description: 'Whether to automatically mark incoming messages as read',
			},
			{
				displayName: 'Read Status',
				name: 'readStatus',
				type: 'boolean',
				default: false,
				description: 'Whether to automatically view statuses',
			},
			{
				displayName: 'Reject Call',
				name: 'rejectCall',
				type: 'boolean',
				default: false,
				description: 'Whether to automatically reject incoming calls',
			},
		],
	},

	/* -------------------------------------------------------------------------- */
	/*                                instance:fetchInstances                     */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Filter Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['instance'],
				operation: ['fetchInstances'],
			},
		},
		description: 'Filter the list by instance name',
	},
	{
		displayName: 'Filter Instance ID',
		name: 'instanceId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['instance'],
				operation: ['fetchInstances'],
			},
		},
		description: 'Filter the list by instance ID',
	},

	/* -------------------------------------------------------------------------- */
	/*                                instance:connect                            */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Number',
		name: 'number',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['instance'],
				operation: ['connect'],
			},
		},
		description: 'Phone number associated with the instance',
	},

	/* -------------------------------------------------------------------------- */
	/*                                instance:setPresence                        */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Presence',
		name: 'presence',
		type: 'options',
		options: [
			{ name: 'Available', value: 'available' },
			{ name: 'Composing', value: 'composing' },
			{ name: 'Paused', value: 'paused' },
			{ name: 'Recording', value: 'recording' },
			{ name: 'Unavailable', value: 'unavailable' },
		],
		required: true,
		default: 'available',
		displayOptions: {
			show: {
				resource: ['instance'],
				operation: ['setPresence'],
			},
		},
		description: 'Status presence to set for the instance',
	},
	{
		displayName: 'Delay',
		name: 'delay',
		type: 'number',
		default: 1200,
		displayOptions: {
			show: {
				resource: ['instance'],
				operation: ['setPresence'],
			},
		},
		description: 'Time in milliseconds to wait before setting the presence',
	},
	{
		displayName: 'Number',
		name: 'number',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['instance'],
				operation: ['setPresence'],
			},
		},
		description: 'Specific phone number to target the presence update',
	},
];
