import { createGetLLM } from "@llm";

const tasksModelsMap = {};

const defaultLLMModel = {
  vendor: {
    type: "openai" as const,
  },
  model: "gpt-5.4",
};

export const getLLM = createGetLLM(tasksModelsMap, defaultLLMModel);
