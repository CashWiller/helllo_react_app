import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                <h4>Warning!</h4>
                Are you sure want to do this?    
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Sam" 
                    timeAgo="Today at 4:49PM" 
                    content="頭香爽辣"
                />
            </ApprovalCard>
            <CommentDetail 
                avatar={faker.image.avatar()} 
                author="Alex" 
                timeAgo="Today at 2:00AM" 
                content="五樓母胎單"
            />
            <CommentDetail 
                avatar={faker.image.avatar()} 
                author="Jane" 
                timeAgo="Yestuday at 5:00PM" 
                content="你們都歪樓了"
            />
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);