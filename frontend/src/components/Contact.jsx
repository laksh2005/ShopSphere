import { CONTACT_BG } from "../Utils/constants";
const Contact = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0">
        <img
          src={CONTACT_BG}
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8 flex justify-center">
          <div className="card border border-pink-500/40 rounded-xl bg-black bg-opacity-20 hover:border-pink-500/80 backdrop-blur-sm w-8/12">
            <div className="card-body p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white">Contact Us</h2>
                <p className="mt-2 text-white/70">
                  Get in touch with us
                </p>
              </div>
              <form onSubmit={submitHandler} className="space-y-6">
                <div className="form-control">
                  <label className="label text-sm font-medium">
                    <span className="label-text text-white">Full Name</span>
                  </label>
                  <input
                    type="text"
                    className="input w-full p-3 bg-transparent border border-white/20 rounded 
                             transition-all duration-200 focus:border-pink-500 text-white"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-control">
                  <label className="label text-sm font-medium">
                    <span className="label-text text-white">Email Address</span>
                  </label>
                  <input
                    type="email"
                    className="input w-full p-3 bg-transparent border border-white/20 rounded 
                             transition-all duration-200 focus:border-pink-500 text-white"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="form-control">
                  <label className="label text-sm font-medium">
                    <span className="label-text text-white">Message</span>
                  </label>
                  <textarea
                    className="input w-full p-3 bg-transparent border border-white/20 rounded 
                             transition-all duration-200 focus:border-pink-500 text-white h-32 resize-none"
                    placeholder="Type your message here..."
                  />
                </div>
                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full bg-pink-500 text-white py-3 px-4 rounded font-semibold
                             transition-all duration-200 hover:bg-pink-600 hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;