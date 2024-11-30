import React from "react";

//Define a Simple Component
const component =({data}) =>{
    return(
        <>
        <p>{data}</p>
        </>
    );
}

//Define HOC
export const loadingHOC = (WrappedComponent) => {

return ({isLoading, ...props}) => {
    if(isLoading)
    {
        return(
        <> <div >
            Loading....
            </div> </>);
    }
    return <WrappedComponent {...props}/>

}
}


//Use HOC with Component
const LoadingHOC = loadingHOC(component);

export default LoadingHOC;