// Avatar.jsx
import React from 'react';
import PropTypes from 'prop-types';
import userImage from '../../assets/userImage.jpg';

const Avatar = ({ src = userImage, size = 30, alt = 'User Avatar' }) => (
    <div style={{ width: size, height: size, display: 'inline-block' }}>
        <img
            src={src}
            alt={alt}
            style={{ width: '100%', height: '100%', borderRadius: '50%' }}
        />
    </div>
);

Avatar.propTypes = {
    src: PropTypes.string,
    size: PropTypes.number,
    alt: PropTypes.string,
};

export default Avatar;
