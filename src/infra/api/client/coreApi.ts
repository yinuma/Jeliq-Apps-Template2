/* eslint-disable */
// @ts-nocheck
import { api } from "@core";

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({}),
  overrideExisting: false,
});
export { injectedRtkApi as coreApi };
export const {} = injectedRtkApi;
