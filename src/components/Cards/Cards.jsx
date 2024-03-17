import React from "react";

const Cards = ( CardContainer, Class, ) => {

    const Cards = [
        {
            ID: "1",
            Class: ""

        },
        {
            ID: "2",
            Class: ""
        },
        {
            ID: "3",
            Class: ""
        },
        {
            ID: "4",
            Class: ""
        }
    ]

  return (
    <>
        {Cards.map((Card) => (
            <CardContainer
                key={Card.ID}
                className={`${Card.Class} flex `}>

            </CardContainer>
        ))}
    </>
  )
}

export default Cards