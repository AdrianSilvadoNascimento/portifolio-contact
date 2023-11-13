const express = require('express')

const ContactController = require('../controller/contact-controller')

const contactController = new ContactController()

const router = express.Router()

router.post('/', contactController.createContact)

module.exports = router
