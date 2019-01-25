export class Statement {
    public static runIfTrue( statement: boolean, method: () => void): void {
        if (statement === false) {
            return;
        }

        console.log(statement, method);
        method();
    }
}
