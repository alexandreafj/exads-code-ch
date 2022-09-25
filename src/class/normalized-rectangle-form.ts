export class NormalizedRectangleForm {
    rectangleForm: string;
    rectangleFormMatrix: Array<Array<string>>;
    columns: number;
    rows: number;

    constructor(_rectangleForm: string, _columns: number, _rows: number, _rectangleFormMatrix: Array<Array<string>>) {
        this.rectangleForm = _rectangleForm;
        this.columns = _columns;
        this.rows = _rows;
        this.rectangleFormMatrix = _rectangleFormMatrix;
    }
}