class SqliteError extends Error {
    constructor(message: string) {
        super(message);

        this.name = 'SqliteError';
    }
}

export default SqliteError;