import React, { createContext, useReducer, useEffect } from 'react';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload, loading:false };
        case 'LOGOUT':
            return { ...state, user: null, loading:false };
        case 'SET_LOADING':
            return { ...state, loading: action.payload };
        default:
            return state;
    }
}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        loading: true
    });

    console.log("authcontext state: ", state);

    useEffect(() => {
        const fetchUser = async () => {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user) {
                try {
                    const response = await fetch('http://localhost:5000/auth/verify', {
                        headers: {
                            'Authorization': `Bearer ${user.token}`
                        }
                    });

                    if (!response.ok) {
                        throw new Error('Token verification failed');
                    }

                    const data = await response.json();
                    localStorage.setItem('user', JSON.stringify(data));
                    dispatch({ type: 'LOGIN', payload: data });
                } catch (error) {
                    console.error(error.message);
                    localStorage.removeItem('user'); // Remove invalid token from local storage
                    dispatch({ type: 'LOGOUT' }); //remove user auth context state
                }
            } 
            else {
                dispatch({ type: 'SET_LOADING', payload: false });
            }
        };

        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
