import { useQuery } from '@tanstack/react-query';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const getMd = async (url: string) => {
  const response = await fetch(`${publicRuntimeConfig.basePath}/docs/${url}`);
  const textContent = await response.text();
  return textContent;
};

export const useMarkdown = ({ url }: { url: string }) => {
  const { data = '' } = useQuery([url], () => getMd(url));

  return {
    data
  };
};
