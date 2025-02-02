import { CloudflareChatMessage} from "./Cloudflare.types";

export const defaultConfig = {
};

export type CloudflareRequest = {
  messages: CloudflareChatMessage[];
};

export const getCloudflareCompletion = async (
  token: string,
  payload: CloudflareRequest
) => {

  const account_id = process.env.CLOUDFLARE_ACCOUNT_ID;
  const api_key = process.env.CLOUDFLARE_API_KEY
  
  const json = JSON.stringify({messages:  payload.messages});
  console.log(json)
  const singlePromptJson = JSON.stringify({ 
    prompt: payload.messages[payload.messages.length - 1].content
  })
  console.log(singlePromptJson)

  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${account_id}/ai/run/@cf/mistral/mistral-7b-instruct-v0.1`,
    {
      headers: { Authorization: `Bearer ${api_key}` },
      method: "POST",
      body: singlePromptJson,
    }
  );

  // Check for errors
  if (!response.ok) {
    const error = await response.text();
    console.log(error)
    throw new Error(error);
  }

  const result = await response.text();

  const res = JSON.parse(result).result.response;
  
  return res.trim();
};