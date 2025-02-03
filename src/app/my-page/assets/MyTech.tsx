import TagFilterButton from '../../../component/TagFilterButton';
import { useState, useEffect } from 'react';
import NotificationCheckBox from '../../../component/NotificationCheckBox';
import http from '../../../api/http';
import { Label, Body } from '../style/MyPageStyle';

export default function MyTech({ tech }) {
  const [techList, setTechList] = useState(tech);

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