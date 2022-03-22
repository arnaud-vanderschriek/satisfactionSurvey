export interface UserStoreModel {
  id: number,
  lastName: string,
  firstname: string,
  colleagues: [string],
  division: string,
  classification: string,
  poste: string,
  userForm: boolean,
  techForm: boolean,
}

export interface UserElectricSkillsModel {
  manoeuvre: number,
  electricPlan: number,
  electricBox: number,
  cable: number,
  plug: number,
  buildingPlan: number,
}

export type UserModelArray = [UserStoreModel]