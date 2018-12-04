import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

//this shows components, not curly braces <CommentDetail />

const App = () => {
  return (
    <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail
              author={faker.name.firstName()}
              timeAgo={faker.date.soon}
              text={faker.lorem.sentence()}
              avatar={faker.image.avatar()}
              />
          </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
              author={faker.name.firstName()}
              timeAgo={faker.date.soon}
              text={faker.lorem.sentence()}
              avatar={faker.image.avatar()}
              />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
              author={faker.name.firstName()}
              timeAgo={faker.date.soon}
              text={faker.lorem.sentence()}
              avatar={faker.image.avatar()}/>
        </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))
