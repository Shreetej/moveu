// routes/api/enquiries.js

const express =  require('express');
const { sendMail } = require('../../config/services/email');
const router = express.Router();

// Load Post model
let Enquiry = require('../../models/Enquiry');

// @route GET api/posts/test
// @description tests posts route
// @access Public
router.get('/test', (req, res) => res.send('Enquiry route testing!'));

// @route GET api/posts
// @description Get all posts
// @access Public
router.get('/', (req, res) => {
  Enquiry.find()
    .then(enquiries => res.json(enquiries))
    .catch(err => res.status(404).json({ nopostsfound: 'No Enquiries found' }));
});

// @route GET api/posts/:id
// @description Get single post by id
// @access Public
router.get('/:id', (req, res) => {
   Enquiry.findById(req.params.id)
    .then(enquiry => res.json(enquiry))
    .catch(err => res.status(404).json({ nopostfound: 'No enquiry found' }));
});

// @route GET api/posts
// @description add/save post
// @access Public
router.post('/', (req, res) => {
   Enquiry.create(req.body)
    .then(enquiry => {
      res.json({ msg: 'Post added successfully',data:enquiry })
      sendMail()
    })
    .catch(err => res.status(400).json({ error: err.message }));
});

// @route GET api/posts/:id
// @description Update post
// @access Public
router.put('/:id', (req, res) => {
   Enquiry.findByIdAndUpdate(req.params.id, req.body)
    .then(enquiry => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/posts/:id
// @description Delete post by id
// @access Public
router.delete('/:id', (req, res) => {
   Enquiry.findByIdAndRemove(req.params.id, req.body)
    .then(enquiry => res.json({ mgs: 'Enquiry entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such enquiry' }));
});

module.exports=  router;
