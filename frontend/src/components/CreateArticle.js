import React, { useState } from 'react';
import axios from 'axios';

function CreateArticle() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('content', content);
    formData.append('image', image);

    try {
      await axios.post('http://localhost:5000/api/articles', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Article created successfully');
    } catch (err) {
      console.log(err);
      alert('Error creating article');
    }
  };

  return (
    <div>
      <h2>Create Article</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <br />
        <label>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <br />
        <label>Content:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        <br />
        <label>Image:</label>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
        <br />
        <button type="submit">Create Article</button>
      </form>
    </div>
  );
}

export default CreateArticle;
