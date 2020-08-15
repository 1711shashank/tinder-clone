import React, { useState, useEffect } from 'react';
import TinderCard from "react-tinder-card";
import database from './firebase'
import './TinderCards.css';

function TinderCards(){

    const [people,setPeople] = useState([]);

    // BAD
    // const people=[];
    // people.push("shahsank","Jone")

    //GOOD
    //setPeople([...people,"Shashank."Jone"])

    useEffect (() =>{

        //code runs here
        //this will run once the components loads and never again
        
        //people in the line refer to firebase varible
        const unsubscribe = database
            .collection('people')
            .onSnapshot((snapshot) => 
                setPeople(snapshot.docs.map(doc => doc.data()))
        );

        return() => {
            //this is cleanup..
            unsubscribe();
        }

    },[]);



    return (

        <div>
            {/* <h1>Tinder Card</h1> */}
            <div className="tinder_Card_Container">
            {people.map((person) => (
                <TinderCard
                   className="swipe"
                   key={person.name}   //key allow REACT to efficiently used to re-render a list
                   preventSwipe={['up','down']}
                >
                    <div 
                      className="card"
                      style={{backgroundImage: `url( ${person.url} )`  }}
                    >
                      <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>            
        </div>

    )
}

export default TinderCards