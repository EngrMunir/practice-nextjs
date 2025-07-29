

const page = async({params}) => {
    const productId = await params.productId;
    return (
        <div className="text-3xl text-center">
            <h1>Single product page {productId}</h1>
        </div>
    );
};

export default page;