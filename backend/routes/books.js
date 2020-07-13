const router = require('express').Router()
let Book = require('../models/book.model')


router.route('/').get((req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
    const title = req.body.title;
    const content = req.body.content
    const likes = Number(0)
    const url = req.body.url
    const description = req.body.description
    const newBook = new Book({ title, content, likes, url, description })
    newBook.save()
        .then(() => res.json('Book added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});



router.put('/update/:title', function (req, res) {
    var title = req.params.title;
    Book.findOne({ title: title }, function (err, foundObject) {
        if (err) {
            console.log(err);
            res.status(500).send();
        } else {
            if (!foundObject) {
                res.status(404).send();
            } else {
                if (req.body.likes) {
                    foundObject.likes = req.body.likes;
                }

                foundObject.save(function (err, updatedObject) {
                    if (err) {
                        console.log("error")
                        res.status(500).send();
                    } else {
                        res.send(updatedObject);
                    }
                })
            }
        }
    })
});

router.route('/:id').get((req,res)=>{
    Book.findById(req.params.id)
        .then(books => res.json(books))
        .catch(err => res.status(400).json ('Error: '+ err));
});

module.exports = router;