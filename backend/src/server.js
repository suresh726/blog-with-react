import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Article from './article';

const PORT = 8000;
const MONGO_URL = "mongodb+srv://admin:admin@clusterdemo.d1bg3.mongodb.net/blog?retryWrites=true&w=majority"
mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();
app.use(bodyParser.json());

app.get('/api/articles/:articleName', async (req, res) => {
  const articleName = req.params.articleName;
  try {
    const article = await Article.findOne({name: articleName});
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({message: 'Something went wrong while accessing DB'})
  }
})

app.post('/api/articles/:articleName/upvote', async (req, res) => {
  const articleName = req.params.articleName;

  try {
    const article = await Article.findOne({name: articleName});
    const updatedArticle = await Article.findOneAndUpdate({name: articleName}, {upvotes: article.upvotes+1}, {new: true});
    console.log(updatedArticle);
    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(500).json({message: error.message})
  }

});

app.post('/api/articles/:articleName/add-comment', async (req, res) => {
  const articleName = req.params.articleName;
  const {username, text} = req.body;

  try {
    const article = await Article.findOne({name: articleName});
    console.log(article.comments);
    console.log(username, text);
    const updatedArticle = await Article.findOneAndUpdate({name: articleName}, {comments: article.comments.concat({ username, text})}, {new: true});
    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

app.listen(PORT, () => console.log(`Running nodejs on ${PORT}`))