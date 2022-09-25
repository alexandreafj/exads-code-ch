import { IncomingMessage, ServerResponse } from "http";
import { BaseController } from "../class/base-controller";
import { EncondingService } from "../service/enconding-service";

export class EncondingController extends BaseController {
    private service: EncondingService;
    constructor(_req: IncomingMessage, _res: ServerResponse) {
        super(_req, _res);
        this.service = new EncondingService();
    }

    encodingMessage(): void {
        try {
            let data = "";
            this.req.on("data", (chunk) => {
                data += chunk.toString();
            });
            this.req.on("end", () => {
                const dataParsed = JSON.parse(data);
                const hasBody = !!dataParsed && dataParsed?.message?.length > 0;
                if (hasBody === false) {
                    this.badRequest('Body is empty');
                }
                const cleanString = this.service.removeSpecialCharacters(dataParsed?.message);
                const hasMoreThanSixtyFour = cleanString.length > 64;
                if (hasMoreThanSixtyFour) {
                    this.badRequest('The normalized version should be at max 64 characters long');
                }
                const rectangleForm = this.service.brakeRectangleForm(cleanString);
                const encondedMessage = this.service.encondedMessage(rectangleForm);
                const outputMessage = this.service.outputEncoded(encondedMessage);
                this.ok(outputMessage);
            });
        } catch (error) {
            console.log(error);
            this.internalServerError(error);
        }
    }
}