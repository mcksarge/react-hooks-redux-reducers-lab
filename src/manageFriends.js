export function manageFriends(state, action) {
  switch (action.type) {
    case "friends/add":
      return {
        ...state,
        friends: [...state.friends, action.payload]
      }
      case "friends/remove":
        console.log(action.payload)
        const friends = state.friends.filter(friend => friend.id !== action.payload)
        console.log(friends)
        return {
          friends
        }
    default:
      return state;
  }
}
