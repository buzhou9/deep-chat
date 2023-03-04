import {OpenAIMessage} from './openAI';

export interface OpenAIInternalBody {
  model: string;
  messages?: OpenAIMessage[];
  max_tokens?: number;
  temperature?: number;
  top_p?: number;
  n?: number;
  stream?: boolean;
}

export interface OpenAIInternal {
  chat: OpenAIInternalBody;
  completions: OpenAIInternalBody;
}