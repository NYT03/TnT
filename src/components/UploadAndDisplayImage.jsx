
import { useState } from 'react';
function UploadAndDisplayImage() {
  const [selectedImage, setSelectedImage] = useState(null);
    return (
      <div>
        {selectedImage && (
          <div>
            <img
              alt="not found"
              width={"250px"}
              src={URL.createObjectURL(selectedImage)}
            />
            <br />
            <button onClick={() => setSelectedImage(null)}>Remove</button>
          </div>
        )}
  
        <br />
        <br />
        
        <input
          className="border-8"
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
        />
      </div>
  )
}

export default UploadAndDisplayImage
