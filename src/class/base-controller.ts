import { IncomingMessage, ServerResponse } from "http";
import { IBaseController } from "../interface/base-controller.interface";

export class BaseController implements IBaseController {
    req: IncomingMessage;
    res: ServerResponse;

    constructor(_req: IncomingMessage, _res: ServerResponse) {
        this.req = _req;
        this.res = _res;
    }
    badRequest(message: string): void {
        this.res.writeHead(400);
        this.res.end(
            JSON.stringify({
                success: false,
                error: message,
            })
        );
    }

    internalServerError(err: Error): void {
        this.res.writeHead(500);
        this.res.end(
            JSON.stringify({
                success: false,
                error: JSON.stringify(err),
            })
        );
    }
    ok(message: string): void {
        this.res.writeHead(200);
        this.res.end(
            JSON.stringify({
                success: true,
                message,
            })
        );
    }
    created(message: string): void {
        this.res.write(201);
        this.res.end(
            JSON.stringify({
                success: true,
                message,
            })
        );
    }
}