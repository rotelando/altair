import { Action } from '@ngrx/store';

import * as query from '../../actions/query/query';
import * as layout from '../../actions/layout/layout';

export interface State {
    isLoading: boolean;
}

const initialState: State = {
    isLoading: false
};

export function layoutReducer(state = initialState, action: Action): State {
    switch (action.type) {
        case layout.START_LOADING:
            return Object.assign({}, state, { isLoading: true });
        case layout.STOP_LOADING:
            return Object.assign({}, state, { isLoading: false });
        default:
            return state;
    }
}
