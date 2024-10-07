function ContactForm() {
  return (
    <form className="max-w-lg mx-auto bg-white shadow-md rounded p-8 mt-8">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-2 p-2 border rounded w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-2 p-2 border rounded w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="request" className="block text-gray-700">
          Request Type:
        </label>
        <select
          id="request"
          name="request"
          className="mt-2 p-2 border rounded w-full"
        >
          <option value="general">General Request</option>
          <option value="restaurant">Restaurant</option>
          <option value="office">Office</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          className="mt-2 p-2 border rounded w-full"
          required
        ></textarea>
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
