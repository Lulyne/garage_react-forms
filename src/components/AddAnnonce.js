import Select from 'react-select'
import React, { useState } from 'react';

const AddAnnonce = () => {

    const [formData, setFormData] = useState({
        marque: '',
      });

    const addAnnonce = e => {
        e.preventDefault();
        console.log('annonce postee');

        // sending data to server
        // reinit values of formula later
    }

    const [marques, setMarques] = useState(["Renault", "BMW", "Peugeot", "Citroen"]);
    const addMarque = e => {
        setMarques(prevState => {
            return [...prevState, formData.marque];
        });
        setFormData(prevState => ({...prevState, marque: ''}));
    } 
    
    return (
        <form onSubmit={addAnnonce}>
            <div className='container'>
                <h1>Détails de l'annonce</h1>
                <p>Ajouter plus de détails sur votre annonce pour un maximum de visibilité</p>
                <div className='col-half'>
                    <h2>Marque</h2>
                    <Select 
                        type="text" 
                        onChange={e => addMarque(e)}
                        className='input-group' 
                        options={marques}
                        value={formData.marque}
                        />
                </div >
{/*                 <div className='col-half'>
                    <h2>Année-Modèle</h2>
                    <Select type="text" className='input-group' options={optionsAnneeModele} />
                </div >
                <div className='col-half'>
                    <h2>Kilométrage</h2>
                    <Select type="text" className='input-group' options={optionsKilometrage} />
                </div >
                <div className='col-half'>
                    <h2>Puissance fiscale</h2>
                    <Select type="text" className='input-group' options={optionsPuissanceFiscale} />
                </div >  */}
                <button>SEND</button>
            </div>
        </form>
    );
}

export default AddAnnonce;