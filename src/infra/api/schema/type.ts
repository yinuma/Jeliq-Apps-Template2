import {
  NextFunction as NextFunctionCore,
  GetResponseType,
  GetReqParamsPathType,
  GetReqBodyType,
  GetReqParamsQueryType,
  Locals as LocalsCore,
  Request as RequestCore,
  Response as ResponseCore,
} from "@core";
import { Repositories } from "@/src/domain/repositories/index";
import Services from "@/src/services/index";

export type Services = typeof Services;
export type Locals = LocalsCore<Repositories, Services>;

export type Request<T> = RequestCore<
  GetResponseType<T>,
  GetReqParamsPathType<T>,
  GetReqBodyType<T>,
  GetReqParamsQueryType<T>,
  Locals
>;

export type Response<T> = ResponseCore<GetResponseType<T>, Locals>;
