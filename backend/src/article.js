import mongoose, { Schema } from 'mongoose';

const ArticleSchema = new Schema({
  name: String,
  upvotes: Number,
  comments: [],
});

const Article = mongoose.model('Article', ArticleSchema);

export default Article;

