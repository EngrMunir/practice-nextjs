import React from 'react';

const DetailsPage = async({params}:{params:Promise<{slug:string}>}) => {
    const { slug } = await params;
    
    return (
        <div>
            <h2>Details page {slug}</h2>
        </div>
    );
};

export default DetailsPage;