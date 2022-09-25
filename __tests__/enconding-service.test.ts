import { EncondingService } from '../src/service/enconding-service';

describe('EncondingService', () => {
    let service: EncondingService;

    beforeEach(() => {
        service = new EncondingService();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should remove special characters', () => {
        const mockCharacter = `That's one small step for man, one giant leap for mankind.`;
        const response = service.removeSpecialCharacters(mockCharacter);
        expect(response).toBe(`thatsonesmallstepformanonegiantleapformankind`);
    });

    it('should brake into rows to form rectangle', () => {
        const mockCharacter = `That's one small step for man, one giant leap for mankind.`;
        const normalized = service.removeSpecialCharacters(mockCharacter);
        const normalizedRectangleForm = service.brakeRectangleForm(normalized);
        let expectedResult = "";
        const columns = Math.ceil(Math.sqrt(normalized.length));
        for (let index = 0; index < normalized.length; index += columns) {
            expectedResult += `${normalized.slice(index, index + columns)}\n`;
        }
        expect(normalizedRectangleForm.rectangleForm).toBe(expectedResult);
        expect(normalizedRectangleForm.columns).toBe(7);
        expect(normalizedRectangleForm.rows).toBe(7);
    });

    it('should encode the message by reading down the columns going left to right', () => {
        const mockCharacter = `That's one small step for man, one giant leap for mankind.`;
        const normalized = service.removeSpecialCharacters(mockCharacter);
        const normalizedRectangleForm = service.brakeRectangleForm(normalized);
        const encodedMessage = service.encondedMessage(normalizedRectangleForm);
        expect(encodedMessage.encodedMessage).toBe('tetaafihsennonampotrdtafnlmsloeeaolrgannsmipk');
    });

    it('should separate by spaces', () => {
        const mockCharacter = `That's one small step for man, one giant leap for mankind.`;
        const normalized = service.removeSpecialCharacters(mockCharacter);
        const normalizedRectangleForm = service.brakeRectangleForm(normalized);
        const encodedMessage = service.encondedMessage(normalizedRectangleForm);
        const outputEncoded = service.outputEncoded(encodedMessage);
        const expectedResult = 'tetaafi hsennon ampotrd tafnlm  sloeea  olrgan  nsmipk';
        expect(outputEncoded).toBe(expectedResult);
    })
});
