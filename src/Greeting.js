import react from "react";

export const Greeting = ({name, favoriteNumber, favoriteColors}) => 
{
    return (
        <>
            <h2>Hello {name} ! ! ! </h2>
            
            <h3>{name}'s favorite number is {favoriteNumber}.</h3>
            
            <h3>{name}'s favorite number plus 10 is {favoriteNumber +10}.</h3>
            
            <h3>{name}'s favorite colors are:
                <ul>
                    {favoriteColors && favoriteColors.map(color => <li key={color} >{color}</li>)}
                </ul>
            </h3>        
        </>

    );
};
