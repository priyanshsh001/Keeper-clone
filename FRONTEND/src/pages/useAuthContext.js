import {useContext} from 'react'
import {AuthContext} from '../pages/authcontext'
export const useAuthContext =()=>{
    const context =useContext(AuthContext)
    if(!context)
    {
        throw Error('big error')
    }
    return context
}
