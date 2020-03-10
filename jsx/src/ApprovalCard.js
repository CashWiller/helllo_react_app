import React from 'react';

const ApprovalCard = props => {
    return (
        <div class="ui card">
            <div class="content">{props.children}</div>
            <div class="extra content">
                <div class="ui two buttons">
                    <div class="ui basic green button">同意</div>
                    <div class="ui basic red button">拒絕</div>
                </div>
            </div>
        </div>
    );
};

export default ApprovalCard;