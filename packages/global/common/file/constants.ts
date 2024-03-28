/* mongo fs bucket */
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
export enum BucketNameEnum {
  dataset = 'dataset'
}
export const bucketNameMap = {
  [BucketNameEnum.dataset]: {
    label: 'common.file.bucket.dataset'
  }
};

export const ReadFileBaseUrl = `${publicRuntimeConfig.basePath}/api/common/file/read`;
