const express = require('express');
const Contact = require('../models/contact');
const tokenVerification = require('../middleware/token-verification');

const router = express.Router();

router.get('/', tokenVerification, (req, res) => {
  Contact.find({})
    .exec((err, docs) => {
      if (err) {
        return res.status(500).json({ message: `Falha ao buscar contatos. Err: ${err.message}` });
      }
      return res.status(200).json({ payload: docs });
    });
});

router.post('/', tokenVerification, (req, res) => {
  const newContact = new Contact(req.body);
  newContact.user = req.userId;
  newContact.save()
    .then(savedContact => res.status(201).json({ message: `Contato ${savedContact.name} criado!` }))
    .catch(err => res.status(500).json({ message: `Falha ao criar contato. Err: ${err.message}` }));
});

router.put('/', tokenVerification, (req, res) => {
  const updateContact = new Contact(req.body);
  updateContact.user = req.userId;
  if (!updateContact.id) {
    res.status(400).json({ message: 'Contato não encontrado para atualizar.' });
    return;
  }
  Contact.findOneAndUpdate({ _id: updateContact.id, user: req.userId }, updateContact, (err) => {
    if (err) {
      return res.status(500).json({ message: `Falha ao atualizar contato ${updateContact.name}. Err: ${err.message}` });
    }
    return res.status(200).json({ message: `Contato ${updateContact.name} atualizado!` });
  });
});

router.delete('/:contactId', tokenVerification, (req, res) => {
  const { contactId } = req.params;
  if (!contactId) {
    res.status(400).json({ message: 'Contato não especificado para deleção.' });
    return;
  }
  Contact.findByIdAndDelete(contactId, (err) => {
    if (err) {
      return res.status(500).json({ message: `Falha ao deletar contato com id ${contactId}` });
    }
    return res.status(200).json({ message: 'Contato deletado!' });
  });
});

module.exports = router;
