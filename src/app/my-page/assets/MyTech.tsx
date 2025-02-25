import TagFilterButton from '../../../component/tag/TagFilterButton';
import { useState } from 'react';
import NotificationCheckBox from '../../../component/NotificationCheckBox';
import { Label, Body } from '../style/MyPageStyle';

export default function MyTech({ tech }) {
  const [techList, setTechList] = useState(tech);

  return (
    <div>
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