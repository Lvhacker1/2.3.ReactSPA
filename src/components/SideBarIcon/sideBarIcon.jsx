import { List } from "@phosphor-icons/react";
import { X } from "@phosphor-icons/react";

const SideBarIcon = ({isOpen}) => {
    return isOpen ? ( 
         <X size={30} color="#000000"/>
         ) : (
         <List size={30} color="#000000" />
    )
}

export default SideBarIcon