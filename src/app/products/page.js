import styles from "./products.module.css";

const ProductPage = () => {
    console.log("Hello from product page")
    return (
        <div>
            <h1 className={styles.text_color}>This is products page</h1>
        </div>
    );
};

export default ProductPage;