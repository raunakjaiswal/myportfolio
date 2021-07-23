import React from 'react';

const Skillscomp = ({ image, name }) => {

    return (
        <div className="text" style={{ backgroundColor: '#10100a', display: 'inline-flex', flexDirection: 'column', padding: '20px', justifyContent: 'center', alignItems: 'center', paddingBottom: 2, marginRight: '25px', marginLeft: '25px', marginBottom: '25px', paddingLeft: '50px', paddingRight: '50px', boxShadow: '2px 2px 3px 3px #17170f', border: '0.1px solid ' }}>
            <div>
                <img src={image} style={{
                    width: '70px', height: '70px', marginLeft: 'auto', marginRight: 'auto',
                }} alt="" />
            </div>
            <h1 style={{ margin: 0, color: 'white', fontSize: 20, padding: 5, fontWeight: '500' }}>{name}</h1>
        </div>
    )
}
export default Skillscomp;