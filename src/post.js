import React from 'react'



const dummingData = [
  
  {
    "title": "Sunflowers in the Summer",
    "content": "Sunflowers are known for their large, bright yellow blooms."
  }
];
const post = () => {
  const post = dummingData;
  console.log('post prop:',post);
  
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px 0', borderRadius: '10px', maxWidth: '600px' }}>
      <h2>FLOWER</h2>
      
      <h4>nature lover</h4>
      
      < img 
        src="https://img.freepik.com/free-photo/vibrant-colors-nature-close-up-wet-purple-daisy-generated-by-artificial-intellingence_25030-63819.jpg" 
        alt="FLOWER" 
        style={{ width: '100%', borderRadius: '10px', marginBottom: '20px' }} 
      />  
       
      <p>
      "Flowers are the music of the ground. From earth's lips spoken without sound." 
      </p>
      
      {post.map((item, index) => (
        <div key={index}>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
        </div>
      ))}
      < img 
        src="https://wigmoretrading.com/wp-content/uploads/2021/11/FLOWERS-AND-PLANTS.jpg" 
        alt="FLOWER" 
        style={{ width: '100%', borderRadius: '10px', marginBottom: '20px' }} 
      />  
    </div>
  )
}

export default post
