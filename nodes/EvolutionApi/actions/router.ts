import { IExecuteFunctions, IDataObject, NodeApiError, JsonObject, INodeExecutionData } from 'n8n-workflow';

// Instance Actions
import * as instanceCreate from './instance/create';
import * as instanceFetchInstances from './instance/fetchInstances';
import * as instanceConnect from './instance/connect';
import * as instanceRestart from './instance/restart';
import * as instanceSetPresence from './instance/setPresence';
import * as instanceConnectionState from './instance/connectionState';
import * as instanceLogout from './instance/logout';
import * as instanceDelete from './instance/delete';

// Message Actions
import * as messageSendText from './message/sendText';
import * as messageSendMedia from './message/sendMedia';
import * as messageSendWhatsAppAudio from './message/sendWhatsAppAudio';
import * as messageSendSticker from './message/sendSticker';
import * as messageSendLocation from './message/sendLocation';
import * as messageSendReaction from './message/sendReaction';
import * as messageSendPtv from './message/sendPtv';
import * as messageSendStatus from './message/sendStatus';
import * as messageSendContact from './message/sendContact';
import * as messageSendPoll from './message/sendPoll';
import * as messageSendList from './message/sendList';
import * as messageSendButtons from './message/sendButtons';

// Group Actions
import * as groupCreate from './group/create';
import * as groupFetchAllGroups from './group/fetchAllGroups';
import * as groupUpdateGroupPicture from './group/updateGroupPicture';
import * as groupUpdateGroupSubject from './group/updateGroupSubject';
import * as groupUpdateGroupDescription from './group/updateGroupDescription';
import * as groupInviteCode from './group/inviteCode';
import * as groupRevokeInviteCode from './group/revokeInviteCode';
import * as groupSendInvite from './group/sendInvite';
import * as groupInviteInfo from './group/inviteInfo';
import * as groupFindGroupInfos from './group/findGroupInfos';
import * as groupParticipants from './group/participants';
import * as groupUpdateParticipant from './group/updateParticipant';
import * as groupUpdateSetting from './group/updateSetting';
import * as groupToggleEphemeral from './group/toggleEphemeral';
import * as groupLeaveGroup from './group/leaveGroup';

// Chat Actions
import * as chatWhatsappNumbers from './chat/whatsappNumbers';
import * as chatMarkMessageAsRead from './chat/markMessageAsRead';
import * as chatArchiveChat from './chat/archiveChat';
import * as chatMarkChatUnread from './chat/markChatUnread';
import * as chatDeleteMessageForEveryone from './chat/deleteMessageForEveryone';
import * as chatFetchProfilePictureUrl from './chat/fetchProfilePictureUrl';
import * as chatGetBase64FromMediaMessage from './chat/getBase64FromMediaMessage';
import * as chatUpdateMessage from './chat/updateMessage';
import * as chatSendPresence from './chat/sendPresence';
import * as chatUpdateBlockStatus from './chat/updateBlockStatus';
import * as chatFindContacts from './chat/findContacts';
import * as chatFindMessages from './chat/findMessages';
import * as chatFindStatusMessage from './chat/findStatusMessage';
import * as chatFindChats from './chat/findChats';

// Settings Actions
import * as settingsSet from './settings/setSettings';
import * as settingsFind from './settings/findSettings';

// Proxy Actions
import * as proxySet from './proxy/setProxy';
import * as proxyFind from './proxy/findProxy';

// Call Actions
import * as callOffer from './call/offerCall';

// Label Actions
import * as labelFindLabels from './label/findLabels';
import * as labelHandleLabel from './label/handleLabel';

// Profile Actions
import * as profileFetchProfile from './profile/fetchProfile';
import * as profileFetchBusinessProfile from './profile/fetchBusinessProfile';
import * as profileUpdateName from './profile/updateProfileName';
import * as profileUpdateStatus from './profile/updateProfileStatus';
import * as profileUpdatePicture from './profile/updateProfilePicture';
import * as profileRemovePicture from './profile/removeProfilePicture';
import * as profileFetchPrivacy from './profile/fetchPrivacySettings';
import * as profileUpdatePrivacy from './profile/updatePrivacySettings';

// Storage Actions
import * as storageGetMedia from './storage/getMedia';
import * as storageGetMediaUrl from './storage/getMediaUrl';

// Info & Metrics Actions
import * as getInformationsGet from './getInformations/getInformations';
import * as metricsGet from './metrics/getMetrics';

// Integration Actions
import * as integrationsSetWebhook from './integrations/setWebhook';
import * as integrationsFindWebhook from './integrations/findWebhook';
import * as integrationsSetWebsocket from './integrations/setWebsocket';
import * as integrationsFindWebsocket from './integrations/findWebsocket';
import * as integrationsSetNats from './integrations/setNats';
import * as integrationsFindNats from './integrations/findNats';
import * as integrationsSetPusher from './integrations/setPusher';
import * as integrationsFindPusher from './integrations/findPusher';
import * as integrationsSetRabbitmq from './integrations/setRabbitmq';
import * as integrationsFindRabbitmq from './integrations/findRabbitmq';
import * as integrationsSetSqs from './integrations/setSqs';
import * as integrationsFindSqs from './integrations/findSqs';

// Chatbot Actions
import * as chatbotSetChatwoot from './chatbot/setChatwoot';
import * as chatbotFindChatwoot from './chatbot/findChatwoot';

export async function router(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
	const items = this.getInputData();
	const returnData: INodeExecutionData[] = [];
	const resource = this.getNodeParameter('resource', 0) as string;
	const operation = this.getNodeParameter('operation', 0) as string;

	for (let i = 0; i < items.length; i++) {
		try {
			let responseData;

			if (resource === 'instance') {
				if (operation === 'create') {
					responseData = await instanceCreate.create.call(this, i);
				} else if (operation === 'fetchInstances') {
					responseData = await instanceFetchInstances.fetchInstances.call(this, i);
				} else if (operation === 'connect') {
					responseData = await instanceConnect.connect.call(this, i);
				} else if (operation === 'restart') {
					responseData = await instanceRestart.restart.call(this, i);
				} else if (operation === 'setPresence') {
					responseData = await instanceSetPresence.setPresence.call(this, i);
				} else if (operation === 'connectionState') {
					responseData = await instanceConnectionState.connectionState.call(this, i);
				} else if (operation === 'logout') {
					responseData = await instanceLogout.logout.call(this, i);
				} else if (operation === 'delete') {
					responseData = await instanceDelete.deleteInstance.call(this, i);
				}
			} else if (resource === 'message') {
				if (operation === 'sendText') {
					responseData = await messageSendText.sendText.call(this, i);
				} else if (operation === 'sendMedia') {
					responseData = await messageSendMedia.sendMedia.call(this, i);
				} else if (operation === 'sendWhatsAppAudio') {
					responseData = await messageSendWhatsAppAudio.sendWhatsAppAudio.call(this, i);
				} else if (operation === 'sendSticker') {
					responseData = await messageSendSticker.sendSticker.call(this, i);
				} else if (operation === 'sendLocation') {
					responseData = await messageSendLocation.sendLocation.call(this, i);
				} else if (operation === 'sendReaction') {
					responseData = await messageSendReaction.sendReaction.call(this, i);
				} else if (operation === 'sendPtv') {
					responseData = await messageSendPtv.sendPtv.call(this, i);
				} else if (operation === 'sendStatus') {
					responseData = await messageSendStatus.sendStatus.call(this, i);
				} else if (operation === 'sendContact') {
					responseData = await messageSendContact.sendContact.call(this, i);
				} else if (operation === 'sendPoll') {
					responseData = await messageSendPoll.sendPoll.call(this, i);
				} else if (operation === 'sendList') {
					responseData = await messageSendList.sendList.call(this, i);
				} else if (operation === 'sendButtons') {
					responseData = await messageSendButtons.sendButtons.call(this, i);
				}
			} else if (resource === 'group') {
				if (operation === 'create') {
					responseData = await groupCreate.create.call(this, i);
				} else if (operation === 'fetchAllGroups') {
					responseData = await groupFetchAllGroups.fetchAllGroups.call(this, i);
				} else if (operation === 'updateGroupPicture') {
					responseData = await groupUpdateGroupPicture.updateGroupPicture.call(this, i);
				} else if (operation === 'updateGroupSubject') {
					responseData = await groupUpdateGroupSubject.updateGroupSubject.call(this, i);
				} else if (operation === 'updateGroupDescription') {
					responseData = await groupUpdateGroupDescription.updateGroupDescription.call(this, i);
				} else if (operation === 'inviteCode') {
					responseData = await groupInviteCode.inviteCode.call(this, i);
				} else if (operation === 'revokeInviteCode') {
					responseData = await groupRevokeInviteCode.revokeInviteCode.call(this, i);
				} else if (operation === 'sendInvite') {
					responseData = await groupSendInvite.sendInvite.call(this, i);
				} else if (operation === 'inviteInfo') {
					responseData = await groupInviteInfo.inviteInfo.call(this, i);
				} else if (operation === 'findGroupInfos') {
					responseData = await groupFindGroupInfos.findGroupInfos.call(this, i);
				} else if (operation === 'participants') {
					responseData = await groupParticipants.participants.call(this, i);
				} else if (operation === 'updateParticipant') {
					responseData = await groupUpdateParticipant.updateParticipant.call(this, i);
				} else if (operation === 'updateSetting') {
					responseData = await groupUpdateSetting.updateSetting.call(this, i);
				} else if (operation === 'toggleEphemeral') {
					responseData = await groupToggleEphemeral.toggleEphemeral.call(this, i);
				} else if (operation === 'leaveGroup') {
					responseData = await groupLeaveGroup.leaveGroup.call(this, i);
				}
			} else if (resource === 'chat') {
				if (operation === 'whatsappNumbers') {
					responseData = await chatWhatsappNumbers.whatsappNumbers.call(this, i);
				} else if (operation === 'markMessageAsRead') {
					responseData = await chatMarkMessageAsRead.markMessageAsRead.call(this, i);
				} else if (operation === 'archiveChat') {
					responseData = await chatArchiveChat.archiveChat.call(this, i);
				} else if (operation === 'markChatUnread') {
					responseData = await chatMarkChatUnread.markChatUnread.call(this, i);
				} else if (operation === 'deleteMessageForEveryone') {
					responseData = await chatDeleteMessageForEveryone.deleteMessageForEveryone.call(this, i);
				} else if (operation === 'fetchProfilePictureUrl') {
					responseData = await chatFetchProfilePictureUrl.fetchProfilePictureUrl.call(this, i);
				} else if (operation === 'getBase64FromMediaMessage') {
					responseData = await chatGetBase64FromMediaMessage.getBase64FromMediaMessage.call(this, i);
				} else if (operation === 'updateMessage') {
					responseData = await chatUpdateMessage.updateMessage.call(this, i);
				} else if (operation === 'sendPresence') {
					responseData = await chatSendPresence.sendPresence.call(this, i);
				} else if (operation === 'updateBlockStatus') {
					responseData = await chatUpdateBlockStatus.updateBlockStatus.call(this, i);
				} else if (operation === 'findContacts') {
					responseData = await chatFindContacts.findContacts.call(this, i);
				} else if (operation === 'findMessages') {
					responseData = await chatFindMessages.findMessages.call(this, i);
				} else if (operation === 'findStatusMessage') {
					responseData = await chatFindStatusMessage.findStatusMessage.call(this, i);
				} else if (operation === 'findChats') {
					responseData = await chatFindChats.findChats.call(this, i);
				}
			} else if (resource === 'settings') {
				if (operation === 'setSettings') {
					responseData = await settingsSet.setSettings.call(this, i);
				} else if (operation === 'findSettings') {
					responseData = await settingsFind.findSettings.call(this, i);
				}
			} else if (resource === 'proxy') {
				if (operation === 'setProxy') {
					responseData = await proxySet.setProxy.call(this, i);
				} else if (operation === 'findProxy') {
					responseData = await proxyFind.findProxy.call(this, i);
				}
			} else if (resource === 'call') {
				if (operation === 'offerCall') {
					responseData = await callOffer.offerCall.call(this, i);
				}
			} else if (resource === 'label') {
				if (operation === 'findLabels') {
					responseData = await labelFindLabels.findLabels.call(this, i);
				} else if (operation === 'handleLabel') {
					responseData = await labelHandleLabel.handleLabel.call(this, i);
				}
			} else if (resource === 'profile') {
				if (operation === 'fetchProfile') {
					responseData = await profileFetchProfile.fetchProfile.call(this, i);
				} else if (operation === 'fetchBusinessProfile') {
					responseData = await profileFetchBusinessProfile.fetchBusinessProfile.call(this, i);
				} else if (operation === 'updateProfileName') {
					responseData = await profileUpdateName.updateProfileName.call(this, i);
				} else if (operation === 'updateProfileStatus') {
					responseData = await profileUpdateStatus.updateProfileStatus.call(this, i);
				} else if (operation === 'updateProfilePicture') {
					responseData = await profileUpdatePicture.updateProfilePicture.call(this, i);
				} else if (operation === 'removeProfilePicture') {
					responseData = await profileRemovePicture.removeProfilePicture.call(this, i);
				} else if (operation === 'fetchPrivacySettings') {
					responseData = await profileFetchPrivacy.fetchPrivacySettings.call(this, i);
				} else if (operation === 'updatePrivacySettings') {
					responseData = await profileUpdatePrivacy.updatePrivacySettings.call(this, i);
				}
			} else if (resource === 'storage') {
				if (operation === 'getMedia') {
					responseData = await storageGetMedia.getMedia.call(this, i);
				} else if (operation === 'getMediaUrl') {
					responseData = await storageGetMediaUrl.getMediaUrl.call(this, i);
				}
			} else if (resource === 'getInformation') {
				if (operation === 'getInformation') {
					responseData = await getInformationsGet.getInformations.call(this, i);
				}
			} else if (resource === 'metrics') {
				if (operation === 'getMetrics') {
					responseData = await metricsGet.getMetrics.call(this, i);
				}
			} else if (resource === 'integrations') {
				if (operation === 'setWebhook') {
					responseData = await integrationsSetWebhook.setWebhook.call(this, i);
				} else if (operation === 'findWebhook') {
					responseData = await integrationsFindWebhook.findWebhook.call(this, i);
				} else if (operation === 'setWebsocket') {
					responseData = await integrationsSetWebsocket.setWebsocket.call(this, i);
				} else if (operation === 'findWebsocket') {
					responseData = await integrationsFindWebsocket.findWebsocket.call(this, i);
				} else if (operation === 'setNats') {
					responseData = await integrationsSetNats.setNats.call(this, i);
				} else if (operation === 'findNats') {
					responseData = await integrationsFindNats.findNats.call(this, i);
				} else if (operation === 'setPusher') {
					responseData = await integrationsSetPusher.setPusher.call(this, i);
				} else if (operation === 'findPusher') {
					responseData = await integrationsFindPusher.findPusher.call(this, i);
				} else if (operation === 'setRabbitmq') {
					responseData = await integrationsSetRabbitmq.setRabbitmq.call(this, i);
				} else if (operation === 'findRabbitmq') {
					responseData = await integrationsFindRabbitmq.findRabbitmq.call(this, i);
				} else if (operation === 'setSqs') {
					responseData = await integrationsSetSqs.setSqs.call(this, i);
				} else if (operation === 'findSqs') {
					responseData = await integrationsFindSqs.findSqs.call(this, i);
				}
			} else if (resource === 'chatbot') {
				if (operation === 'setChatwoot') {
					responseData = await chatbotSetChatwoot.setChatwoot.call(this, i);
				} else if (operation === 'findChatwoot') {
					responseData = await chatbotFindChatwoot.findChatwoot.call(this, i);
				}
			}

			if (Array.isArray(responseData)) {
				responseData.forEach((data) => returnData.push({ json: data }));
			} else if (responseData !== undefined) {
				returnData.push({ json: responseData as IDataObject });
			}
		} catch (error) {
			if (this.continueOnFail()) {
				returnData.push({ json: { error: (error as Error).message } });
				continue;
			}
			throw new NodeApiError(this.getNode(), error as JsonObject);
		}
	}

	return [returnData];
}
