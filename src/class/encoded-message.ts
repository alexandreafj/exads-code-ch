export class EncodedMessage {
    encodedMessage: string
    columns: number;
    rows: number;

    constructor(_encodedMessage: string, _columns: number, _rows: number) {
        this.encodedMessage = _encodedMessage;
        this.columns = _columns;
        this.rows = _rows;
    }
}