import { Action } from '@ngrx/store';

export const ADD_VARIABLE = 'ADD_VARIABLE';
export const REMOVE_VARIABLE = 'REMOVE_VARIABLE';
export const EDIT_VARIABLE_KEY = 'EDIT_VARIABLE_KEY';
export const EDIT_VARIABLE_VALUE = 'EDIT_VARIABLE_VALUE';

export class AddVariableAction implements Action {
    readonly type = ADD_VARIABLE;

    constructor(public key: string = '', public value: string = '') {}
}

export class RemoveVariableAction implements Action {
    readonly type = REMOVE_VARIABLE;

    constructor(public payload: number) {}
}

export class EditVariableKeyAction implements Action {
    readonly type = EDIT_VARIABLE_KEY;

    constructor(public payload: any) {}
}
export class EditVariableValueAction implements Action {
    readonly type = EDIT_VARIABLE_VALUE;

    constructor(public payload: any) {}
}

export type Action = AddVariableAction | RemoveVariableAction | EditVariableKeyAction | EditVariableValueAction;
