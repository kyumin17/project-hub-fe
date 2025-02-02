import TagFilterButton from '../../../component/TagFilterButton';
import { useState, useEffect } from 'react';
import NotificationCheckBox from '../../../component/NotificationCheckBox';
import http from '../../../api/http';
import { Label, Body } from '../style/MyPageStyle';

export default function MyTech() {
  const [techList, setTechList] = useState([]);

  useEffect(() => {
    async function fetchTech() {
      try {
        const res = await http.get('/users/4810');
        setTechList(res.data.tech);
      } catch (error) {
        console.log(error);
      }
    }

    fetchTech();
  }, []);

  useEffect(() => {
    async function putTech() {
      try {

      } catch (error) {
        console.log(error);
      }
    }

    putTech();
  }, [techList]);

  return (
    <div style={{marginBottom: '50px'}}>
      <Label>
        내 기술
      </Label>
      <Body>
        <TagFilterButton techList={techList} setTechList={setTechList} />
        <NotificationCheckBox />
      </Body>
    </div>
  );
}