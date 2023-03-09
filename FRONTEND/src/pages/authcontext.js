import { createContext, useReducer ,useEffect} from 'react'
//create context provides a way to pass out the info across the component tree in one go
// https://beta.reactjs.org/learn/extracting-state-logic-into-a-reducer in detail it is written 
export const AuthContext = createContext() //creating the context 

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(authReducer, { 
    user: null
  })
  // it will evoke when the site will get loaded
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      dispatch({ type: 'LOGIN', payload: user }) 
    }
  }, [])

  console.log('AuthContext state:', state)
  //providing context to all childrens
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>  
      { children }
    </AuthContext.Provider>
  )

}
 