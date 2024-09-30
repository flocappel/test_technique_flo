/*
Version de contact dynamique 


import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom" />
      <input name="prenom" value={formData.prenom} onChange={handleChange} placeholder="Prénom" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default ContactForm;

*/