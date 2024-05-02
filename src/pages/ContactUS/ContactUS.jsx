import React from 'react';
import PageTitle from '../../Components/Others/PageTitle';

import ContactBanner from '../../Components/Pages/ContactUS/ContactBanner';
import ContactDetails from '../../Components/Pages/ContactUS/ContactDetails';


const ContactUS = () => {
    return (
        <div className=''>

            {/* title */}

            <PageTitle title="Contact Us"></PageTitle>

            {/* end */}

            <ContactBanner />
            <ContactDetails />
        </div>
    );
};

export default ContactUS;