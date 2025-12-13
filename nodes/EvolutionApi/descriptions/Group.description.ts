import { INodeProperties } from 'n8n-workflow';

export const groupOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['group'],
			},
		},
		options: [
			{
				name: 'Create Group',
				value: 'create',
				description: 'Create a new group',
				action: 'Create a group',
			},
			{
				name: 'Fetch All Groups',
				value: 'fetchAllGroups',
				action: 'Fetch all groups',
			},
			{
				name: 'Find Group Infos',
				value: 'findGroupInfos',
				description: 'Find group information by JID',
				action: 'Find group infos',
			},
			{
				name: 'Get Invite Code',
				value: 'inviteCode',
				description: 'Fetch the group invite code',
				action: 'Get invite code',
			},
			{
				name: 'Get Invite Info',
				value: 'inviteInfo',
				description: 'Find group information by invite code',
				action: 'Get invite info',
			},
			{
				name: 'Get Participants',
				value: 'participants',
				description: 'Find participants of a group',
				action: 'Get participants',
			},
			{
				name: 'Leave Group',
				value: 'leaveGroup',
				description: 'Leave a group',
				action: 'Leave group',
			},
			{
				name: 'Revoke Invite Code',
				value: 'revokeInviteCode',
				description: 'Revoke the group invite code',
				action: 'Revoke invite code',
			},
			{
				name: 'Send Invite',
				value: 'sendInvite',
				description: 'Send a group invite URL',
				action: 'Send invite',
			},
			{
				name: 'Toggle Ephemeral',
				value: 'toggleEphemeral',
				description: 'Toggle ephemeral messages for a group',
				action: 'Toggle ephemeral',
			},
			{
				name: 'Update Description',
				value: 'updateGroupDescription',
				description: 'Update the group description',
				action: 'Update description',
			},
			{
				name: 'Update Participant',
				value: 'updateParticipant',
				description: 'Update group participants',
				action: 'Update participant',
			},
			{
				name: 'Update Picture',
				value: 'updateGroupPicture',
				description: 'Update the group picture',
				action: 'Update picture',
			},
			{
				name: 'Update Setting',
				value: 'updateSetting',
				description: 'Update group settings',
				action: 'Update setting',
			},
			{
				name: 'Update Subject',
				value: 'updateGroupSubject',
				description: 'Update the group subject',
				action: 'Update subject',
			},
		],
		default: 'fetchAllGroups',
	},
];

export const groupFields: INodeProperties[] = [
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
				resource: ['group'],
			},
		},
		description:
			'Name of the instance. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
	{
		displayName: 'Group JID Name or ID',
		name: 'groupJid',
		type: 'options',
		required: true,
		default: '',
		typeOptions: {
			loadOptionsMethod: 'getGroups',
			loadOptionsDependsOn: ['instanceName'],
		},
		displayOptions: {
			show: {
				resource: ['group'],
				operation: [
					'updateGroupPicture',
					'updateGroupSubject',
					'updateGroupDescription',
					'inviteCode',
					'revokeInviteCode',
					'sendInvite',
					'findGroupInfos',
					'participants',
					'updateParticipant',
					'updateSetting',
					'toggleEphemeral',
					'leaveGroup',
				],
			},
		},
		description:
			'JID of the target group (e.g., 12345@g.us). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},

	/* -------------------------------------------------------------------------- */
	/*                                group:create                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Subject',
		name: 'subject',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['create', 'updateGroupSubject'],
			},
		},
		description: 'New subject/title for the group',
	},
	{
		displayName: 'Participants',
		name: 'participants',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['create', 'updateParticipant'],
			},
		},
		description: 'List of phone numbers to add or modify in the group',
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['create', 'updateGroupDescription', 'sendInvite'],
			},
		},
		description: 'Text description to set for the group',
	},

	/* -------------------------------------------------------------------------- */
	/*                                group:fetchAllGroups                        */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Get Participants',
		name: 'getParticipants',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['fetchAllGroups'],
			},
		},
		description: 'Whether to include detailed participant information in the response',
	},

	/* -------------------------------------------------------------------------- */
	/*                                group:updatePicture                         */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Image URL',
		name: 'image',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['updateGroupPicture'],
			},
		},
		description: 'URL or Base64 string of the image to set as the group picture',
	},

	/* -------------------------------------------------------------------------- */
	/*                                group:sendInvite                            */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Numbers',
		name: 'numbers',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['sendInvite'],
			},
		},
		description: 'Phone numbers to send the invite to',
	},

	/* -------------------------------------------------------------------------- */
	/*                                group:inviteInfo                            */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Invite Code',
		name: 'inviteCode',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['inviteInfo'],
			},
		},
		description: 'Unique invite code of the group',
	},

	/* -------------------------------------------------------------------------- */
	/*                                group:updateParticipant                     */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Action',
		name: 'action',
		type: 'options',
		options: [
			{ name: 'Add', value: 'add', action: 'Add a group' },
			{ name: 'Remove', value: 'remove', action: 'Remove a group' },
			{ name: 'Promote', value: 'promote', action: 'Promote a group' },
			{ name: 'Demote', value: 'demote', action: 'Demote a group' },
		],
		required: true,
		default: 'add',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['updateParticipant'],
			},
		},
	},

	/* -------------------------------------------------------------------------- */
	/*                                group:updateSetting                         */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Action',
		name: 'action',
		type: 'options',
		options: [
			{ name: 'Announcement', value: 'announcement', action: 'Announcement a group' },
			{ name: 'Not Announcement', value: 'not_announcement', action: 'Not announcement a group' },
			{ name: 'Locked', value: 'locked', action: 'Locked a group' },
			{ name: 'Unlocked', value: 'unlocked', action: 'Unlocked a group' },
		],
		required: true,
		default: 'announcement',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['updateSetting'],
			},
		},
		description: 'Setting to modify for the group',
	},

	/* -------------------------------------------------------------------------- */
	/*                                group:toggleEphemeral                       */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Expiration (0 to Off)',
		name: 'expiration',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['toggleEphemeral'],
			},
		},
		description: 'Duration in seconds before messages expire. Set to 0 to disable.',
	},
];
