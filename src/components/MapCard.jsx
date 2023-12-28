export default function MapCard() {
  return (
    <>
      <h2 className="capitalize hover:uppercase text-2xl my-8 mx-auto text-center">
        Find Us On the Map
        <span className="relative inline-flex h-3 w-3 mx-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
      </h2>
      <div className="my-8 text-center">
        <address className="mt-2 not-italic text-base text-gray-900">
          <span className="inline-flex mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-red-500"
              height="16"
              width="12"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
              />
            </svg>
          </span>
          Manhattan, NY 10036, United States
        </address>
      </div>
      <div className="flex justify-center w-full">
        <div className="max-w-screen-lg w-full mx-auto">
          <iframe
            className="w-full h-96 md:h-80 lg:h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.183951891619!2d-73.9901560239469!3d40.75797867157777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2ske!4v1703713699378!5m2!1sen!2ske"
            width={600}
            height={300}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
