import { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import { instanceOperations, instanceFields } from './descriptions/Instance.description';
import { messageOperations, messageFields } from './descriptions/Message.description';
import { groupOperations, groupFields } from './descriptions/Group.description';
import { chatOperations, chatFields } from './descriptions/Chat.description';
import { settingsOperations, settingsFields } from './descriptions/Settings.description';
import { proxyOperations, proxyFields } from './descriptions/Proxy.description';
import { callOperations, callFields } from './descriptions/Call.description';
import { labelOperations, labelFields } from './descriptions/Label.description';
import { profileOperations, profileFields } from './descriptions/Profile.description';
import { storageOperations, storageFields } from './descriptions/Storage.description';
import { getInformationsOperations, getInformationsFields } from './descriptions/GetInformations.description';
import { metricsOperations, metricsFields } from './descriptions/Metrics.description';
import { integrationsOperations, integrationsFields } from './descriptions/Integrations.description';
import { chatbotOperations, chatbotFields } from './descriptions/Chatbot.description';
import { router } from './actions/router';
import * as instanceLoadOptions from './methods/loadOptions/instance.loadOptions';
import * as groupLoadOptions from './methods/loadOptions/group.loadOptions';

export class EvolutionApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Evolution API',
		name: 'evolutionApi',
		icon: 'file:evolutionApi.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with Evolution API (v2.3)',
		defaults: {
			name: 'Evolution API',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'evolutionApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Call',
						value: 'call',
						description: 'Manage calls',
					},
					{
						name: 'Chat',
						value: 'chat',
						description: 'Manage chats',
					},
					{
						name: 'Chatbot',
						value: 'chatbot',
						description: 'Manage chatbot settings (Chatwoot)',
					},
					{
						name: 'Get Information',
						value: 'getInformation',
						description: 'Get API information',
					},
					{
						name: 'Group',
						value: 'group',
						description: 'Manage groups',
					},
					{
						name: 'Instance',
						value: 'instance',
					},
					{
						name: 'Integration',
						value: 'integrations',
						description: 'Manage integrations (Webhook, WebSocket, RabbitMQ, etc.)',
					},
					{
						name: 'Label',
						value: 'label',
						description: 'Manage labels',
					},
					{
						name: 'Message',
						value: 'message',
						description: 'Send text, media, etc',
					},
					{
						name: 'Metric',
						value: 'metrics',
						description: 'Get metrics',
					},
					{
						name: 'Profile',
						value: 'profile',
						description: 'Manage profile settings',
					},
					{
						name: 'Proxy',
						value: 'proxy',
						description: 'Manage proxy settings',
					},
					{
						name: 'Setting',
						value: 'settings',
						description: 'Manage instance settings',
					},
					{
						name: 'Storage',
						value: 'storage',
						description: 'S3/Media storage',
					},
				],
				default: 'instance',
			},

			// Resource Operations
			...instanceOperations,
			...messageOperations,
			...chatOperations,
			...groupOperations,
			...settingsOperations,
			...proxyOperations,
			...labelOperations,
			...profileOperations,
			...storageOperations,
			...callOperations,
			...getInformationsOperations,
			...metricsOperations,
			...integrationsOperations,
			...chatbotOperations,

			// Resource Fields
			...instanceFields,
			...messageFields,
			...chatFields,
			...groupFields,
			...settingsFields,
			...proxyFields,
			...labelFields,
			...profileFields,
			...storageFields,
			...callFields,
			...getInformationsFields,
			...metricsFields,
			...integrationsFields,
			...chatbotFields,
		],
	};

	methods = {
		loadOptions: {
			getInstances: instanceLoadOptions.getInstances,
			getGroups: groupLoadOptions.getGroups,
		},
	};

	async execute(this: IExecuteFunctions) {
		return await router.call(this);
	}
}
