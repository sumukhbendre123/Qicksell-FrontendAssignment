// DashCard.jsx
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Avatar from '../Avatar/Avatar';
import Card from '../Card/Card';

const DashCard = ({ elem, user }) => (
    <div className="dashCardContainer">
        <div className="dashCardHeading flex-sb">
            <div className="leftView">
                {user ? (
                    <Avatar size={15} />
                ) : (
                    <span className="noUserIcon">{/* Custom No User Icon */}</span>
                )}
                <span>
                    {elem.title} {elem.value?.length}
                </span>
            </div>
            <div className="rightView">
                <AiOutlinePlus />
                <span style={{ letterSpacing: '2px' }}>...</span>
            </div>
        </div>
        <div className="dashList flex-gap-10">
            {elem.value?.map((item) => (
                <Card key={item.id} {...item} />
            ))}
        </div>
    </div>
);

export default DashCard;
