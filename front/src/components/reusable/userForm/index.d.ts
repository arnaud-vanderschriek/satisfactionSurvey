export interface UserStoreModel {
  id: number,
  lastname: string,
  fistname: string,
  colleagues: [string],
  departement: string,
  status: string,
  userForm: boolean,
  techForm: boolean,
}

export interface UserElectricSkillsModel {
  Manoeuvre: number,
  electricPlan: number,
  electricBox: number,
  cable: number,
  plug: number,
  buildingPlan: number,
}