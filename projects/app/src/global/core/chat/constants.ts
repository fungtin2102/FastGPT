import { InitChatResponse } from './api';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const defaultChatData: InitChatResponse = {
  chatId: '',
  appId: '',
  app: {
    name: 'Loading',
    avatar: `${publicRuntimeConfig.basePath}/icon/logo.svg`,
    intro: '',
    canUse: false
  },
  title: '新对话',
  variables: {},
  history: []
};
