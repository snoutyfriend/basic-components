export class Statement {
    public static runIfTrue( statement: boolean, method: () => void): void {
        if (statement === false) {
            return;
        }

        method();
    }
}
