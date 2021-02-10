// ducks 패턴: 액션타입, 액션크리에이터, 리듀서가 모두 동일한 화일에 존재

// action type: 스트링, 모듈명/액션타입으로 표시
export const UPDATE_USER = 'user/UPDATE_USER';

// action creator: 액션을 동적으로 생성하는 펑션
export const updateUser = (name) => ({
  type: UPDATE_USER,
  payload: name
});

const initialState = {
  name: 'Tom'
};

export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_USER:
      return { ...state, name: action.payload };
    default:
      return state;
  }
}
