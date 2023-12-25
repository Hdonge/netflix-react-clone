export const checkValidateData = (email, password) => {
    const isEmailValid = !!email; //here can have more complex regex and business spefics validation.
    const isPasswordValid = !!password;

    if(!isEmailValid && !isPasswordValid){
        return 'Invalid email or password'; 
    }

    return null; //
};