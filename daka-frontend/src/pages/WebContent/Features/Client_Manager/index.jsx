import FreeResources from "../Common_Component/Free_Resources/Free_Resources"
import TrustJobberHomeService from "../Common_Component/Trust_Jobber_Home_Service"
import TrialStartJobber from "../Common_Component/Trial_Start_Jobber/TrialStartJobber"
import IntegrationsWork from "../Common_Component/Integrations_Work/IntegrationsWork"

const ClientManager = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center">

            <IntegrationsWork/>
            
        <div className="flex flex-col items-center gap-20">
            <TrialStartJobber />
            <TrustJobberHomeService/>
            <FreeResources/>
        </div>

    </div>
  )
}

export default ClientManager
