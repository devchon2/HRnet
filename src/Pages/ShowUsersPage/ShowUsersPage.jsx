import { useState, useEffect } from 'react';
import style from './ShowUsersPage.module.css'
import { useSelector } from 'react-redux';
import Json_datas from '../../utils/mockDatas.js'

export default function ShowUserPage() {
  
  console.log("datas", Json_datas)

  const [datas, setDatas] = useState(Json_datas);

  useEffect(() => {
    setDatas(Json_datas);
    console.log("datas", Json_datas)
  }, [Json_datas]);

  console.log("datas", Json_datas)



return (
  <main>

    <h1 className={style.page_Title}>Database</h1>

    

  </main>
)
}