import { IncomingMessage, ServerResponse } from "http";

export interface IBaseController {
    req: IncomingMessage;
    res: ServerResponse;

    internalServerError(err: Error): void;
    ok(message: string): void;
    created(message: string): void;
    badRequest(message: string): void;
}