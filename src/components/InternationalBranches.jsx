import React, { useState } from 'react'
import '../css/InternationalBranches.css'
import united from '../assets/internationalBranches/united-img.png';
import malaysia from '../assets/internationalBranches/Malaysia-flag.jpg';
import singapore from '../assets/internationalBranches/Singapore.avif';
import germany from "../assets/internationalBranches/Germany.webp"
import logoimg from "../assets/internationalBranches/international.png";
import person from '../assets/internationalBranches/person.png';
import france from '../assets/internationalBranches/france.jpg'
import { IoClose } from "react-icons/io5";

function InternationalBranches() {
    const internationalData = [
        {
            id: 1,
            header: 'Gulf',
            title: 'United Arab Emirates',
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.`,
            img: united,
            setimag: logoimg,
            persons: [
                { name: 'Mr. Mohamed Riyasudeen', jobTitle: 'President ', country: 'Gulf Region, Tamil Cultural Academy', img: person },

                // { name: 'Person 2', jobTitle: 'Job Title 2', country: 'UAE', img: person },
                // { name: 'Person 1', jobTitle: 'Job Title 1', country: 'UAE', img: person },
                // { name: 'Person 2', jobTitle: 'Job Title 2', country: 'UAE', img: person },
                // { name: 'Person 1', jobTitle: 'Job Title 1', country: 'UAE', img: person },
                // { name: 'Person 2', jobTitle: 'Job Title 2', country: 'UAE', img: person },
                //  { name: 'Person 1', jobTitle: 'Job Title 1', country: 'UAE', img: person },
                // { name: 'Person 2', jobTitle: 'Job Title 2', country: 'UAE', img: person },
                // { name: 'Person 1', jobTitle: 'Job Title 1', country: 'UAE', img: person },
                // { name: 'Person 2', jobTitle: 'Job Title 2', country: 'UAE', img: person },
                // { name: 'Person 1', jobTitle: 'Job Title 1', country: 'UAE', img: person },
                // { name: 'Person 2', jobTitle: 'Job Title 2', country: 'UAE', img: person },
                // { name: 'Person 1', jobTitle: 'Job Title 1', country: 'UAE', img: person },
                // { name: 'Person 2', jobTitle: 'Job Title 2', country: 'UAE', img: person },
                // Add more persons here
            ]
        },
        {
            id: 2,
            header: 'Germany',
            title: 'Germany',
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.`,
            img: germany,
            setimag: logoimg,
            persons: [
                { name: 'Gopala pillai Ganam', jobTitle: 'President ', country: 'Germany, Tamil Cultural Academy', img: person },

            ]
        },
        {
            id: 3,
            header: 'Singapore',
            title: 'Singapore',
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.`,
            img: singapore,
            setimag: logoimg,
            persons: [
                { name: 'O Raman', jobTitle: '', country: 'Singapore', img: person },

                // Add more p ersons here
            ]
        },
        {
            id: 4,
            header: 'France',
            title: 'France',
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.`,
            img: france,
            setimag: logoimg,
            persons: [
                { name: 'Rosaiyya Susikaran', jobTitle: 'President ', country: 'France, Tamil Cultural Academy', img: person },


                // Add more persons here
            ]
        },
    ];

    const [selectedCountry, setSelectedCountry] = useState(internationalData[0]);
    // const [theme, setTheme] = useState('light');

    // const toggleTheme = () => {
    //     setTheme(theme === 'light' ? 'dark' : 'light');

    // };
    const [selectedPerson, setSelectedPerson] = useState(null);
    const openPersonDetails = (person) => {
        setSelectedPerson(person);
    };

    const closePersonDetails = () => {
        setSelectedPerson(null);
    };

    return (
        <div className='bg-[white] w-[95%] mx-auto'>

            <div className="international-header-container">
                {internationalData.map((country, index) => (
                    <div key={index} onClick={() => setSelectedCountry(country)} className='cursor-pointer p-1 min-w-[150px]'>
                        <img src={country.img} alt={country.title} />
                        <p>{country.header}</p>
                    </div>
                ))}
            </div>

            <div className="person-container">
                {selectedPerson && (
                    <div className="person-center">
                        <div className="hiden-display">
                            <div className="hiden-display-div">
                                <img src={selectedPerson.img} alt="" />
                                <div className="hiden-display-column">
                                    <div>
                                        <h1>{selectedPerson.name}</h1>
                                        <h>{selectedPerson.jobTitle}, {selectedPerson.country}</h>
                                        <div className="international-color-div"></div>


                                    </div>

                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                        of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                                        also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                                        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                                <button className="person-container-close" onClick={closePersonDetails}><IoClose /></button>
                            </div>
                        </div>
                    </div>
                )}


                {/* <h1 className='person-container-h1 texl-xl font-bold p-2'>Persons List</h1> */}
                <div className='person-row-container-one'>
                    {selectedCountry.persons.map((person, index) => (
                        <div className='person-container-ch' key={index} onClick={() => openPersonDetails(person)}>
                            <img src={person.img} alt={person.name} />
                            <h3 className='text-sm'>{person.name}</h3>
                            <h4 className='text-sm'>{person.jobTitle}</h4>
                            <h6 className='text-sm'>{person.country}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default InternationalBranches;