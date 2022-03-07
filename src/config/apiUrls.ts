const getUrl = (apiEndpoint = "", baseUrl = "https://assessment.api.vweb.app") => {
    return `${baseUrl}/${apiEndpoint}`;
};

export const baseUrl = getUrl();

export const getRides = getUrl("rides");
export const getUser = getUrl("user");
