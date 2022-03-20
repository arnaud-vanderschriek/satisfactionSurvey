import axios from 'axios';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { setTechInfos } from '../../redux/actions/user.action';
import store from '../../redux/store/store';
import Title from './Title';


function Chart(props: any) {
  // const theme = useTheme();
  // axios fetch des data
  // const [ data, setData] = useState(putmanServicesArray)
  const [manoeuvre, setManoeuvre] = useState()
  const [electricPlan, setElectricPlan] = useState()
  const [electricBox, setElectricBox] = useState()
  const [cable, setCable] = useState()
  const [plug, setPlug] = useState()
  const [buildingPlan, setBuildingPlan] = useState()

  const [checksonnel, setChecksonnel] = useState()
  const [skillsExplorer, setSkillsExplorer] = useState()
  const [cartoSkills, setCartoSkills] = useState()
  const [mapSkills, setMapSkills] = useState()
  const [skillsnetwork, setSkillsnetwork] = useState()
  const [skillBook, setSkillBook] = useState()


  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/api/user/getDataTechForm/${props.user.id}`,
      withCredentials: true,
    }).then((res) => {
      if(res.data.errors) {
        console.log("errors")
      } else {
        if(props.user.division === "Putman Services")
          setManoeuvre(res.data[0].manoeuvre)
          setElectricPlan(res.data[0].electricPlan)
          setElectricBox(res.data[0].electricBox)
          setCable(res.data[0].cable)
          setPlug(res.data[0].plug)
          setBuildingPlan(res.data[0].buildingPlan)
        }
        if(props.user.division === "Infratec2") {
          setChecksonnel(res.data[0].checksonnel)
          setSkillsExplorer(res.data[0].skillsExplorer)
          setCartoSkills(res.data[0].cartoSkills)
          setMapSkills(res.data[0].mapSkills)
          setSkillsnetwork(res.data[0].skillsnetwork)
          setSkillBook(res.data[0].skillBook)
        }
    }).catch((err) => {
      console.log(err, 'catch Errors');
    })
  })
 

  const dataPutmanServices = [
    {
      "name": "manoeuvre",
      "value": manoeuvre,
    },
    {
      "name": "plan electrique",
      "value": electricPlan,
    },
    {
      "name": "Pose de tableau",
      "value": electricBox,
    },
    {
      "name": "Tirage de cable",
      "value": cable,
    },  {
      "name": "Prises",
      "value": plug,
    },  {
      "name": "Plan",
      "value": buildingPlan,
    }, 
  ]

  const dataInfratec2 = [
    {
      "name": "checksonnel",
      "value": checksonnel,
    },
    {
      "name": "skillsExplorer",
      "value": skillsExplorer,
    },
    {
      "name": "cartoSkills",
      "value": cartoSkills,
    },
    {
      "name": "mapSkills",
      "value": mapSkills,
    },  {
      "name": "skillsnetwork",
      "value": skillsnetwork,
    },  {
      "name": "skillBook",
      "value": skillBook,
    }, 
  ]
  return (
    
    <React.Fragment>
      <Title>Personnal stats</Title>
      <ResponsiveContainer width={900} height="300%" >
        {props.user.division === "Putman Services" ? 
         <RadarChart outerRadius={80} width={730} height={250} data={dataPutmanServices}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis angle={30} domain={[0, 1000]}  />
          <Radar name={props.user.firstname} dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Legend />
        </RadarChart> 
          : 
          <RadarChart outerRadius={80} width={730} height={250} data={dataInfratec2}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis angle={30} domain={[0, 1000]}  />
            <Radar name={props.user.firstname} dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Legend />
        </RadarChart>
     }
      </ResponsiveContainer>
    </React.Fragment>
  );
}


const mapStateToProps = (state: any) => {
  return {
    user: store.getState().user,
    techInfos2: store.getState().techInfos2
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setTechInfos: (data: any) => dispatch(setTechInfos(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart)