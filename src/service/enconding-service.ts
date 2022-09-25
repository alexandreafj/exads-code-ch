import { EncodedMessage } from "../class/encoded-message";
import { NormalizedRectangleForm } from "../class/normalized-rectangle-form";

export class EncondingService {
    removeSpecialCharacters(character: string): string {
        const removeSpecialCharacter = /[^a-zA-Z ]/g;
        const removeSpace = /\s/g;
        const normalized = character.replace(removeSpecialCharacter, "").replace(removeSpace, "").toLocaleLowerCase();
        return normalized;
    }

    brakeRectangleForm(normalized: string): NormalizedRectangleForm {
        const columns = Math.ceil(Math.sqrt(normalized.length));
        const normalizedRectangleForm = new NormalizedRectangleForm('', columns, 0, []);
        for (let index = 0; index < normalized.length; index += columns) {
            normalizedRectangleForm.rectangleForm += `${normalized.slice(index, index + columns)}\n`;
            normalizedRectangleForm.rectangleFormMatrix.push(normalized.slice(index, index + columns).split(''));
        }
        normalizedRectangleForm.rows = normalizedRectangleForm.rectangleFormMatrix.length;
        return normalizedRectangleForm;
    }

    encondedMessage(normalizedRectangleForm: NormalizedRectangleForm): EncodedMessage {
        const encodedMessage = new EncodedMessage('', normalizedRectangleForm.columns, normalizedRectangleForm.rows);
        for (let indexRows = 0; indexRows < normalizedRectangleForm.rows; indexRows++) {
            for (let indexColumns = 0; indexColumns < normalizedRectangleForm.columns; indexColumns++) {
                const hasString = !!normalizedRectangleForm.rectangleFormMatrix[indexColumns][indexRows];
                if (hasString) {
                    encodedMessage.encodedMessage += normalizedRectangleForm.rectangleFormMatrix[indexColumns][indexRows];
                }
            }
        }
        return encodedMessage;
    }

    outputEncoded(encodedMessage: EncodedMessage): string {
        //TODO: Missing implementation
        return encodedMessage.encodedMessage;
    }
}