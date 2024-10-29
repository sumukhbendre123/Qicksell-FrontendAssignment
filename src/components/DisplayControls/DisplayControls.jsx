// DisplayControls.jsx
import React from 'react';
import TiThList from './path/to/TiThList';

const DisplayControls = ({
    displayOnClick,
    setDisplayOnClick,
    groupValue,
    setGroupValue,
    orderValue,
    setOrderValue,
    handleGroupValue,
}) => (
    <>
        <button
            className="p-10 f-16 btn"
            onClick={() => setDisplayOnClick(!displayOnClick)}
        >
            <TiThList /> Display
        </button>
        {displayOnClick && (
            <div className="dropOnClick flex-gap-10 p-10">
                <div className="selectGroup flex-sb">
                    <span>Grouping</span>
                    <select
                        value={groupValue}
                        onChange={(e) => handleGroupValue(e, true)}
                        className="selectStyle"
                    >
                        <option value="status">Status</option>
                        <option value="user">User</option>
                        <option value="priority">Priority</option>
                    </select>
                </div>
                <div className="selectGroup flex-sb">
                    <span>Ordering</span>
                    <select
                        value={orderValue}
                        onChange={(e) => handleGroupValue(e, false)}
                        className="selectStyle"
                    >
                        <option value="priority">Priority</option>
                        <option value="title">Title</option>
                    </select>
                </div>
            </div>
        )}
    </>
);

export default DisplayControls;
