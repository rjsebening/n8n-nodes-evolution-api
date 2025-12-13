import { INodeProperties } from 'n8n-workflow';

export const integrationsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['integrations'],
			},
		},
		options: [
			{
				name: 'Find Nats',
				value: 'findNats',
				description: 'Find NATS configuration',
				action: 'Find nats',
			},
			{
				name: 'Find Pusher',
				value: 'findPusher',
				description: 'Find Pusher configuration',
				action: 'Find pusher',
			},
			{
				name: 'Find RabbitMQ',
				value: 'findRabbitmq',
				description: 'Find RabbitMQ configuration',
				action: 'Find rabbitmq',
			},
			{
				name: 'Find SQS',
				value: 'findSqs',
				description: 'Find SQS configuration',
				action: 'Find sqs',
			},
			{
				name: 'Find Webhook',
				value: 'findWebhook',
				description: 'Find Webhook configuration',
				action: 'Find webhook',
			},
			{
				name: 'Find Websocket',
				value: 'findWebsocket',
				description: 'Find Websocket configuration',
				action: 'Find websocket',
			},
			{
				name: 'Set Nats',
				value: 'setNats',
				description: 'Set NATS configuration',
				action: 'Set nats',
			},
			{
				name: 'Set Pusher',
				value: 'setPusher',
				description: 'Set Pusher configuration',
				action: 'Set pusher',
			},
			{
				name: 'Set RabbitMQ',
				value: 'setRabbitmq',
				description: 'Set RabbitMQ configuration',
				action: 'Set rabbitmq',
			},
			{
				name: 'Set SQS',
				value: 'setSqs',
				description: 'Set SQS configuration',
				action: 'Set sqs',
			},
			{
				name: 'Set Webhook',
				value: 'setWebhook',
				description: 'Set Webhook configuration',
				action: 'Set webhook',
			},
			{
				name: 'Set Websocket',
				value: 'setWebsocket',
				description: 'Set Websocket configuration',
				action: 'Set websocket',
			},
		],
		default: 'findWebhook',
	},
];

const webhookConfigFields: INodeProperties[] = [
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		default: '',
		description: 'Endpoint URL to receive webhook events',
	},
	{
		displayName: 'By Events',
		name: 'byEvents',
		type: 'boolean',
		default: false,
		description: 'Whether to trigger the webhook only for specific events',
	},
	{
		displayName: 'Base64',
		name: 'base64',
		type: 'boolean',
		default: false,
		description: 'Whether to include Base64 encoded media data in the payload',
	},
	{
		displayName: 'Events',
		name: 'events',
		type: 'multiOptions',
		options: [
			{ name: 'Application Startup', value: 'APPLICATION_STARTUP' },

			{ name: 'Call', value: 'CALL' },

			{ name: 'Chats Delete', value: 'CHATS_DELETE' },
			{ name: 'Chats Set', value: 'CHATS_SET' },
			{ name: 'Chats Update', value: 'CHATS_UPDATE' },
			{ name: 'Chats Upsert', value: 'CHATS_UPSERT' },

			{ name: 'Connection Update', value: 'CONNECTION_UPDATE' },

			{ name: 'Contacts Set', value: 'CONTACTS_SET' },
			{ name: 'Contacts Update', value: 'CONTACTS_UPDATE' },
			{ name: 'Contacts Upsert', value: 'CONTACTS_UPSERT' },

			{ name: 'Group Participants Update', value: 'GROUP_PARTICIPANTS_UPDATE' },
			{ name: 'Group Update', value: 'GROUP_UPDATE' },
			{ name: 'Groups Upsert', value: 'GROUPS_UPSERT' },

			{ name: 'Labels Association', value: 'LABELS_ASSOCIATION' },
			{ name: 'Labels Edit', value: 'LABELS_EDIT' },

			{ name: 'Logout Instance', value: 'LOGOUT_INSTANCE' },

			{ name: 'Messages Delete', value: 'MESSAGES_DELETE' },
			{ name: 'Messages Set', value: 'MESSAGES_SET' },
			{ name: 'Messages Update', value: 'MESSAGES_UPDATE' },
			{ name: 'Messages Upsert', value: 'MESSAGES_UPSERT' },

			{ name: 'Presence Update', value: 'PRESENCE_UPDATE' },

			{ name: 'QR Code Updated', value: 'QRCODE_UPDATED' },
			{ name: 'Remove Instance', value: 'REMOVE_INSTANCE' },
			{ name: 'Send Message', value: 'SEND_MESSAGE' },

			{ name: 'Typebot Change Status', value: 'TYPEBOT_CHANGE_STATUS' },
			{ name: 'Typebot Start', value: 'TYPEBOT_START' },
		],
		default: [],
		description: 'Select the events that should trigger this integration',
	},
];

export const integrationsFields: INodeProperties[] = [
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
				resource: ['integrations'],
			},
		},
		description:
			'Name of the instance. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},

	/* -------------------------------------------------------------------------- */
	/*                                Config Fields                               */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Configuration',
		name: 'configuration',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['integrations'],
				operation: ['setNats', 'setPusher', 'setRabbitmq', 'setSqs', 'setWebhook', 'setWebsocket'],
			},
		},
		options: webhookConfigFields,
		description: 'Configuration parameters for the integration',
	},
];
