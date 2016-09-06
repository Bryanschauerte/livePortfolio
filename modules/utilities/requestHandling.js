
const requestHandling = {

  newContent: (req, res) => {

    let date = new Date();
    req.body.date = date;
    console.log(req.body, "request hit")

    db.collection('contents').save(req.body, (err, result) => {
      if (err) return res.send(err);
      res.send(result);
    })
  },

  updateContent: (req, res) => {

  let targetTitle = req.body.title;
  let content = req.body;

    db.collection('contents', (err, collection) => {
            collection.update(
              {'title': targetTitle}, content, {safe:true}, (err, result)=>{
                if (err) {
                    console.log('Error updating content: ' + err);
                    res.send({'error':'An error has occurred'});
                } else {
                    console.log('' + result + ' document(s) updated');
                    res.send(content);
                }
            });
        });

  },

  deleteContent: (req,res)=>{
    let targetTitle = req.body.title;

      console.log('deleting '+ targetTitle)
      db.collection('contents', (err, collection)=>{
        collection.remove({'title': targetTitle}, {safe:true}, (err, result)=>{
          if(err) {
            res.send(err)
        }else{
          res.send(collection)
        }

        })
      })
  }
};
export default requestHandling
