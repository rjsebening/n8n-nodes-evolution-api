import { INodeProperties } from 'n8n-workflow';

export const chatOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['chat'],
			},
		},
		options: [
			{
				name: 'Archive Chat',
				value: 'archiveChat',
				description: 'Archive or unarchive a chat',
				action: 'Archive chat',
			},
			{
				name: 'Check WhatsApp Numbers',
				value: 'whatsappNumbers',
				description: 'Check if numbers are registered on WhatsApp',
				action: 'Check whats app numbers',
			},
			{
				name: 'Delete Message',
				value: 'deleteMessageForEveryone',
				description: 'Delete a message for everyone',
				action: 'Delete message',
			},
			{
				name: 'Fetch Profile Picture',
				value: 'fetchProfilePictureUrl',
				description: 'Fetch the profile picture URL',
				action: 'Fetch profile picture',
			},
			{
				name: 'Find Chats',
				value: 'findChats',
				action: 'Find chats',
			},
			{
				name: 'Find Contacts',
				value: 'findContacts',
				action: 'Find contacts',
			},
			{
				name: 'Find Messages',
				value: 'findMessages',
				action: 'Find messages',
			},
			{
				name: 'Find Status Message',
				value: 'findStatusMessage',
				description: 'Find status messages',
				action: 'Find status message',
			},
			{
				name: 'Get Base64 From Media',
				value: 'getBase64FromMediaMessage',
				description: 'Retrieve Base64 content from a media message',
				action: 'Get base64 from media',
			},
			{
				name: 'Mark Chat Unread',
				value: 'markChatUnread',
				description: 'Mark a chat as unread',
				action: 'Mark chat unread',
			},
			{
				name: 'Mark Messages as Read',
				value: 'markMessageAsRead',
				action: 'Mark messages as read',
			},
			{
				name: 'Send Presence',
				value: 'sendPresence',
				description: 'Send presence information',
				action: 'Send presence',
			},
			{
				name: 'Update Block Status',
				value: 'updateBlockStatus',
				description: 'Block or unblock a number',
				action: 'Update block status',
			},
			{
				name: 'Update Message',
				value: 'updateMessage',
				description: 'Update a message',
				action: 'Update message',
			},
		],
		default: 'whatsappNumbers',
	},
];

export const chatFields: INodeProperties[] = [
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
				resource: ['chat'],
			},
		},
		description:
			'Name of the instance. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},

	/* -------------------------------------------------------------------------- */
	/*                                chat:whatsappNumbers                        */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Numbers',
		name: 'numbers',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['chat'],
				operation: ['whatsappNumbers'],
			},
		},
		description: 'List of phone numbers to verify on WhatsApp',
	},

	/* -------------------------------------------------------------------------- */
	/*                                chat:markMessageAsRead                      */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Read Messages',
		name: 'readMessages',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		displayOptions: {
			show: {
				resource: ['chat'],
				operation: ['markMessageAsRead'],
			},
		},
		options: [
			{
				name: 'readMessagesValues',
				displayName: 'Message',
				values: [
					{
						displayName: 'Remote JID',
						name: 'remoteJid',
						type: 'string',
						default: '',
						description: 'JID of the chat',
					},
					{
						displayName: 'From Me',
						name: 'fromMe',
						type: 'boolean',
						default: false,
						description: 'Whether the message was sent by the instance',
					},
					{
						displayName: 'Message ID',
						name: 'id',
						type: 'string',
						default: '',
						description: 'Unique identifier of the message',
					},
				],
			},
		],
	},

	/* -------------------------------------------------------------------------- */
	/*                                chat:archiveChat                            */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Chat JID',
		name: 'chat',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['chat'],
				operation: ['archiveChat', 'markChatUnread'],
			},
		},
		description: 'JID of the chat to archive or mark as unread',
	},
	{
		displayName: 'Archive',
		name: 'archive',
		type: 'boolean',
		required: true,
		default: true,
		displayOptions: {
			show: {
				resource: ['chat'],
				operation: ['archiveChat'],
			},
		},
		description: 'Whether to archive the chat (true) or unarchive it (false)',
	},

	/* -------------------------------------------------------------------------- */
	/*                                chat:deleteMessageForEveryone               */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Message ID',
		name: 'id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['chat'],
				operation: ['deleteMessageForEveryone'],
			},
		},
		description: 'ID of the message to delete',
	},
	{
		displayName: 'Remote JID',
		name: 'remoteJid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['chat'],
				operation: ['deleteMessageForEveryone'],
			},
		},
		description: 'JID of the remote chat',
	},
	{
		displayName: 'From Me',
		name: 'fromMe',
		type: 'boolean',
		required: true,
		default: true,
		displayOptions: {
			show: {
				resource: ['chat'],
				operation: ['deleteMessageForEveryone'],
			},
		},
		description: 'Whether the message was sent by you',
	},
	{
		displayName: 'Participant',
		name: 'participant',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['chat'],
				operation: ['deleteMessageForEveryone'],
			},
		},
		description: 'JID of the participant (for groups)',
	},

	/* -------------------------------------------------------------------------- */
	/*                                chat:fetchProfilePictureUrl                 */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Number',
		name: 'number',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['chat'],
				operation: ['fetchProfilePictureUrl'],
			},
		},
		description: 'Phone number to fetch the profile picture for',
	},

	/* -------------------------------------------------------------------------- */
	/*                                chat:getBase64FromMediaMessage              */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['chat'],
				operation: ['getBase64FromMediaMessage', 'updateMessage'],
			},
		},
		description: 'ID of the media message',
	},
	{
		displayName: 'Convert to MP4',
		name: 'convertToMp4',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['chat'],
				operation: ['getBase64FromMediaMessage'],
			},
		},
		description: 'Whether to convert the media to MP4 format',
	},

	/* -------------------------------------------------------------------------- */
	/*                                chat:updateMessage                          */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Number',
		name: 'number',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['chat'],
				operation: ['updateMessage'],
			},
		},
		description: 'Phone number of the chat containing the message',
	},
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['chat'],
				operation: ['updateMessage'],
			},
		},
		description: 'New text content for the message',
	},

	/* -------------------------------------------------------------------------- */
	/*                                chat:sendPresence                           */
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
				resource: ['chat'],
				operation: ['sendPresence'],
			},
		},
		description: 'Type of presence status to display',
	},
	{
		displayName: 'Delay',
		name: 'delay',
		type: 'number',
		default: 1200,
		displayOptions: {
			show: {
				resource: ['chat'],
				operation: ['sendPresence'],
			},
		},
		description: 'Duration in milliseconds to show the presence',
	},
	{
		displayName: 'Number',
		name: 'number',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['chat'],
				operation: ['sendPresence'],
			},
		},
		description: 'Phone number to send presence to',
	},

	/* -------------------------------------------------------------------------- */
	/*                                chat:updateBlockStatus                      */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Number',
		name: 'number',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['chat'],
				operation: ['updateBlockStatus'],
			},
		},
		description: 'Phone number to block or unblock',
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options',
		options: [
			{ name: 'Block', value: 'block' },
			{ name: 'Unblock', value: 'unblock' },
		],
		required: true,
		default: 'block',
		displayOptions: {
			show: {
				resource: ['chat'],
				operation: ['updateBlockStatus'],
			},
		},
		description: 'Action to block or unblock the number',
	},

	/* -------------------------------------------------------------------------- */
	/*                                chat:findContacts                         */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['chat'],
				operation: ['findContacts'],
			},
		},
		description: 'ID of the contact to search for',
	},

	/* -------------------------------------------------------------------------- */
	/*                                chat:findMessages                           */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		default: 1,
		displayOptions: {
			show: {
				resource: ['chat'],
				operation: ['findMessages', 'findStatusMessage'],
			},
		},
		description: 'Page number for pagination',
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'number',
		default: 0,
		displayOptions: {
			show: {
				resource: ['chat'],
				operation: ['findMessages', 'findStatusMessage'],
			},
		},
		description: 'Number of items to skip',
	},

	/* -------------------------------------------------------------------------- */
	/*                                chat:findStatusMessage                      */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Remote JID',
		name: 'remoteJid',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['chat'],
				operation: ['findStatusMessage'],
			},
		},
		description: 'Filter by remote JID',
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['chat'],
				operation: ['findStatusMessage'],
			},
		},
		description: 'Filter by message ID',
	},
];
