import React, {useState} from 'react';
import ComponentB from './ComponentB';

export const UserContext = React.createContext();


function ComponentA() {


    const [userName, setUserName] = useState("Linn Lat Htun");

    return (
        <div>
            <UserContext.Provider value={userName}>
                <ComponentB></ComponentB>
            </UserContext.Provider>
        </div>
    );
};

export default ComponentA;
