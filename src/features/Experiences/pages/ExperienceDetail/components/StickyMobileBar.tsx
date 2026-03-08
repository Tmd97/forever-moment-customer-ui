const StickyMobileBar = () => {

  return (

    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex justify-between items-center lg:hidden">

      <p className="font-bold text-[var(--primary)]">
        ₹4,999
      </p>

      <button className="bg-[var(--primary)] text-white px-6 py-2 rounded-lg">

        Book Now

      </button>

    </div>

  );
};

export default StickyMobileBar;