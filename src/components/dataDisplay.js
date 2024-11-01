import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllData, selectData } from './DataActions';
import Card from '../Card/Card';

const DataDisplay = () => {
    const dispatch = useDispatch();
    const { loading, allTickets, allUser } = useSelector(state => state.data);
    const { selectedData, user } = useSelector(state => state.selectedData);

    useEffect(() => {
        dispatch(fetchAllData());
    }, [dispatch]);

    const handleSelectData = (group) => {
        dispatch(selectData(group, { allTickets, allUser }, "title"));
    };

    return (
        <div>
            <h1>Ticket Management</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <button onClick={() => handleSelectData('status')}>Group by Status</button>
                    <button onClick={() => handleSelectData('user')}>Group by User</button>
                    <button onClick={() => handleSelectData('priority')}>Group by Priority</button>
                    <div className="dashContainer" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {selectedData?.map((elem, index) => (
                            <div key={index} className="dashCardContainer">
                                <h2>{elem[index]?.title}</h2>
                                <div>
                                    {elem[index]?.value?.map((ticket) => {

                                        const userImage = allUser.find(user => user.id === ticket.userId)?.available
                                            ? 'public/profile.jpg'
                                            : '';


                                        const showImage = user ? false : true;

                                        return (
                                            <Card
                                                key={ticket.id}
                                                id={ticket.id}
                                                title={ticket.title}
                                                tag={ticket.tag}
                                                showImage={showImage}
                                                userImage={userImage}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default DataDisplay;
