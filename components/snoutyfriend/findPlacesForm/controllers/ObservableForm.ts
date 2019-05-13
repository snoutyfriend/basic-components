import {Subject} from "rxjs";

export interface ObservableFormInputState {
    name: string;
    value: string;
}

export interface ObservableFormInputStateEvent {
    inputState: ObservableFormInputState;
}
export interface ObservableFormState {
    inputs: ObservableFormInputState[];
    submitted: boolean;
}
export class ObservableForm {
    private observableInputState: Subject<ObservableFormInputStateEvent> = new Subject();
    private observableSubmitted: Subject<ObservableFormState> = new Subject();

    constructor(private inputStates: ObservableFormInputState[]) {}

    public getInputStateObservable() {
        return this.observableInputState;
    }

    public setSubmitted(): void {
        this.observableSubmitted.next({
            inputs: this.inputStates,
            submitted: true,
        });
    }

    public getSubmittedObservable() {
        return this.observableSubmitted;
    }

    private setInputState(inputName: string, state: ObservableFormInputState): void {
        this.inputStates.forEach((inputState, index) => {
            if (inputState.name !== inputName) {
                return;
            }

            this.inputStates[index] = state;
            this.observableInputState.next({
                inputState: state,
            });
        });
    }
}
