// ducks 패턴: 액션타입, 액션크리에이터, 리듀서가 모두 동일한 화일에 존재

// action type: 스트링, 모듈명/액션타입으로 표시
export const INCREASE = 'counter/INCREASE';
export const DECREASE = 'counter/DECREASE';

// action creator: 액션을 동적으로 생성하는 펑션
export const increaseCount = () => ({
  type: INCREASE
});

export const decreaseCount = () => ({
  type: DECREASE
});

const initialState = 0;

export const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
