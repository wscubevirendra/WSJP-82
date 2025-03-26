export default function Input({inpHandler}) {
   
    return (
        <div className="position-relative w-100 max-w-md">
        <input
        onChange={(e)=>{
            inpHandler(e.target.value)
        }}
          type="text"
          placeholder="Search for movies..."
          className="form-control my-2"
        />
      </div>
    );
  }