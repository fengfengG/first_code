import { userLogin } from '../api/login';
export default {
    namespace: 'login',
    state: {
        token: ''
    },
    effects: {
        *login({ payload }, { call, put }) {
            const results = yield call(userLogin, payload)
            yield put({
                type: 'saveToken',
                payload: {
                    token: results.data.token
                }
            })
        }
    },
    reducers: {
        saveToken(state, { payload }) {
            return {
                ...state,
                ...payload
            }
        }
    }
}