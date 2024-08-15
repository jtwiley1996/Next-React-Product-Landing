export default function Contact() {
    return (
      <div className="max-w-3xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium">Name</label>
            <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="mt-1 p-2 w-full border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Message</label>
            <textarea className="mt-1 p-2 w-full border border-gray-300 rounded"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button>
        </form>
      </div>
    );
  }
  