import  React  from  'react';

const  DisplayEmployee = ({ employee }) => {
    return (
        <div  className="DisplayEmployee">
            <img  style={{ marginTop: "5%" }} src={employee.image}  alt={employee.character}  />
            <h1>{employee.character}</h1>
            <quote style={{ fontStyle: "italic", fontWeight: "300" }} >"{employee.quote}"</quote>
        </div>
    );
};

export  default  DisplayEmployee;