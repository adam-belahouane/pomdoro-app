

const SettingModal = ({isOpen, setIsOpen}) => {

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto  ">
          
          <div className="flex items-center justify-center min-h-screen ">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-black opacity-75"></div>
            </div>
            <div className="bg-white rounded-lg shadow-xl transform transition-all sm:max-w-lg sm:w-full">
              <div className="bg-gray-100 px-4 py-3 border-b flex justify-between ">
                <h3 className="text-3xl font-bold">
                  Settings
                </h3>
                <div onClick={() => setIsOpen(false)} className="cursor-pointer ">
                    x
                </div>
              </div>

              <div className="p-4">
                <h1 className="text-xl font-bold items-center">Time (Minutes)</h1>
                <div className="flex flex-1 w-full">
                  <div className=" w-1/3 mr-3">
                    <h3>pomodoro</h3>
                    <div className="bg-[#EFF1FA]">25</div>
                  </div>
                  <div className="w-1/3 mr-3">
                    <h3>short break</h3>
                    <div className="bg-[#EFF1FA]">5</div>
                  </div>
                  <div className="w-1/3">
                    <h3>long break</h3>
                    <div className="bg-[#EFF1FA]">10</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 px-4 py-3 border-t flex justify-end">
                
              </div>
            </div>
          </div>
        </div>
    )
}

export default SettingModal