import { UserStoreModel } from "../../reusable/userForm";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

interface Test {

}

export const WorkersFilter = (data: any, string: string) => {
  return console.log(data.filter((elem: any) => elem.division === string))
    
}
  

export function GenericWorkerTabsFunction(users: UserStoreModel[], string: string, user: UserStoreModel) {
  function a11yProps(indexTest: number) {
    return {
      _id: `simple-tab-${indexTest}`,
      'aria-controls': `simple-tabpanel-${indexTest}`,
    };
  }

  if(user.division === "Putman Services") {
    return (
      users
      .filter((elem: any) => elem.division === "Putman Services")
      .map((elem: any, index: number) => (
        elem
      )) 
    )
  }
}