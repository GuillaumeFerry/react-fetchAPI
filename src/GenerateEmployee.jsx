import  React  from  'react';

const  GenerateEmployee = ({ selectEmployee }) => {
    return (
        <div  className="GenerateEmployee" style={{ marginTop: "3vh" }}>
        <button  onClick={selectEmployee}>Get Simpson</button>
        </div>
    );
};

export  default  GenerateEmployee;