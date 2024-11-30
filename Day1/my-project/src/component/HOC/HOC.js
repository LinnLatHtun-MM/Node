import React from "react";

export const withBlueBackground=(WrappedComponents) => {

    return(props) => {
        return (
            <div style={{background : "blue"}}>
                <WrappedComponents {...props}/>
            </div>
        );
    };

};

const HelloWorld = () => {
    return <h1>Hello World</h1>
};

const HOC =withBlueBackground(HelloWorld);

export default HOC;


//Loading Button
//Data Binding