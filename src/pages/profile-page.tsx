import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { makeApiUrl } from "../configs/api-url";
import { AppHeader } from "../ui/components/app-header/app-header";
import CircleAvatar from "../ui/components/circle-avatar/circle-avatar";
import TextButton from "../ui/components/profile-button/text-button";
import { Column } from "../ui/components/shared/column";
import { Row } from "../ui/components/shared/row";
import { SizedBox } from "../ui/components/shared/sizedbox";
import TightText from "../ui/components/tight-text/tight-text";
import { Title } from "../ui/components/title/title";

type Info = {
  completedTasks: number
  totalTasks: number
}

export default function ProfilePage() {
  const navigateTo = useNavigate()
  const [todoInfo, setTodoInfo] = useState<Info>()
  const [cookies, _, removeCookie] = useCookies(['user'])

  useEffect(() => {
    fetch(makeApiUrl(`/info`), {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookies?.user?.token}`
      }
    }).then((data) => data.json().then((data) => {
      setTodoInfo(data)
    }))
  }, [])

  return <Column alignContent="center" justifyContent="center" style={{ height: '100vh'}}>
    <AppHeader/>
    <div style={{flex: 2}}></div>
    <Column justifyContent="center" alignContent="center">
      <Title title={cookies?.user?.name ?? 'Loading...'} fontWeight="500"/>
      <SizedBox height={12}/>
      <CircleAvatar value={`${cookies?.user?.name[0]}`.toUpperCase()}></CircleAvatar>
      <SizedBox height={32}/>
      <Title title={cookies?.user?.email} />
      <SizedBox height={46}/>
      <TightText title={`${todoInfo?.totalTasks ?? 0} / ${todoInfo?.completedTasks ?? 0} todos`}></TightText>
      <SizedBox height={46}/>
    </Column>
    <div style={{flex: 1}}></div>
    <Row justifyContent="space-around">
      <TextButton
        text="BACK HOME PAGE"
        onClick={() => navigateTo('/home')}
      />
      <TextButton 
        text="LOGOUT"
        onClick={() => {
          removeCookie('user')
          navigateTo('/login')
        }}
      />
    </Row>
  </Column>
}