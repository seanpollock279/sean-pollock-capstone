import React from 'react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import '../Map/map.css';

export default function Pin() {
    return (
        <div>
            <Icon icon={locationIcon} className="pin-icon" />
        </div>
    )
}
