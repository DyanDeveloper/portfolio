import React from "react";

const CardIcons = ({ CardContainer, CardID, ClassName }) => {
    return () => (
        <CardContainer className={`${ClassName} flex flex-col items-start w-full max-w-md overflow-hidden min-h-96 p-1.5 bg-primary-900 rounded`}>
            <div key={CardID} className="card-content">
                
            </div>
        </CardContainer>
    );
}

export const Card1 = CardIcons({
    CardContainer: "div",
    CardID: 1,
    ClassName: "card-experience"
});
export const Card2 = CardIcons({
    CardContainer: "div",
    CardID: 2,
    ClassName: "card-experience"
});
export const Card3 = CardIcons({
    CardContainer: "div",
    CardID: 3,
    ClassName: "card-experience"
});
export const Card4 = CardIcons({
    CardContainer: "div",
    CardID: 4,
    ClassName: "card-experience"
});

