import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath;

export const HUMAN_ICON = `${basePath}/icon/human.svg`;
export const LOGO_ICON = `${basePath}/icon/logo.svg`;
export const HUGGING_FACE_ICON = `${basePath}/imgs/model/huggingface.svg`;
