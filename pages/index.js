import SettingModal from "../components/SettingsModal"
import {useState} from "react"


function HomePage() {
  const [isOpen, setIsOpen] = useState(false)



  return <> <div></div> 
  <div>
  Hello world!

  <button onClick={() => setIsOpen(true)}>button</button>
  {isOpen?<SettingModal />:<></>}
  
</div>
</>
}

export default HomePage