import React from 'react';
const Projectscomp = ({ dataaos, header, tools, points, image, link }) => {

    return (
        <div className="text" data-aos={dataaos} style={{ backgroundColor: '#262927', width: '550px', margin: '10px', height: '500px', boxShadow: '2px 2px 3px 3px #17170f', border: '0.1px solid ', borderRadius: '4px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
                <img src={image} style={{ width: '550px', height: '250px', opacity: 0.9 }} alt="" />
            </div>
            <div style={{ flex: 0.3, color: 'white', height: '150px', padding: '10px', marginBottom: 0 }}>
                {/* //description */}
                <h1 style={{ marginBottom: 0, marginTop: 0, fontSize: 22, fontWeight: '600' }}>{header}</h1>
                <h1 style={{ marginTop: 0, fontSize: 15, fontWeight: 'lighter' }}>{tools}</h1>
                <ul>
                    {points.map((element, ind) => {
                        return (
                            <li>{element}</li>
                        )
                    })}
                </ul>

            </div>

            <div onClick={() => window.open(`${link}`)} style={{ flex: 0.2, display: 'inline-flex', margin: '20px', cursor: 'pointer', width: '100px', height: '30px', borderRadius: '3px', border: '0.5px solid #7cf739', justifyContent: 'center', alignItems: 'center', padding: '1px' }}>
                <h1 className="text" style={{ color: '#7cf739', fontSize: 15, fontWeight: 'lighter' }}>Learn More</h1>
            </div>
        </div>

    )
}
export default Projectscomp;