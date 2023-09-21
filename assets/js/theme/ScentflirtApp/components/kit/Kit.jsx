import React, { useEffect, useState } from "react";
import { useAppContext } from '@shared/context/AppContext';
import { KitProduct, Modal, KitProductDetail, KitComparison } from '@scentflirt/components/index';
const Kit = ({ formData, onChange }) => {
    const { productsAWS, kitIds } = useAppContext();

    if (!productsAWS || !productsAWS.length) { return; }

    const [selectedKit, setSelectedKit] = useState(formData.kit || null);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [isComparisonModalOpen, setIsComparisonModalOpen] = useState(false);

    const [productDetail, setProductDetail] = useState(null);

    const products = productsAWS.filter(product => kitIds.includes(product.id));
    useEffect(() => {

        if (!products.length) return;

        let sku = products[0].sku;

        if (formData.kit) {
            sku = formData.kit;
        }

        if (selectedKit !== sku) {
            setSelectedKit(sku);
            onChange({ kit: sku });
        }

    }, [formData]);

    const handleKitSelection = (product) => {
        const { sku } = product;
        onChange({ kit: sku });
    };

    const isProductSelected = (sku, index) => {
        if (!selectedKit && index === 0) return true;

        if (sku === selectedKit) return true;

        return false;
    };

    const openDetailsModal = (id) => {
        const product = products.find(prod => prod.id === id);
        if (!product) return;
        setProductDetail(product);
        setIsDetailsModalOpen(true);
        $("html, body").animate({ scrollTop: 0 }, "slow");
    };

    const closeDetailsModal = () => {
        setIsDetailsModalOpen(false);
    };

    const openComparisonModal = () => {
        setIsComparisonModalOpen(true);
        $("html, body").animate({ scrollTop: 0 }, "slow");
    };

    const closeComparisonModal = () => {
        setIsComparisonModalOpen(false);
    };

    return (
        <div className="kit">
            {isDetailsModalOpen && (
                <Modal onClose={closeDetailsModal}>
                    <KitProductDetail product={productDetail} />
                </Modal>
            )}
            {isComparisonModalOpen && (
                <Modal onClose={closeComparisonModal}>
                    <KitComparison />
                </Modal>
            )}
            {products.map((prod, index) => {
                const { id, name, description, price, image, sku } = prod;
                return (
                    <KitProduct
                        key={id}
                        id={id}
                        name={name}
                        description={description}
                        price={price}
                        defaultImage={image}
                        onChange={() => handleKitSelection(prod)}
                        isSelected={isProductSelected(sku, index)}
                        openModal={openDetailsModal}
                    />
                );
            })}
            <a className="full-comparison" onClick={openComparisonModal}>
                VIEW A FULL COMPARISON CHART
            </a>
        </div>
    );
};

export default Kit;
