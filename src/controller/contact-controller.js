const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class Contact {

  async createContact(req, res) {
    try {
      const body = req.body
      console.log('body', body)

      await prisma.contact.create({
        data: {
          ...body,
        },
      })

      return res.status(200).json({ message: 'succes' })      
    } catch (error) {
      console.error('error', error)
      return res.status(500).json({ message: 'Error creating contact' })
    }
  }
}

module.exports = Contact
