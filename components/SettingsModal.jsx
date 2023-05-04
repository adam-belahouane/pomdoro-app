

const SettingModal = ({isOpen, setIsOpen}) => {

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-black opacity-75"></div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
              <div className="bg-gray-100 px-4 py-3 border-b ">
                <h3 className="text-3xl font-bold">
                  Settings
                </h3>
                <div onClick={() => setIsOpen(false)}>
                    x
                </div>
              </div>
              <div className="p-4">
                {/* Modal content goes here */}
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="bg-gray-100 px-4 py-3 border-t flex justify-end">
                <button
                  className="text-gray-500 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default SettingModal