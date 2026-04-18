const Contact = () => {
  return (
    <div>
      <h1 className="p-2 font-bold text-2xl">Contact Us Page</h1>
      <div className="flex flex-col p-6 border border-gray-200 w-[40%] m-2 rounded-lg">
        <label>Email</label>
        <input
          type="text"
          className="w-[60%] border border-gray-300 rounded-sm my-1 p-1"
          placeholder="Email"
        />
        <label>Message</label>
        <input
          type="text"
          className="w-[60%] border border-gray-300 rounded-sm my-1 p-1"
          placeholder="Message"
        />
        <button className="bg-blue-400 w-[20%] p-1 mt-2 rounded-sm font-bold text-white hover:bg-blue-500 cursor-pointer">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
