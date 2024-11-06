import { baseUrl } from "../consts";

const useApiEndpoints = () => {
  const getApiEndpoint = (endpoint: string, params?: string[]) => {
    const url = `${baseUrl}/${endpoint}${params && "/"}${params
      ?.join("/")
      .replace(/\/+$/, "")}`;
    return url;
  };

  return { getApiEndpoint };
};

export default useApiEndpoints;
