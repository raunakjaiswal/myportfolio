import React from 'react';
const Educomp = ({ name, course, timestamp, marks }) => {
    return (
        <section className="text" data-aos="fade-up" style={{ display: 'flex', flexDirection: 'column', width: '90%', backgroundColor: '#262927', padding: '20px', marginBottom: '10px', boxShadow: '2px 2px 3px 3px #17170f', border: '0.1px solid ' }}>
            <h1 style={{ fontSize: 25, display: 'inline-flex', marginBottom: 0, color: 'white', marginTop: 0, fontWeight: '900' }}>{name}</h1>
            <h1 style={{ fontSize: 20, display: 'inline-flex', marginTop: 7, color: 'white', marginBottom: 0, fontWeight: '500' }}>{course}</h1>
            <h1 style={{ fontSize: 18, display: 'inline-flex', marginTop: 7, color: 'white', marginBottom: 0, fontWeight: '300' }}>{timestamp}</h1>
            <h1 style={{ fontSize: 18, display: 'inline-flex', marginTop: 7, color: 'white', marginBottom: 0, fontWeight: '200' }}>{marks}</h1>
        </section>
    )
}
export default Educomp;